import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({title, imgURL, id, size})=>(

<div className={`${size} menu-item`}>
    <div  style = {{backgroundImage: `url(${imgURL})`}} className = "background-image"></div>
    <div className='content'>
      <div className='title' >{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)

export default MenuItem;  