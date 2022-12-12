import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contacts from '../components/Contacts/Contacts';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
export default function MainPage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}
