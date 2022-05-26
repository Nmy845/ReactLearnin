import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
	LoadGuitars = 'data/loadGuitars',
	LoadGuitar = 'data/loadGuitar',
	LoadReviews = 'data/loadReviews',
	LoadReviewsCount = 'data/loadReviewsCount',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
