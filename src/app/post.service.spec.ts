import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { Post } from './post';
import { MessageService } from './message.service';
import { POSTS } from './mock-posts';

let posts: Post[];
describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService]
    });

    POSTS.splice(0, POSTS.length);
    posts = POSTS;

  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  it('Should add new post to the top of the list', inject([PostService], (service: PostService) => {
    expect(posts.length).toEqual(0);
    service.incrementId = 1;
    service.addPost('First post');
    service.addPost('Second post');

    expect(posts.length).toEqual(2);
    const topPost = posts[0];
    expect(topPost.id).toEqual(2);
    expect(topPost.message).toEqual('Second post');
  }));

  it('Should delete posts by ID', inject([PostService], (service: PostService) => {
    service.incrementId = 1;
    service.addPost('Post ID 1');
    service.addPost('Post ID 2');
    service.addPost('Post ID 3');
    expect(posts.length).toEqual(3);
    const postToDelete = posts[1];
    service.delete(postToDelete);
    expect(POSTS.length).toEqual(2);
    expect(posts.indexOf(postToDelete)).toEqual(-1);
  }));
});
