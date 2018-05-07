import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AppModule } from './app.module';
import { MessagesComponent } from './messages/messages.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';
import { PostService } from './post.service';
import { MessageService } from './message.service';
import { Post } from './post';
import { POSTS } from './mock-posts';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        AppComponent,
        PostFormComponent,
        MessagesComponent,
        TimelineComponent,
        TimeAgoPipe
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Tlineime demo app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Timeline demo application');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Timeline demo application');
  }));
});
