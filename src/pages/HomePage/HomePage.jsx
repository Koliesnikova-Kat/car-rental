import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section className={s.home}>
      <h1>
        This is your best webapp to keep all your contacts organized and safe!
      </h1>

      {!isLoggedIn && (
        <>
          <h2 className={s.join}>Join us today!</h2>
          <p className={s.register}>
            Press the REGISTER button below and let`s get started!
          </p>
          <NavLink to='/register' className={s.navbtn}>
            Register
          </NavLink>
          <p className={s.login}>
            Already have an account?{' '}
            <NavLink to='/login' className={s.link}>
              Log In
            </NavLink>{' '}
            here!
          </p>
        </>
      )}
    </section>
  );
}
