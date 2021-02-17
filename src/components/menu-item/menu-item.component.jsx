import React from "react";
import "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";

const MenuItem = ({title, imgURL, id, size, history, match, linkURL})=>(

<div className={`${size} menu-item`} onClick={()=>history.push(`{$match.url}${linkURL}`) }>
    <div  style = {{backgroundImage: `url(${imgURL})`}} className = "background-image"></div>
    <div className='content'>
      <div className='title' >{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)

export default withRouter(MenuItem);  