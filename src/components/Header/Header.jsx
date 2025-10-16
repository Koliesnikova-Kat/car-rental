import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Header() {
  return (
    <header className={s.header}>
      <Logo />

      <nav className={s.nav}>
        <NavLink to='/' className={buildLinkClass}>
          Home
        </NavLink>

        <NavLink to='/catalog' className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
