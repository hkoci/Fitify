package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.PostDTO;
import uk.ac.brunel.group7.fitify.service.PostService;


@RestController
@RequestMapping(value = "/api/posts", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    private final PostService postService;

    public PostController(final PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<PostDTO> getAllPosts() {
        return postService.findAll();
    }

    @GetMapping("/{postID}")
    public PostDTO getPost(@PathVariable final Long postID) {
        return postService.get(postID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createPost(@RequestBody @Valid final PostDTO postDTO) {
        return postService.create(postDTO);
    }

    @PutMapping("/{postID}")
    public void updatePost(@PathVariable final Long postID, @RequestBody @Valid final PostDTO postDTO) {
        postService.update(postID, postDTO);
    }

    @DeleteMapping("/{postID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable final Long postID) {
        postService.delete(postID);
    }

}
