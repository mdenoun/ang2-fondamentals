import { Ang2FondamentalsPage } from './app.po';

describe('ang2-fondamentals App', () => {
  let page: Ang2FondamentalsPage;

  beforeEach(() => {
    page = new Ang2FondamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
