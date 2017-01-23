import { ActivitiesPage } from './app.po';

describe('activities App', function() {
  let page: ActivitiesPage;

  beforeEach(() => {
    page = new ActivitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
