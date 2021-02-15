import React, {useState} from "react";
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component";
import sections from "../../sections/sections";


function CreateSection(section){
    return <MenuItem key = {section.id} title = {section.title} imgURL = {section.imageUrl} size= {section.size} />
};


function Directory(){

return( 
    <div className='directory-menu'>
    {sections.map(CreateSection)}
    </div>
)

};

export default Directory;  