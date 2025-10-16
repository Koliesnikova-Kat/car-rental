import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import s from './CarCard.module.css';

const formatKm = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const formatAddress = (addr = '') => {
  const parts = addr.split(',').map((p) => p.trim());
  const city = parts.at(-2) || '';
  const country = parts.at(-1) || '';
  return [city, country].filter(Boolean).join(' | ');
};

export default function CarCard({
  id,
  img,
  brand,
  model,
  yea,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) {
  const dispatch = useDispatch();

  const isFav = useSelector((s) => {
    const f = s.favorites;

    if (Array.isArray(f)) {
      return f.map(String).includes(String(id));
    }

    if (f && Array.isArray(f.items)) {
      return f.items.map(String).includes(String(id));
    }

    if (f && typeof f === 'object') {
      const list = Object.keys(f)
        .filter((k) => /^\d+$/.test(k))
        .map((k) => String(f[k]));
      return list.includes(String(id));
    }

    return false;
  });

  const toggleFav = () => {
    const stringId = String(id);
    isFav
      ? dispatch(removeFavorite(stringId))
      : dispatch(addFavorite(stringId));
  };

  return (
    <article className={s.card}>
      <div className={s.carCard}>
        <div className={s.thumb}>
          <img
            src={img}
            alt={`${brand} ${model}`}
            loading='lazy'
            className={s.img}
          />
          <button
            type='button'
            className={`${isFav ? s.heartFilled : s.heart}`}
            onClick={toggleFav}
            aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFav}
          >
            <svg className={s.heartIcon}>
              <use
                href={
                  isFav
                    ? '/sprite.svg#icon-heart-filled'
                    : '/sprite.svg#icon-heart'
                }
              ></use>
            </svg>
          </button>
        </div>

        <div className={s.carInfo}>
          <header className={s.header}>
            <h3 className={s.title}>
              {brand} <span className={s.model}>{model}</span>, {yea}
            </h3>
            <div className={s.price}>${rentalPrice}</div>
          </header>

          <p className={s.info}>
            {formatAddress(address)} | {rentalCompany} | <br></br> {type} |{' '}
            {formatKm(mileage)} km
          </p>
        </div>
      </div>

      <Link to={`/catalog/${id}`} className={s.navBtn}>
        Read more
      </Link>
    </article>
  );
}
