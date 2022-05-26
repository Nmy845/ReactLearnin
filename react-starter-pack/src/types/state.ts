import { RootState } from '../store/root-reducer';
import { GuitarProps } from './guitar';
import { ReviewProps } from './review';
import { ReviewCountProps } from './review';

export type GuitarListState = {
	guitarList: GuitarProps[],
	isDataLoaded: boolean,
	totalPages: number[],
	reviewCount: ReviewCountProps[],
}

export type CurrentGuitarState = {
	currentGuitar: GuitarProps,
	reviews: ReviewProps[],
	isReviewsLoaded: boolean,
}

export type State = RootState;
