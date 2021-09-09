import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import {seriesReducer} from './Reducers/seriesReducer';
import {favoritesReducer} from './Reducers/favoritesReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'],
};

export const rootReducer = combineReducers({
  seriesReducer,
  favoritesReducer: persistReducer(persistConfig, favoritesReducer),
});
