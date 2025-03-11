import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
// import PrivateRoute from '../PrivateRoute';
// import RestrictedRoute from '../RestrictedRoute';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='contacts'
            element=// {<PrivateRoute redirectTo='/login' component=
            {<ContactsPage />}
            // />}
          />
        </Route>
        <Route
          path='/register'
          element=// {<RestrictedRoute
          //     redirectTo='/contacts'
          //   component=
          {<RegistrationPage />}
          // />}
        />
        <Route
          path='/login'
          element=// {<RestrictedRoute redirectTo='/contacts' component=
          {<LoginPage />}
          // />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
