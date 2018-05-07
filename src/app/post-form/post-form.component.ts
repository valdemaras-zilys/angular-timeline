import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from '../post';
import { PostService } from '../post.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  model = new Post();
  postService = new PostService(this.messageService);

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'message': new FormControl(this.model.message, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(150)
      ])
    });
  }

  /**
   * Creates new post from form data.
   */
  onSubmit() {
    this.messageService.clear();
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value.message);

      this.postForm.reset();
      this.messageService.addSuccess('Post has been added successfully');
    }
  }

  get message() { return this.postForm.get('message'); }

}
