import { ArexFrontV1Page } from './app.po';

describe('arex-front-v1 App', () => {
  let page: ArexFrontV1Page;

  beforeEach(() => {
    page = new ArexFrontV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
