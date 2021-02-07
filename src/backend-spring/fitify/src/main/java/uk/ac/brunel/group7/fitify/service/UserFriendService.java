package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.UserFriend;
import uk.ac.brunel.group7.fitify.model.UserFriendDTO;
import uk.ac.brunel.group7.fitify.repos.UserFriendRepository;


@Service
public class UserFriendService {

    private final UserFriendRepository userFriendRepository;

    public UserFriendService(final UserFriendRepository userFriendRepository) {
        this.userFriendRepository = userFriendRepository;
    }

    public List<UserFriendDTO> findAll() {
        return userFriendRepository.findAll()
                .stream()
                .map(userFriend -> mapToDTO(userFriend, new UserFriendDTO()))
                .collect(Collectors.toList());
    }

    public UserFriendDTO get(final Long userFriendid) {
        return userFriendRepository.findById(userFriendid)
                .map(userFriend -> mapToDTO(userFriend, new UserFriendDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserFriendDTO userFriendDTO) {
        final UserFriend userFriend = new UserFriend();
        mapToEntity(userFriendDTO, userFriend);
        return userFriendRepository.save(userFriend).getUserFriendid();
    }

    public void update(final Long userFriendid, final UserFriendDTO userFriendDTO) {
        final UserFriend userFriend = userFriendRepository.findById(userFriendid)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userFriendDTO, userFriend);
        userFriendRepository.save(userFriend);
    }

    public void delete(final Long userFriendid) {
        userFriendRepository.deleteById(userFriendid);
    }

    private UserFriendDTO mapToDTO(final UserFriend userFriend, final UserFriendDTO userFriendDTO) {
        userFriendDTO.setUserFriendid(userFriend.getUserFriendid());
        userFriendDTO.setFriendIds(userFriend.getFriendIds());
        return userFriendDTO;
    }

    private UserFriend mapToEntity(final UserFriendDTO userFriendDTO, final UserFriend userFriend) {
        userFriend.setFriendIds(userFriendDTO.getFriendIds());
        return userFriend;
    }

}
