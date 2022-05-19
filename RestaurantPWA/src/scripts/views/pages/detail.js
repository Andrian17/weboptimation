import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import RestarantSource from '../../data/restaurantdb-source';
import '../templates/detail-restaurant';
import { createLikeRestaurantButtonTemplate } from '../templates/template-creator';
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants';

const Detail = {
  async render() {
    return `
    <section
    class="recommended-restaurant"
    tabindex="0"
    id="main-content">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <div id="likeButtonContainer"></div>
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaurant = await RestarantSource.restaurantDetail(url.id);

    const restauranDetail = document.createElement('detail-restaurant');
    const restaurantContainer = document.querySelector('#main-content');

    if (!restaurant || restaurant.length === 0) {
      restaurantContainer.innerHTML =
        '<div class="not-found-restaurant"><p>Tidak ada data restaurant ditemukan</p></div>';
      return;
    }

    const laodingCss = document.querySelector('.lds-ellipsis');
    laodingCss.remove();
    restauranDetail.restauranRender = restaurant;
    restaurantContainer.append(restauranDetail);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    // Tombol Review
    const btnReview = document.querySelector('.btn-add-review');
    btnReview.addEventListener('click', async () => {
      const review = document.querySelector('#review-value').value;
      const nama = document.querySelector('#nama-reviewers').value;
      const idRestaurant = document.querySelector('#restaurant-id').value;
      const body = {
        id: idRestaurant,
        name: nama,
        review,
      };
      RestarantSource.restaurantReview(JSON.stringify(body));
      // document.location.reload();
      document.location.reload();
      alert('terimaksi telah memberikan review');
    });
    // End Tombol Review

    // Tombol Like / Favorite
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantsIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
