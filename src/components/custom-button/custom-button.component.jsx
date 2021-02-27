import React from "react";
import "./custom-button.styles.scss";

function customButton({children, isGoogleSignIn, ...otherProps}){
return(
<button className =  {`${isGoogleSignIn? "google-Sign-In" : ""} custom-button`} {...otherProps}> {children} </button>

)};

export default customButton;