import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Data from "./pages/shop/shop.component";
import {Route, Switch, Link} from "react-router-dom";
import Header from "./components/header/header.component";


function App(props) {
  return (
    <div>
    <Header />
    
    <Switch>
     <Route exact={true} path = "/" component = {HomePage} />
     <Route exact={true} path = "/shop" component = {Data} />
    </Switch>
    </div>
  );
  };

export default App;
