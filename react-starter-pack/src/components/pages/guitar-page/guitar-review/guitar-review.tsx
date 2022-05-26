import { getCurrentGuitar, getIsReviewsLoaded, getReviews } from '../../../../store/current-guitar/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsAction } from '../../../../store/api-actions';
import { useEffect, useState } from 'react';
import Review from '../review/review';
import { GuitarReviewsType } from './type';

export default function GuitarReviews( {activateModal}: GuitarReviewsType ):JSX.Element {
  const currentGuitar = useSelector(getCurrentGuitar);
  const reviews = useSelector(getReviews);
  const isReviewsLoaded = useSelector(getIsReviewsLoaded);
  const dispatch = useDispatch();
  const [reviewsPerTry, setReviewsPerTry] = useState(3);
  const showMore = () => setReviewsPerTry(reviewsPerTry + 3);

  const getReviewList = (id: number) => {
    dispatch(fetchReviewsAction(id));
  };

  useEffect(() => {
    if (!isReviewsLoaded) {
      getReviewList(currentGuitar.id);
    }
  });

  return(
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <a className="button button--red-border button--big reviews__sumbit-button" onClick={()=> activateModal()}>
		Оставить отзыв
      </a>
      {
        <Review
          reviews={reviews.slice(0,reviewsPerTry)}
        />
      }
      <button className={`button button--medium reviews__more-button ${reviewsPerTry >= reviews.length ? 'visually-hidden' : ''}`} onClick={showMore}>Показать еще отзывы</button>
      <a className="button button--up button--red-border button--big reviews__up-button" href="#">Наверх
      </a>
    </section>
  );
}
