import { combineReducers } from '@reduxjs/toolkit';

import { restaurante } from './modules/restaurante/reducer';

export default combineReducers({
  restaurante,
});