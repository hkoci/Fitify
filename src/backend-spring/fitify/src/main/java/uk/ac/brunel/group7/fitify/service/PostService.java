package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.Post;
import uk.ac.brunel.group7.fitify.model.PostDTO;
import uk.ac.brunel.group7.fitify.repos.PostRepository;


@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(final PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostDTO> findAll() {
        return postRepository.findAll()
                .stream()
                .map(post -> mapToDTO(post, new PostDTO()))
                .collect(Collectors.toList());
    }

    public PostDTO get(final Long postID) {
        return postRepository.findById(postID)
                .map(post -> mapToDTO(post, new PostDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PostDTO postDTO) {
        final Post post = new Post();
        mapToEntity(postDTO, post);
        return postRepository.save(post).getPostID();
    }

    public void update(final Long postID, final PostDTO postDTO) {
        final Post post = postRepository.findById(postID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(postDTO, post);
        postRepository.save(post);
    }

    public void delete(final Long postID) {
        postRepository.deleteById(postID);
    }

    private PostDTO mapToDTO(final Post post, final PostDTO postDTO) {
        postDTO.setPostID(post.getPostID());
        postDTO.setUserID(post.getUserID());
        postDTO.setPost(post.getPost());
        postDTO.setPublicVisibility(post.getPublicVisibility());
        postDTO.setFriendsVisibility(post.getFriendsVisibility());
        postDTO.setTags(post.getTags());
        postDTO.setUserLiked(post.getUserLiked());
        return postDTO;
    }

    private Post mapToEntity(final PostDTO postDTO, final Post post) {
        post.setUserID(postDTO.getUserID());
        post.setPost(postDTO.getPost());
        post.setPublicVisibility(postDTO.getPublicVisibility());
        post.setFriendsVisibility(postDTO.getFriendsVisibility());
        post.setTags(postDTO.getTags());
        post.setUserLiked(postDTO.getUserLiked());
        return post;
    }

}
