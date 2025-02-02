import {SortTypeList} from '../../../const.ts';
import {useDispatch} from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import {useAppSelector} from '../../../components/hooks';
import {changeSorting} from '../../../store/offers-slice/offers-slice.ts';
import {getSortingType} from '../../../store/offers-slice/offers-selector.ts';

function SortingPlaces(): JSX.Element {
  const dispatch = useDispatch();
  const sortSpanRef = useRef<HTMLElement>(null);
  const [sortingIsOpened, setSortingIsOpened] = useState(false);
  const currentSort = useAppSelector(getSortingType);

  useEffect(() => {
    const hideSortList = (evt: MouseEvent) => {
      if (
        evt.target instanceof HTMLElement &&
        sortSpanRef.current &&
        !sortSpanRef.current.contains(evt.target)
      ) {
        setSortingIsOpened(false);
      }
    };

    document.addEventListener('click', hideSortList);

    return () => {
      document.removeEventListener('click', hideSortList);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get" data-testid="sorting-places-form">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        ref={sortSpanRef}
        onClick={() => setSortingIsOpened((lastOpened) => !lastOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingIsOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortTypeList).map((sortItem) => (
          <li
            key={sortItem}
            className={`places__option${sortItem === currentSort ? ' places__option--active' : ''}`}
            tabIndex={0}
            data-testid='sorting-places-option'
            onClick={() => {
              dispatch(changeSorting(sortItem));
              setSortingIsOpened(false);
            }}
          >
            {sortItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingPlaces;
