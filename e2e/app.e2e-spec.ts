import { Angular2ForStarterPage } from './app.po';

describe('angular2-for-starter App', function() {
  let page: Angular2ForStarterPage;

  beforeEach(() => {
    page = new Angular2ForStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
