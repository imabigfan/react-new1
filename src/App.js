import React, {useEffect, useState } from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Data from "./pages/shop/shop.component";
import {Route,Router, Switch, Link} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInSignUp from "../src/pages/sign-in-and-sign-out/sign-in-and-sing-out.component";
import {auth} from "../src/firebase/firebase.utils";

// After we logged in, we need to tell the app that the we (or user) were approved. So we first import Auth from firebase utils
//we want to store the state of the user in the app. so when the user logs in in whatever service, we want to store it in app state so we could pass it to components that need it

class App extends React.Component{
  constructor(){
    super();
    this.state = {currentUser:null}
  }

  unsubscribeFromAuth = null
//this is an open messaging system between the application and firebase. Whenever there is a change, firebase sends a message that the auth has changed- signed in or signend out and will give the "user". becuase it is open subscription, we also have to close it to avoid memory leaks with it unmounts.
  componentDidMount(){
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{ 
  this.setState({currentUser: user})
  console.log(user)
  })
}
  
//to close the subscription
componentWillUnmount(){
  this.unsubscribeFromAuth();
}


//the state won't be called again until the componentDidMount gets call again. we want to know when the authneticaiton has changed. we want to be aware when somebody signs in or out.Firebase gives it to use using auth.onAuthStateChange. it takes a function on what the user state is on the firebase project 
render(){  
return (
   
    //we give the header the currentUser state so it would know when to display the "logout" button. If it's a null it will pass in null, and if its the user object, it will pass that in.
    <div>

    <Header currentUser = {this.state.currentUser} />
    
    <Switch>
     <Route exact={true} path = "/" component = {HomePage} />
     <Route exact={true} path = "/shop" component = {Data} />
     <Route exact={true} path = "/signin" component = {SignInSignUp} />
     
    </Switch>
    </div>
    

  );
  };
}
export default App;
