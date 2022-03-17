import React from 'react';
import './Catagory.css'

const Catagory = (props) => {
    console.log ("props",props.catagory)
    const {strCategoryThumb, strCategory, strCategoryDescription} = props.catagory
    console.log("image", strCategoryThumb)
    return (

    <div class="col">
    <div class="card h-100">
    <img  src={strCategoryThumb} class="card-img-top" alt="..." srcset="" />
      <div class="card-body">
        <h5 class="card-title">Catagory: {strCategory}</h5>
        <p class="card-text">{strCategoryDescription.slice(0,255)}...</p>
      </div>
    </div>
  </div>    

    );
};


export default Catagory;