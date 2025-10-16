import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectLoading,
  selectTotalCars,
} from '../../redux/cars/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations';
import Catalog from '../../components/Catalog/Catalog';
import s from './CatalogPage.module.css';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import CatalogFilter from '../../components/CatalogFilter/CatalogFilter';
import { selectAllFilters } from '../../redux/filters/selectors';
import { setAllFilters } from '../../redux/filters/slice';
import { resetCars } from '../../redux/cars/slice';
import { useState } from 'react';

export default function CatalogPage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectAllFilters);

  const cars = useSelector(selectCars);
  const totalCars = useSelector(selectTotalCars);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchCars({ ...filters, page }));
  }, [dispatch, page, filters]);

  const brands = Array.from(new Set(cars.map((car) => car.brand))).sort(
    (a, b) => a.localeCompare(b)
  );
  const brandOptions = brands.filter(Boolean).map((brand) => ({ label: brand, value: brand }));

  const toNum = (value) => Number(String(value).replace(/[^\d.]/g, ''));
  const priceSet = Array.from(new Set(cars.map((car) => toNum(car.rentalPrice))));
  const sortedPrices = priceSet
    .filter((n) => !Number.isNaN(n))
    .sort((a, b) => a - b);
  const priceOptions = sortedPrices.map((price) => ({
    label: `To $${price}`,
    value: String(price),
  }));

  const handleSearch = (values) => {
    dispatch(setAllFilters(values));
    // dispatch(fetchCars(values));
    setPage(1);
  };

  return (
    <div className={s.catalog}>
      <CatalogFilter
        brands={brandOptions}
        prices={priceOptions}
        initialValues={filters}
        onSearch={handleSearch}
      />

      {isLoading && !error && <p>Cars are loading...</p>}

      {error && <p>{error}</p>}

      {cars.length > 0 && <Catalog />}

      {cars.length < totalCars && !isLoading && (
        <LoadMoreBtn setPage={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
}
