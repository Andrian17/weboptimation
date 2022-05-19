import Detail from '../views/pages/detail';
import FavoriteRestaurants from '../views/pages/favorite-restauranst';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Restaurant,
  '/home': Restaurant,
  '/detail/:id': Detail,
  '/favorite': FavoriteRestaurants,
};

export default routes;
