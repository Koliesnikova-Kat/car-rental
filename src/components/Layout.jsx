// import { Suspense } from 'react';
// import AppBar from './AppBar/AppBar';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet/>
      {/* <AppBar />
      <Suspense fallback={null}>{children}</Suspense> */}
    </>
  );
}
