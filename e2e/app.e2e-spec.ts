import { AngularNewsPage } from './app.po';

describe('angular-news App', () => {
  let page: AngularNewsPage;

  beforeEach(() => {
    page = new AngularNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
