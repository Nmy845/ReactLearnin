import { StarsProps } from './type';
export default function GuitarStars({count, rating}:StarsProps){
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
    <div className="rate product-card__rate">
      {stars}
      <p className="visually-hidden">{rating}Рейтинг: Хорошо</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{count}</p>
    </div>
  );}
