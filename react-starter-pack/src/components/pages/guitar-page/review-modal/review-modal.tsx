import { ChangeEvent, FormEvent, useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentGuitar } from '../../../../store/current-guitar/selectors';
import { ReviewModalProps, ReviewPost } from './type';
import { sendReviewAction } from '../../../../store/api-actions';
import { ThunkAppDispatch } from '../../../../types/action';

const DEFAULT_RATING = 0;
const MIN_POST_LENGTH = 1;
const MAX_POST_LENGTH = 400;

export default function ReviewModal({modalIsActive, name, deactivateModal}: ReviewModalProps): JSX.Element{
  const [nameInput, setNameInput] = useState('');
  const [advantageInput, setAdvantageInput] = useState('');
  const [disadvantageInput, setDisadvantageInput] = useState('');
  const [reviewInput, setReviewInput] = useState('');
  const [rating, setRating] = useState(0);
  const [isFormSending, setIsFormSending] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const currentGuitar = useSelector(getCurrentGuitar);
  const dispatch = useDispatch<ThunkAppDispatch>();

  const sendReview = (data: ReviewPost) => dispatch(sendReviewAction(data));

  useEffect(() => {
    const isRatingValid = rating > DEFAULT_RATING;
    const isNameAreaValid = nameInput.length >= MIN_POST_LENGTH && nameInput.length <= MAX_POST_LENGTH;
    const isAdvantageValid = advantageInput.length >= MIN_POST_LENGTH && advantageInput.length <= MAX_POST_LENGTH;
    const isDisadvantageValid = disadvantageInput.length >= MIN_POST_LENGTH && disadvantageInput.length <= MAX_POST_LENGTH;
    const isReviewValid = reviewInput.length >= MIN_POST_LENGTH && reviewInput.length <= MAX_POST_LENGTH;

    setIsFormValid(isRatingValid && isNameAreaValid && isAdvantageValid && isDisadvantageValid && isReviewValid);
  }, [rating, nameInput, advantageInput, disadvantageInput, reviewInput]);

  const handleRatingChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => setRating(+evt.currentTarget.value),
    [],
  );

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const postData = {
      guitarId: currentGuitar.id,
      userName: nameInput,
      advantage: advantageInput,
      disadvantage: disadvantageInput,
      comment: reviewInput,
      rating: rating,
    };

    setIsFormSending(true);
    sendReview(postData)
      .then(() => setIsFormSending(false));
  };
  return (
    <div style={{position: 'relative'}}>
      <div className={`modal ${modalIsActive === true ?'is-active' : ''} modal--review`}>
        <div className="modal__wrapper">
          <div className="modal__overlay" data-close-modal></div>
          <div className="modal__content">
            <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
            <h3 className="modal__product-name title title--medium-20 title--uppercase">{name}</h3>
            <form className="form-review" onSubmit={handleSubmit}>
              <div className="form-review__wrapper">
                <div className="form-review__name-wrapper">
                  <label className="form-review__label form-review__label--required" htmlFor="user-name">Ваше Имя</label>
                  <input className="form-review__input form-review__input--name" id="user-name" type="text" autoComplete="off" value={nameInput} onChange={(evt) => setNameInput(evt.currentTarget.value)}></input>
                  <p className={`form-review__warning ${nameInput.length>=MIN_POST_LENGTH ? 'visually-hidden': ''}`}>Заполните поле</p>
                </div>
                <div><span className="form-review__label form-review__label--required">Ваша Оценка</span>
                  <div className="rate rate--reverse">
                    <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" onChange={handleRatingChange}></input>
                    <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                    <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" onChange={handleRatingChange}></input>
                    <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                    <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" onChange={handleRatingChange}></input>
                    <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                    <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" onChange={handleRatingChange}></input>
                    <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                    <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" onChange={handleRatingChange}></input>
                    <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    <p className={`rate__message ${rating>=1 ? 'visually-hidden': ''}`}>Поставьте оценку</p>
                  </div>
                </div>
              </div>
              <label className="form-review__label form-review__label--required" htmlFor="adv">Достоинства</label>
              <input className="form-review__input" id="adv" type="text" autoComplete="off" value={advantageInput} onChange={(evt) => setAdvantageInput(evt.currentTarget.value)}></input>
              <p className={`form-review__warning ${advantageInput.length>=MIN_POST_LENGTH ? 'visually-hidden': ''}`}>Заполните поле</p>
              <label className="form-review__label form-review__label--required" htmlFor="disadv">Недостатки</label>
              <input className="form-review__input" id="disadv" type="text" autoComplete="off" value={disadvantageInput} onChange={(evt) => setDisadvantageInput(evt.currentTarget.value)}></input>
              <p className={`form-review__warning ${disadvantageInput.length>=MIN_POST_LENGTH ? 'visually-hidden': ''}`}>Заполните поле</p>
              <label className="form-review__label form-review__label--required" htmlFor="comment">Комментарий</label>
              <textarea className="form-review__input form-review__input--textarea" id="comment" rows={10} autoComplete="off" value={reviewInput} onChange={(evt) => setReviewInput(evt.currentTarget.value)}></textarea>
              <p className={`form-review__warning ${reviewInput.length>=MIN_POST_LENGTH ? 'visually-hidden': ''}`}>Заполните поле</p>
              <button className="button button--medium-20 form-review__button" type="submit" disabled={isFormSending || !isFormValid}>Отправить отзыв</button>
            </form>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area" onClick={() => deactivateModal()}></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
