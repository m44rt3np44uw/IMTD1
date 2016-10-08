import { IPMEDT2Page } from './app.po';

describe('ipmedt2 App', function() {
  let page: IPMEDT2Page;

  beforeEach(() => {
    page = new IPMEDT2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
