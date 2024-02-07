import React from 'react';
import First from '../components/HomeCom/mainpage/First';
import About from '../components/HomeCom/About/About';
import Serveces from '../components/HomeCom/Servece/Serveces';
import Form from '../components/Footer/Form';


const Home = () => {
  return (
    <>
      <First/>
      <About/>
      <Serveces/>
      <Form/>
    </>
  );
}

export default Home;
