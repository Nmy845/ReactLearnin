import type { GuitarProps } from '../../types/guitar';
import type { State } from '../../types/state';
import type { ReviewProps } from '../../types/review';

export const getIsReviewsLoaded = ({guitar}: State): boolean => guitar.isReviewsLoaded;
export const getCurrentGuitar = ({guitar}: State): GuitarProps => guitar.currentGuitar;
export const getReviews = ({guitar}: State): ReviewProps[] => guitar.reviews;
