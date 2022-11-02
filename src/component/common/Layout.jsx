import React from 'react';
import GlobalBackground from './GlobalBackground';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <GlobalBackground>
        <Header />
        <main className="w-screen min-w-[360px] sm:w-[480px]">
          <Outlet />
        </main>
      </GlobalBackground>
    </>
  );
};

export default Layout;
