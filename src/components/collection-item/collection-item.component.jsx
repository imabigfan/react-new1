import React from "react";

import "./collection-item.styles.scss";

function CollectionItem(props){
    return(
<div key={props.id} className= "collection-item">

<div className="image" style= {{backgroundImage: `url(${props.imageUrl})`}}>

</div>
<div className = "collection-footer"> 
    <span className = "name">{props.name}</span>
    <span className= " price">{props.price}</span>
</div>
</div>
    )};


export default CollectionItem;
