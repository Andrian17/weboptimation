Feature('Liking Restaurant');

Scenario('liking one restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Tidak ada data restaurant ditemukan', '.not-found-restaurant');

  I.amOnPage('/');

  I.seeElement('.list-restaurant');
  I.seeElement('.card');

  I.seeElement('.to-detail');
  I.click(locate('.to-detail').first());

  I.seeElement('[aria-label="like this rest"]');
  I.seeElement('#likeButtonContainer');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('[aria-label="unlike this rest"]');
  I.seeElement('.detail-restaurant');
  I.seeElement('.form-review');
});
