import {combineReducers} from 'redux';

import {seriesReducer} from './Reducers/seriesReducer';
import {favoritesReducer} from './Reducers/favoritesReducer';

export const rootReducer = combineReducers({seriesReducer, favoritesReducer});
