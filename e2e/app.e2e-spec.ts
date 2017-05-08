import { RecepiBookPage } from './app.po';

describe('recipe-book App', () => {
  let page: RecepiBookPage;

  beforeEach(() => {
    page = new RecepiBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
