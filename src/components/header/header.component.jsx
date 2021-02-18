import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.component.scss"

function Header(){
return(
    <div className = "header">
        <Link to="/" className = "logo-container">
        <Logo className = "logo"></Logo>
        </Link>
       <div className= "options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="./CONTACT" className="option">CONTACT</Link>
       </div> 
    </div>
)};

export default Header;