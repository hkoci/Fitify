package uk.ac.brunel.group7.healthapp.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.healthapp.domain.User;
import uk.ac.brunel.group7.healthapp.domain.UserFriend;
import uk.ac.brunel.group7.healthapp.model.UserFriendDTO;
import uk.ac.brunel.group7.healthapp.repos.UserFriendRepository;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;


@Service
public class UserFriendService {

    private final UserFriendRepository userFriendRepository;
    private final UserRepository userRepository;

    public UserFriendService(final UserFriendRepository userFriendRepository,
                             final UserRepository userRepository) {
        this.userFriendRepository = userFriendRepository;
        this.userRepository = userRepository;
    }

    public List<UserFriendDTO> findAll() {
        return userFriendRepository.findAll()
                .stream()
                .map(userFriend -> mapToDTO(userFriend, new UserFriendDTO()))
                .collect(Collectors.toList());
    }

    public UserFriendDTO get(final Long id) {
        return userFriendRepository.findById(id)
                .map(userFriend -> mapToDTO(userFriend, new UserFriendDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserFriendDTO userFriendDTO) {
        final UserFriend userFriend = new UserFriend();
        mapToEntity(userFriendDTO, userFriend);
        return userFriendRepository.save(userFriend).getId();
    }

    public void update(final Long id, final UserFriendDTO userFriendDTO) {
        final UserFriend userFriend = userFriendRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userFriendDTO, userFriend);
        userFriendRepository.save(userFriend);
    }

    public void delete(final Long id) {
        userFriendRepository.deleteById(id);
    }

    private UserFriendDTO mapToDTO(final UserFriend userFriend, final UserFriendDTO userFriendDTO) {
        userFriendDTO.setId(userFriend.getId());
        userFriendDTO.setFriendIds(userFriend.getFriendIds());
        userFriendDTO.setUserfriends(userFriend.getUserfriends() == null ? null : userFriend.getUserfriends().getId());
        return userFriendDTO;
    }

    private UserFriend mapToEntity(final UserFriendDTO userFriendDTO, final UserFriend userFriend) {
        userFriend.setFriendIds(userFriendDTO.getFriendIds());
        if (userFriendDTO.getUserfriends() != null &&
                (userFriend.getUserfriends() == null || !userFriend.getUserfriends().getId().equals(userFriendDTO.getUserfriends()))) {
            final User userfriends = userRepository.findById(userFriendDTO.getUserfriends())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            userFriend.setUserfriends(userfriends);
        }
        return userFriend;
    }

}
