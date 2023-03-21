import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <div>
       <Navbar/>
        <main className='px-4 md:px-12 py-8 min-h-screen'>
          {children}
        </main>
        <Footer/>
      </div>
    );
  };

export default Layout;