import React from 'react';
import './style.css';
const Deals=({image})=>{
    return(
        <div className="container">
            <img className="bestDeals" src={image}/>
        </div>
    );
}
export default Deals;