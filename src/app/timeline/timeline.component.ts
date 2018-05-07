import { Component, OnInit, NgModule } from '@angular/core';
import { MessageService } from '../message.service';
import { PostService } from '../post.service';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

  deletePost(post: Post) {
    this.messageService.clear();
      this.postService.delete(post);
  }
}
