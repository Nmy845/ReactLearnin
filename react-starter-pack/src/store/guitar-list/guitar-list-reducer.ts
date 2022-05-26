import { createReducer } from '@reduxjs/toolkit';
// import { ReviewCountProps } from '../../types/review';
import { GuitarListState } from '../../types/state';
import { adaptGuitarsToClient } from '../../utils';
import { loadGuitars } from '../action';

const initialState: GuitarListState = {
  guitarList: [],
  isDataLoaded: false,
  totalPages: [],
  reviewCount: [],
};

export const guitarListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitarList = adaptGuitarsToClient(action.payload);
      state.isDataLoaded = true;
    });
  //  .addCase(loadReviewsCount, (state, action) => {
  // 	 let result:ReviewCountProps[] = [];
  // 	 const groups = action.payload.reviews.reduce((groups, item) => {
  // 		const group = (groups[item.guitarId] || []);
  // 		group.push(item);
  // 		groups[item.guitarId] = group;
  // 		return groups;
  // 	 }, {});
  // 	 for (const [key, value] of Object.entries(groups)) {
  // 		result.push({
  // 			 id: key,
  // 			 count: value.length
  // 		  });
  // 	 }
  // 	 state.reviewCount = result;
  //  })
});
