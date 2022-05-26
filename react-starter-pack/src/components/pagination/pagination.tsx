import { paginationProps } from './type';

export default function Pagination({guitarsPerPage, totalGuitars, paginate, currentPage, nextPage, prevPage}: paginationProps): JSX.Element {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalGuitars/guitarsPerPage);

  for(let i = 1; i <= totalPages; i++)	{
    pageNumbers.push(i);
  }
  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        <li className={`pagination__page pagination__page--prev ${currentPage === 1 ? 'visually-hidden' : ''}`} id="prev">
          <a className="link pagination__page-link" href="#" onClick={prevPage} >
Назад
          </a>
        </li>
        {
          pageNumbers.map((Count) => (
            <li className={`pagination__page pagination__page--${currentPage === Count ? 'active': ''}` } key={Count} >
              <a className="link pagination__page-link" href="#" onClick={(e) => {paginate(Count);e.preventDefault();}}>
                {Count}
              </a>
            </li>
          ))
        }
        <li className={`pagination__page pagination__page--next ${currentPage === totalPages ? 'visually-hidden' : ''}`} id="next">
          <a className="link pagination__page-link" href="#" onClick={nextPage}>
Далее
          </a>
        </li>
      </ul>
    </div>
  );
}
