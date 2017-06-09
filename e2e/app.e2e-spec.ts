import { ScotchFileUploadPage } from './app.po';

describe('scotch-file-upload App', () => {
  let page: ScotchFileUploadPage;

  beforeEach(() => {
    page = new ScotchFileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
