import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers) => persistReducer(persistConfig, reducers);