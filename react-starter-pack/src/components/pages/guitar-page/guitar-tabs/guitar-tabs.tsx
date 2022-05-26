import { getType } from '../../../../utils';
import { GuitarTabsType } from './type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GuitarTabs({name, vendorCode, description, stringCount, type, rating, reviewsCount}:GuitarTabsType): JSX.Element {
  const [toggleActive, setToggleActive] = useState(true);

  const stars = [];
  const starsWidth = 12;
  for(let i = 1; i <= 5; i++){
    if (i < Math.ceil(rating)){
      stars.push(
        <svg width={`${starsWidth}`} height="11" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>);
    }
    else {
      stars.push(
        <svg width={`${starsWidth}`} height="11" aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>);
    }
  }

  return (
    <div className="product-container__info-wrapper">
      <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
      <div className="rate product-container__rating">
        <p className="visually-hidden">Оценка: Хорошо</p>{stars} {reviewsCount}
      </div>
      <div className="tabs">
        <Link to="details">
          <a className={`button button--medium tabs__button ${toggleActive === false ? ' button--black-border': ''}`} onClick={()=>(setToggleActive(true))}>Характеристики
          </a>
        </Link>
        <Link to="info">
          <a className={`button button--medium tabs__button ${toggleActive === true ? ' button--black-border': ''}`} onClick={()=>(setToggleActive(false))}>Описание
          </a>
        </Link>
        <div className="tabs__content" id="characteristics">
          <table className={`tabs__table${toggleActive === false ? ' visually-hidden' : ''}`}>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
              <td className="tabs__value">{vendorCode}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Тип:</td>
              <td className="tabs__value">{getType(type)}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">{`${stringCount} струнная`}</td>
            </tr>
          </table>
          <p className={`tabs__product-description${toggleActive === true ? ' visually-hidden' : ''}`}>{description}
          </p>
        </div>
      </div>
    </div>
  );
}
