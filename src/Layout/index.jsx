import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

export default function Layout() {
  return (
    <>
      <Navbar logoSrc="/images/logo.svg" variant="cs_heading_color" />
      <Outlet />
      <Footer />
    </>
  );
}
