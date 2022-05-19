import API_ENDPOINT from '../globals/api-endpoint';

class RestarantSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_API);
      const data = await response.json();
      return data.restaurants;
    } catch (error) {
      console.log(error);
    }
  }

  static async restaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const data = await response.json();
      return data.restaurant;
    } catch (error) {
      console.log(error);
    }
  }

  static async restaurantReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default RestarantSource;
