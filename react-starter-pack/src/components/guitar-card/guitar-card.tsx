import { AppRoute } from '../../const';
import {memo} from 'react';
import { GuitarCardProps } from './type';
import GuitarStars from './guitar-stars/guitar-stars';
import { getType } from '../../utils';

function GuitarCard({id, guitarName, previewImg, type, price, rating, count}: GuitarCardProps): JSX.Element {
  const guitarRoute = AppRoute.Guitar.replace(':id',`${id}`);
  const imgNumber = previewImg.charAt(11);

  return(
    <div className="product-card"><img src={`img/content/catalog-product-${imgNumber}.jpg`} srcSet={`img/content/catalog-product-${(imgNumber)}@2x.jpg 2x`} width="75" height="190" alt="СURT Z30 Plus Acoustics"/>
      <div className="product-card__info">
        <GuitarStars
          count={count}
          rating={rating}
        />
        <p className="product-card__title">{guitarName} {getType(type)}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons"><a className="button button--mini" href={guitarRoute}>Подробнее</a><a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </div>

  );
}

export default memo(GuitarCard);
