package uk.ac.brunel.group7.healthapp.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.healthapp.domain.Post;
import uk.ac.brunel.group7.healthapp.domain.User;
import uk.ac.brunel.group7.healthapp.model.PostDTO;
import uk.ac.brunel.group7.healthapp.repos.PostRepository;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;


@Service
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public PostService(final PostRepository postRepository,
                       final UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public List<PostDTO> findAll() {
        return postRepository.findAll()
                .stream()
                .map(post -> mapToDTO(post, new PostDTO()))
                .collect(Collectors.toList());
    }

    public PostDTO get(final Long id) {
        return postRepository.findById(id)
                .map(post -> mapToDTO(post, new PostDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PostDTO postDTO) {
        final Post post = new Post();
        mapToEntity(postDTO, post);
        return postRepository.save(post).getId();
    }

    public void update(final Long id, final PostDTO postDTO) {
        final Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(postDTO, post);
        postRepository.save(post);
    }

    public void delete(final Long id) {
        postRepository.deleteById(id);
    }

    private PostDTO mapToDTO(final Post post, final PostDTO postDTO) {
        postDTO.setId(post.getId());
        postDTO.setUserPosted(post.getUserPosted());
        postDTO.setPost(post.getPost());
        postDTO.setPublicVisibility(post.getPublicVisibility());
        postDTO.setFriendsVisibility(post.getFriendsVisibility());
        postDTO.setTags(post.getTags());
        postDTO.setUserLiked(post.getUserLiked());
        postDTO.setUserPosts(post.getUserPosts() == null ? null : post.getUserPosts().getId());
        return postDTO;
    }

    private Post mapToEntity(final PostDTO postDTO, final Post post) {
        post.setUserPosted(postDTO.getUserPosted());
        post.setPost(postDTO.getPost());
        post.setPublicVisibility(postDTO.getPublicVisibility());
        post.setFriendsVisibility(postDTO.getFriendsVisibility());
        post.setTags(postDTO.getTags());
        post.setUserLiked(postDTO.getUserLiked());
        if (postDTO.getUserPosts() != null &&
                (post.getUserPosts() == null || !post.getUserPosts().getId().equals(postDTO.getUserPosts()))) {
            final User userPosts = userRepository.findById(postDTO.getUserPosts())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            post.setUserPosts(userPosts);
        }
        return post;
    }

}
