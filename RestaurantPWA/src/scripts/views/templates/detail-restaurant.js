import CONFIG from '../../globals/confing';

class DetailRestaurant extends HTMLElement {
  set restauranRender(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const foods = this._restaurant.menus.foods;
    const drinks = this._restaurant.menus.drinks;
    this.innerHTML = '';
    this.innerHTML = `
      <div class="detail-restaurant" id="main-content" tabindex="0">
        <div class="head-content-restaurant">
          <h2 class="detail-restaurant__name">${this._restaurant.name}</h2>
          <div class="detail-rating">
              <span class="detail-restaurant__rating-value">rating : ${
                this._restaurant.rating
              }</span>
          </div>
          <div class="detail-address">
              <span class="detail-restaurant__address-value">alamat : ${
                this._restaurant.address
              }</span>
          </div>
          <div class="detail-city">
            <span class="detail-restaurant__city-value">kota : ${
              this._restaurant.city
            }</span>
          </div>
    </div>
        <div class="detail-restaurant__image">
          <picture>
            <source srcset="${
              CONFIG.BASE_IMAGE_URL_SM + this._restaurant.pictureId
            }" type="image/webp" media="all and (max-width: 600px)" />
            <source srcset="${
              CONFIG.BASE_IMAGE_URL_SM + this._restaurant.pictureId
            }" type="image/jpeg" media="all and (max-width: 600px)" />
            <source srcset="${
              CONFIG.BASE_IMAGE_URL_MD + this._restaurant.pictureId
            }" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />
            <source srcset="${
              CONFIG.BASE_IMAGE_URL_MD + this._restaurant.pictureId
            }" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />
            <img src="${
              CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId
            }" alt="${this._restaurant.name}">
           
          </picture>
        </div>

            
        <div class="detail-restaurant__container">
                <div class="detail-restaurant__info">
                <h2 class="restaurant-description">Description</h2>
                    <p>${this._restaurant.description}</p>
                    <div class="detail-categories">
                        <h4>Kategori : </h4>
                        ${this._restaurant.categories.map(
                          ({ name }) =>
                            `&nbsp &nbsp<span class="detail-restaurant__category-value">${name}</span>`
                        )}
                    </div>
                    <div class="detail-menu">
                        <h4>Menu : </h4>
                            <p>Makanan : </p>
                            &nbsp &nbsp &nbsp &nbsp${foods.map(
                              ({ name }) =>
                                ` <span class="detail-restaurant__menus-value"> ${name}</span>`
                            )}
                            <p>Minuman : </p>
                            &nbsp &nbsp &nbsp &nbsp${drinks.map(
                              ({ name }) =>
                                ` <span class="detail-restaurant__menus-value"> ${name}</span>`
                            )}
                    </div> 
                </div>
                <div class="detail-restaurant__reviews">
                    <h3>Reviewers : </h3>
                    ${this._restaurant.customerReviews.map(
                      ({ name, review, date }) => {
                        return `
                        <div class="detail-restaurant__review">
                        <div class="detail-restaurant__review-name"><span>${name}</span> | 
                        <small>${date}</small>
                        </div>
                        <div class="detail-restaurant__review-text">"${review}"</div> 
                            </div>
                        `;
                      }
                    )}
                </div>
              </div>
        </div>
        `;
    this.renderFormReview();
  }

  renderFormReview() {
    this.innerHTML += `
    <div class="form-review">
      <div class="form-input">
        <input type="hidden" id="restaurant-id" value="${this._restaurant.id}">
        <label for="nama-reviewers">Nama:
          <input type="text" id="nama-reviewers" class="input-review">
        </label>
        <label for="reviews" class="label-input-review">Reviews:
        </label>
        <textarea name="review" id="review-value" rows="10">
        </textarea>
        </div>
        <button class="btn-add-review">tambahkan review</button>
    </div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
