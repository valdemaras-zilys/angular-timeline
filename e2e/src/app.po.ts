import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo( url = '/' ) {
    return browser.get(url);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPostMessageField() {
    return element(by.css('#postMessage'));
  }

  getPostSubmitButton() {
    return element(by.css('button[type=submit]'));
  }

  getSuccessMessageText() {
    return element(by.css('#message-container div.message.success')).getText();
  }

  getLastPostText() {
    return element(by.css('div.post.container div.message')).getText();
  }

  getLastPostDeleteButton() {
    return element(by.css('div.post.container:first-of-type div.controls button'));
  }
}
