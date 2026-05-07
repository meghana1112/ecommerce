import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
