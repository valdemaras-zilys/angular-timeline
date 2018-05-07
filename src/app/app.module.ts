import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimelineComponent } from './timeline/timeline.component';
import { MessagesComponent } from './messages/messages.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MessagesComponent,
    PostFormComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
