import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import Footer from './components/Footer';

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/service' component={Service}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
