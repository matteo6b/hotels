import { HotelsPage } from './app.po';

describe('hotels App', () => {
  let page: HotelsPage;

  beforeEach(() => {
    page = new HotelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
