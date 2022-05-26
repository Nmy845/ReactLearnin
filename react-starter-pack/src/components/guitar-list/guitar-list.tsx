import { memo } from 'react';
import GuitarCard from '../guitar-card/guitar-card';
import { GuitarListProps } from './type';

function GuitarList({guitars}: GuitarListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">
      {guitars.map((guitar) => (
        <GuitarCard
          key={guitar.id}
          id={guitar.id}
          guitarName={guitar.name}
          previewImg={guitar.previewImg}
          type={guitar.type}
          price={guitar.price}
          rating={guitar.rating}
          count={guitar.price} //ПЕРЕДАТЬ СЮДА ДЛИННУ МАССИВА РЕВЬЮХ. ГДЕ ПОЛУЧЕНИЕ РЕВЬЮХ?
        />
      ))}
    </div>
  );
}

export default memo(GuitarList);
