import { FaceBookPage } from './app.po';

describe('face-book App', () => {
  let page: FaceBookPage;

  beforeEach(() => {
    page = new FaceBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
