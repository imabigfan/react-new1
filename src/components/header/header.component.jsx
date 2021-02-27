import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.component.scss"
import {auth} from "../../firebase/firebase.utils";

function Header(props){
return(
    <div className = "header">
        <Link to="/" className = "logo-container">
        <Logo className = "logo"></Logo>
        </Link>
       <div className= "options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="./CONTACT" className="option">CONTACT</Link>
            {props.currentUser?( <div className="option" onClick={()=>auth.signOut()}>Sign out</div> ):( <Link className="option" to="/signin"> Login </Link>)}
       {/* in case there is a currentUser value- diaply the button signout, if not, display a link to login  */} 
       </div>
      
    </div>
)};

export default Header;