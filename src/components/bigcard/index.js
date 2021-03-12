import React from 'react';
import './style.css';
const Bigcard=({image})=>{
    return(
        <div className="master">
            <img className="poster" src={image}/>
        </div>
    );
}
export default Bigcard;