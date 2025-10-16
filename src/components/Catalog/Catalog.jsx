import s from './Catalog.module.css';
import CarCard from '../CarCard/CarCard';
import { useSelector } from 'react-redux';
// import { selectFilteredCars } from '../../redux/cars/slice';
import { selectCars } from '../../redux/cars/selectors';

export default function Catalog() {
  const cars = useSelector(selectCars);
  
  if (!cars?.length) {
    return <p>No cars available</p>;
  }

  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <li key={car.id} className={s.item}>
          <CarCard
            id={car.id}
            brand={car.brand}
            model={car.model}
            yea={car.yea}
            rentalPrice={car.rentalPrice}
            type={car.type}
            rentalCompany={car.rentalCompany}
            address={car.address}
            mileage={car.mileage}
            img={car.img}
            description={car.description}
          />
        </li>
      ))}
    </ul>
  );
}
