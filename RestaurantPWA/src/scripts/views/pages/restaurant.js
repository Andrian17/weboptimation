import RestarantSource from '../../data/restaurantdb-source';
import '../templates/list-restaurant';

const Restaurant = {
  async render() {
    return `
    <h1 class="cap3">Daftar Restaurant Recommended</h1>
    <section class="recommended-restaurant" tabindex="0" id="main-content">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      <div class="not-found-restaurant">Tidak ada data restaurant ditemukan</div>
    </section>`;
  },
  async afterRender() {
    const restaurants = await RestarantSource.listRestaurants();
    if (restaurants) {
      const restaurantContainer = document.querySelector('#main-content');
      const restaurantList = document.createElement('list-restaurant');
      restaurantContainer.innerHTML = '';
      restaurantList.ItemRestaurant = restaurants;
      restaurantContainer.append(restaurantList);
    }
  },
};

export default Restaurant;
