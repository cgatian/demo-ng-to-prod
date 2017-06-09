import { NgProdDemoPage } from './app.po';

describe('ng-prod-demo App', () => {
  let page: NgProdDemoPage;

  beforeEach(() => {
    page = new NgProdDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
