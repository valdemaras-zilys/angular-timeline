import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostFormComponent } from './post-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { POSTS } from '../mock-posts';

describe('PostFormComponent', () => {


  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;
  let form: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PostFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should find new post form', () => {
    expect(form).toBeDefined();

  });

  it('Should have mandatory field', () => {
    const postMessage = form.query(By.css('textarea#postMessage'));
    expect(postMessage).toBeDefined();
    expect(postMessage.attributes['required']).toBe('');
  });

  it('Should should have disabled submit button when no text added', () => {
    const submitButton = form.query(By.css('button[type=submit]'));
    expect(submitButton).toBeDefined();
    expect(submitButton.nativeElement.disabled).toBeTruthy();
  });

  it('Should validate post message input as required', () => {
    let errors = {};
    const postMessage = fixture.componentInstance.postForm.controls['message'];

    errors = postMessage.errors || {};
    expect(errors['required']).toBeTruthy();

    postMessage.setValue('Some text');
    errors = postMessage.errors || {};
    expect(errors['required']).toBeFalsy();

    postMessage.setValue('');
    errors = postMessage.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('Should validate post message max-length', () => {
    let errors = {};
    const postMessage = fixture.componentInstance.postForm.controls['message'];

    errors = postMessage.errors || {};
    expect(errors['required']).toBeTruthy();

    postMessage.setValue('Some text');
    errors = postMessage.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeUndefined();

    postMessage.setValue('yqNRRwu4Qpr6EEDLZqGHSggPLG116X'
      + 'JBIUAfBvpCP1gUqIwulgRorLsKxvXgag9NRsThjAZjwDbpo9ZOy'
      + '5oeslfx5pzwflpPrlzXwUI9jRhYSbRH2N0N229quogSZ1tKLgKe'
      + 'q7yyd0jQHoq8AcwkOwi');
    errors = postMessage.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeTruthy();
  });

  it('Should add post when submited', () => {
    const postMessage = fixture.componentInstance.postForm.controls['message'];
    const submitButton = form.query(By.css('button[type=submit]'));
    const posts = POSTS;
    expect(posts.length).toEqual(0);
    expect(fixture.componentInstance.postForm.valid).toBeFalsy();
    const postMessageText = 'First post added';
    postMessage.setValue(postMessageText);
    fixture.componentInstance.onSubmit();
    expect(postMessage.value).toBeNull();

    expect(posts.length).toBeGreaterThan(0);
    const latestPost = posts[0];
    expect(latestPost.message).toEqual('First post added');
  });

});
