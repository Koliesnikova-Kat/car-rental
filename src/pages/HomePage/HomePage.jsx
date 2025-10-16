import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';

export default function HomePage() {

  return (
    <section className={s.home}>

      <div className={s.content}>
        <h1>Find your perfect rental car</h1>
  
        <h2>Reliable and budget-friendly rentals for any journey</h2>
  
        <NavLink to='/catalog' className={s.navbtn}>
          View Catalog
        </NavLink>
      </div>
    </section>
  );
}
