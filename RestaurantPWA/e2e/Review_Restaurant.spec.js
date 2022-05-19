Feature('Review Restaurant');

Scenario('Add Review restaurant', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.list-restaurant');
  I.seeElement('.card');

  I.seeElement('.to-detail');
  I.click(locate('.to-detail').first());

  I.seeElement('#likeButtonContainer');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('.detail-restaurant');
  I.seeElement('.form-review');

  I.seeElement('.btn-add-review');
  I.seeElement('#nama-reviewers');
  I.seeElement('#review-value');

  I.fillField('#nama-reviewers', 'Andrian19');
  I.fillField('#review-value', 'Bagus dan keren banget');
  I.click('.btn-add-review');
  //   pause();
  I.refreshPage();

  I.see('Bagus dan keren banget', '.detail-restaurant__review-text');
});
