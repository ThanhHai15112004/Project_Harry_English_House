import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-[68px] sm:pt-[74px]">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
