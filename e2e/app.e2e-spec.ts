import { HigiPage } from './app.po';

describe('higi App', () => {
  let page: HigiPage;

  beforeEach(() => {
    page = new HigiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
