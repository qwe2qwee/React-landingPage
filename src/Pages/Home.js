import React from 'react';
import First from '../components/HomeCom/mainpage/First';
import About from '../components/HomeCom/About/About';
import Serveces from '../components/HomeCom/Servece/Serveces';
import Form from '../components/Footer/Form';
import Footer from '../components/Footer/Footer';


const Home = () => {
  return (
    <>
      <First/>
      <About/>
      <Serveces/>
      <Form/>
      <Footer/>
    </>
  );
}

export default Home;
