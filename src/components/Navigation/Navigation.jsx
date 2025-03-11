// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      {/* {isLoggedIn && */}
      <NavLink to='/tasks'>Tasks</NavLink>
      {/* // } */}
    </nav>
  );
};
