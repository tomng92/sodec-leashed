import { SodecLeashedPage } from './app.po';

describe('sodec-leashed App', function() {
  let page: SodecLeashedPage;

  beforeEach(() => {
    page = new SodecLeashedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
