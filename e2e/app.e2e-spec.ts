import { PiglatinAppPage } from './app.po';

describe('piglatin-app App', function() {
  let page: PiglatinAppPage;

  beforeEach(() => {
    page = new PiglatinAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
