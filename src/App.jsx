import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='md:min-h-[calc(100vh - 441px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
