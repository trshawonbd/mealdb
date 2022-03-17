import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';
import './Catagories.css'

const Catagories = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data =>setCatagories  (data.categories))

    },[])

    return (
        <div>
            <h1>Welcome to Catagories of Meals</h1>
            <h4>Catagories: {catagories.length}</h4>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                catagories.map( (catagory) => <Catagory catagory = {catagory}></Catagory>
                
                )
            }
            </div>

            
            
        </div>
    );
};

export default Catagories;