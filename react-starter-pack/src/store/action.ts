import { createAction } from '@reduxjs/toolkit';
import { GuitarFromServer } from '../types/guitar';
import { ActionType } from '../types/action';
import { ReviewProps } from '../types/review';

export const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: GuitarFromServer[]) => ({payload: guitars}),
);

export const loadGuitar = createAction(
  ActionType.LoadGuitar,
  (guitar: GuitarFromServer) => ({payload: guitar}),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: ReviewProps[]) => ({payload: reviews}),
);

export const loadReviewsCount = createAction(
  ActionType.LoadReviewsCount,
  (reviews: ReviewProps[]) => ({payload: reviews}),
);
