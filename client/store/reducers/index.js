import { combineReducers } from 'redux';

import user from './user';
import todos from './todos';
import wallpapers from './wallpapers';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
  todos,
  wallpapers,
});

export default createRootReducer;
