import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Timeline demo application');
  });

  it('should add new post and display success message', () => {
    page.navigateTo();
    page.getPostMessageField().click();
    page.getPostMessageField().sendKeys('First Message added');
    page.getPostSubmitButton().click();
    expect(page.getSuccessMessageText()).toEqual('Post has been added successfully');
    expect(page.getLastPostText()).toEqual('First Message added');
  });

  it('should add new post and display success message', () => {
    page.navigateTo();
    page.getPostMessageField().click();
    page.getPostMessageField().sendKeys('First Message added');
    page.getPostSubmitButton().click();

    page.getPostMessageField().click();
    page.getPostMessageField().sendKeys('Second Message added');
    page.getPostSubmitButton().click();

    expect(page.getSuccessMessageText()).toEqual('Post has been added successfully');
    expect(page.getLastPostText()).toEqual('Second Message added');

    page.getLastPostDeleteButton().click();
    expect(page.getSuccessMessageText()).toEqual('Post has been removed');
  });

});
