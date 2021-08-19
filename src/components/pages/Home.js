import React from 'react';
import Web from '../../images/rocket_launch.svg';
import Header from '../Header';

const Home = ()=>{
  return(
    <>
      <Header name="Grow your business with" 
      imgSrc={Web}
      visit={"/service"}
      btName="Get started"/>
    </>
  );
}

export default Home;
