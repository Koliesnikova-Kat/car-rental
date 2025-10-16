import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CarPage from '../pages/CarPage/CarPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import {
  // useDispatch,
  // useSelector
// } from 'react-redux';
// import { useEffect } from 'react';
// import { selectIsRefreshing } from '../redux/auth/selectors';

export default function App() {
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
  // isRefreshing ? null :
    // (
    <>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          
          <Route index element={<HomePage />} />

          <Route
            path='/catalog'
            element={
              <CatalogPage />
            }
          />

        </Route>

        <Route
          path='/catalog/:id'
          element={
            <CarPage />
          }
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
