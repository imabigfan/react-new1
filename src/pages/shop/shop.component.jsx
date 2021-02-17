import React, { useState } from "react";
// import "./shop.component.styles";
import PreviewCollection from "../../components/preview-collections/preview-collections.component";
import ShopData from "../../collections-data/shop.data";


function createEntry(item){
    return(
    <div className = "Shop-page">
    <PreviewCollection id={item.id} items={item.items}  title={item.title} />
    </div>
    )}


function ShopPage(){
    return(
   <div className="shop-page">{ShopData.map(createEntry)}</div> 
    )};


 export default ShopPage;

