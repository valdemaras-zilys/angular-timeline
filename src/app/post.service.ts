import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  incrementId = 1;

  constructor(private messageService: MessageService) { }

  /**
   * Get all posts from storage
   */
  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  /**
   * Create a new post and add to storage
   * @param message
   */
  addPost(message) {
    const post = new Post();
    post.id = this.incrementId++;
    post.message = message;
    post.submitedAt = new Date();
    POSTS.unshift(post);
  }
  /**
   * Delete post from storage
   * @param post
   */
  delete(post: Post) {
    const index: number = POSTS.indexOf(post);
    if (index !== -1) {
      POSTS.splice(index, 1);
      this.messageService.addSuccess('Post has been removed');
    } else {
      this.messageService.addError('Coud not find post to remove');
    }
  }
}
