import React from 'react';
import Header from '../Header';
import Web from '../../images/4.svg';

const About = ()=>{
  return(
    <>
      <Header name="Welcome to About page" 
      imgSrc={Web}
      visit={"/contact"}
      btName="Contact Us"/>
    </>
  );
}

export default About;
