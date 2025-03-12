import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav>
        <NavLink to='/' className={buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to='/contacts' className={buildLinkClass}>
            Contacts
          </NavLink>
        )}
      </nav>

      <nav>
        {user.name && <h3>Welcome, {user.name}!</h3>}
        {/* {!isLoggedIn && (
          <>
            <NavLink to='/register' className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to='/login' className={buildLinkClass}>
              Log In
            </NavLink>
          </>
        )} */}
        {isLoggedIn && (
          <button className={s.button} onClick={handleLogout}>
            Log Out
          </button>
        )}
      </nav>
    </header>
  );
}
