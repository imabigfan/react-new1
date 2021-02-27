import React, { useState} from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";




function SignIn(){
  const [user, setUser] = useState({})



//for the form
        function handleSubmit(event){
            event.preventDefault()
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
              );
              setUser({email:"", password:"" });

        };


//for the input
        function handleChange(event){
            const {value, name} = event.target;
            setUser((preValue)=>{
                if (name==="email"){
                   return{
                    email: value,
                    password: preValue.password
                   }
                }else if(name==="password"){
                    return{
                    email: preValue.email,
                    password: value
                    }    
                }
                
            })
                };

return(
<div className = "sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
    {/* There is a hidden "value" that is transfered to the handlechange function. 
    the value={user.email} is taking the value from the state and not from the input directly */}
        <FormInput handleChange={handleChange} label ="email" name="email" type="email" value={user.email} required={true}/>
       
        <FormInput handleChange={handleChange} label ="password" name="password" type="password" value={user.password} required={true} />
        <div className = "buttons">
        <CustomButton type="submit"> Sign In </CustomButton>
        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>{' '} Sign in with Google{ " "} </CustomButton>
        </div>
    </form>
</div>

)};

export default SignIn;