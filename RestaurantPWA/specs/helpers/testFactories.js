import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants';

const createLikeButtonPresenterWithMovie = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantsIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithMovie };
