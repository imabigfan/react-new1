import React from "react";
import "./preview-collections.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";


 function PreviewCollection(props){
    
    return(
    <div  className="collection-preview">
    <div className= "title"><h1>{props.title.toUpperCase()}</h1> </div>
    
    <div className="preview" >
          {props.items.filter((final,index)=> index<4 ).map(({id, name, imageUrl, price})=>

          (<CollectionItem id={id} name={name} imageUrl={imageUrl} price={price} ></CollectionItem>
                
         ))}
        
     </div>
        
     </div>
         
    )};


export default PreviewCollection;
