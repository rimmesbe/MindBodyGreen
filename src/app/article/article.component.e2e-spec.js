describe('Article', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <article>', function () {
    var article = element(by.css('article article'));
    expect(article.isPresent()).toEqual(true);
    expect(article.getText()).toEqual("Home Works!");
  });

});
