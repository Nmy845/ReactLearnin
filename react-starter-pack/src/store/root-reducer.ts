import { combineReducers } from '@reduxjs/toolkit';
import { currentGuitarReducer } from './current-guitar/current-guitar-reducer';
import { guitarListReducer } from './guitar-list/guitar-list-reducer';

export const rootReducer = combineReducers({
  guitars: guitarListReducer,
  guitar: currentGuitarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
