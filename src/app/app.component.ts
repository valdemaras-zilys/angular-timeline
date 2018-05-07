import { Component } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timeline demo application';
}
