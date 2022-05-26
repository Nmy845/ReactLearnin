import { ThunkActionResult } from '../types/action';
import { loadGuitar, loadGuitars, loadReviews, loadReviewsCount } from './action';
import { APIRoute } from '../const';
import { GuitarFromServer } from '../types/guitar';
import { ReviewProps } from '../types/review';
import { ReviewPost } from '../components/pages/guitar-page/review-modal/type';

export const fetchReviewsCount = (guitarIds: number[]): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    let route = APIRoute.Comments.concat('?');
    for (let i = 0;i < guitarIds.length;i++){
      route += `guitarId=${guitarIds[i]}&`;
    }
    const {data} = await api.get<ReviewProps[]>(route);
    dispatch(loadReviewsCount(data));
  };

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<GuitarFromServer[]>(APIRoute.Guitars);
    dispatch(loadGuitars(data));
  };

export const fetchGuitarAction = (guitarId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const{data} = await api.get<GuitarFromServer>(APIRoute.Guitar.replace(':id',`${guitarId}`));
    dispatch(loadGuitar(data));
  };

export const fetchReviewsAction = (guitarId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const{data} = await api.get<ReviewProps[]>(APIRoute.Reviews.replace(':id', `${guitarId}`));
    dispatch(loadReviews(data));
  };

export const sendReviewAction = (review: ReviewPost ): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ReviewProps[]>(APIRoute.Reviews.replace(':id', `${review.guitarId}`), review);
    dispatch(loadReviews(data));
  };

