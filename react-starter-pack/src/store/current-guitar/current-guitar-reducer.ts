import { GuitarProps } from '../../types/guitar';
import { CurrentGuitarState } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { loadGuitar, loadReviews } from '../action';
import { adaptToClient } from '../../utils';

const initialState: CurrentGuitarState = {
  currentGuitar:{} as GuitarProps,
  reviews: [],
  isReviewsLoaded: false,
};

export const currentGuitarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitar, (state, action) => {
      state.currentGuitar = adaptToClient(action.payload);
      state.isReviewsLoaded = false;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    });
});
