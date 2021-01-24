package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.PostDTO;
import uk.ac.brunel.group7.healthapp.service.PostService;


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

    @GetMapping("/{id}")
    public PostDTO getPost(@PathVariable final Long id) {
        return postService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createPost(@RequestBody @Valid final PostDTO postDTO) {
        return postService.create(postDTO);
    }

    @PutMapping("/{id}")
    public void updatePost(@PathVariable final Long id, @RequestBody @Valid final PostDTO postDTO) {
        postService.update(id, postDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable final Long id) {
        postService.delete(id);
    }

}
