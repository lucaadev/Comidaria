import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import persistConfig from './persistConfig';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: persistConfig(rootReducer),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production'
    ? composeWithDevTools({
      name: 'Cafe-Geraes',
    })
    : false,
});

export default store;

