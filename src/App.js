import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch, Link} from "react-router-dom";

function HatPage(props){
  console.log(props);
  return ( 
  <div>
  <button onClick={()=>props.history.push("/")}>Go to home page</button>
    <h1>Hats Page</h1>
  </div>
);
};


function App(props) {
  return (
    <div>
    <Switch>
     <Route exact={true} path = "/" component = {HomePage} />
     <Route exact={true} path = "/Hats" component = {HatPage} />
    </Switch>
    </div>
  );
  };

export default App;
