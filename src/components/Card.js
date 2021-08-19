import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({imgSrc, title})=>{
  return(
    <div className="col-md-4 col-10 mx-auto">
        <div className="card h-100 card-shadow">
            <img src={imgSrc} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title my-5">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="" className="btn btn-primary">Get Started</NavLink>
            </div>
        </div>
    </div>
  );
}

export default Card;


/* <Header name="Our Services" 
      imgSrc={Web}
      visit={"/"}
      btName="Visit Home"/>*/