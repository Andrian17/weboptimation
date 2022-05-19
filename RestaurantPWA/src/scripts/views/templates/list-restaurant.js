import CONFIG from '../../globals/confing';
// lazyload
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class ListRestaurant extends HTMLElement {
  set ItemRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.classList.add('list-restaurant');
    this.renderRestaurant();
  }

  renderRestaurant() {
    this._restaurant.forEach(
      ({ id, name, city, pictureId, description, rating }) => {
        this.innerHTML += `
        <article id="${id}" class="card" tabindex="0">
        <div class="head-card">
          <h3>${name}</h3>
          <p>Kota : ${city}</p>
        </div>
        <a class="to-detail" href="#/detail/${id}">
          <picture>
              <source class="lazyload" media="all and (max-width: 600px)" data-srcset="${
                CONFIG.BASE_IMAGE_URL_SM + pictureId
              }" type="image/webp">
              <source class="lazyload" media="all and (max-width: 900px)" data-srcset="${
                CONFIG.BASE_IMAGE_URL_MD + pictureId
              }" type="image/webp">
              <source class="lazyload" media="all and (max-width: 600px)" data-srcset="${
                CONFIG.BASE_IMAGE_URL_SM + pictureId
              }" type="image/jpeg">
              <source class="lazyload" media="all and (max-width: 900px)" data-srcset="${
                CONFIG.BASE_IMAGE_URL_MD + pictureId
              }" type="image/jpeg">
              <img class="lazyload" data-src="${
                CONFIG.BASE_IMAGE_URL_MD + pictureId
              }" alt="${name}">
          </picture>
        </a>
        <div class="footer-card">
          <p class="description">${description}</p>
          <p class="rating">Rating : ${rating}</p>
        </div>
        </article>`;
      }
    );
  }
}

customElements.define('list-restaurant', ListRestaurant);
