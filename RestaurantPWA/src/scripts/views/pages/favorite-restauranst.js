import '../templates/list-restaurant';
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants';

const FavoriteRestaurants = {
  async render() {
    return `<section class="recommended-restaurant" tabindex="0" id="main-content">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#main-content');
    const restaurantList = document.createElement('list-restaurant');

    const notFound = document.createElement('div');
    notFound.classList.add('not-found-restaurant');
    notFound.innerHTML = 'Tidak ada data restaurant ditemukan';
    if (!restaurants || restaurants.length === 0) {
      setTimeout(() => {
        restaurantContainer.innerHTML = '';
        restaurantContainer.appendChild(notFound);
      }, 500);
    } else {
      restaurantContainer.innerHTML = '';
      restaurantList.ItemRestaurant = restaurants;
      restaurantContainer.append(restaurantList);
    }
  },
};

export default FavoriteRestaurants;
