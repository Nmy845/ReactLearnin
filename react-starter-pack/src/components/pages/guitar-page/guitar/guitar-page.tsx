import Header from '../../../header/header';
import Footer from '../../../footer/footer';
import { useParams } from 'react-router-dom';
import { getCurrentGuitar } from '../../../../store/current-guitar/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGuitarAction} from '../../../../store/api-actions';
import GuitarReviews from '../guitar-review/guitar-review';
import GuitarTabs from '../guitar-tabs/guitar-tabs';
import ReviewModal from '../review-modal/review-modal';
import { useState } from 'react';

export default function Guitar(): JSX.Element {
  const currentGuitar = useSelector(getCurrentGuitar);
  const dispatch = useDispatch();
  const { id }: {id: string} = useParams();
  const guitarId = Number(id);
  const [modalIsActive, setModalIsActive] = useState(false);
  const activateModal = () => setModalIsActive(true);
  const deactivateModal = () => setModalIsActive(false);

  useEffect(() => {
    if (currentGuitar.id !== guitarId){
      dispatch(fetchGuitarAction(guitarId));
    }
  });

  const {
    name,
    vendorCode,
    description,
    stringCount,
    previewImg,
    rating,
    price,
    type,
  } = currentGuitar;

  const getImg = (guitarsImg:string) => {
    if (guitarsImg === undefined){
      return '';
    } else {
      return guitarsImg.match(/(\d+)/);
    }
  };
  const currentImg = getImg(previewImg)![0];

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">{name}</h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
            </li>
            <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
            </li>
            <li className="breadcrumbs__item"><a className="link">{name}</a>
            </li>
          </ul>
          <div className="product-container">
            <img className="product-container__img" src={`img/content/catalog-product-${currentImg}.jpg`}
              srcSet={`img/content/catalog-product-${currentImg}@2x.jpg`} width="90" height="235" alt=""
            />
            <GuitarTabs
              name={name}
              vendorCode={vendorCode}
              description={description}
              stringCount={stringCount}
              type={type}
              rating={rating}
              reviewsCount={2}
            />
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
              <a className="button button--red button--big product-container__button" href="#">Добавить в корзину
              </a>
            </div>
          </div>
          <ReviewModal
            name={name}
            modalIsActive={modalIsActive}
            deactivateModal={deactivateModal}
          />
          <GuitarReviews
            activateModal={activateModal}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
