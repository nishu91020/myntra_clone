import React from 'react';
import kurta from '../../images/kurta.webp';
import kurtaone from '../../images/kurta1.webp';
import './style.css';

const Product=()=>{
    return(
    <div>
    <div className="card">
        <img src={kurta}/>
        <div className="container">
            <p><b>W</b></p>
            <p>Solid straight kurta</p>
            <p>Rs.999</p>
            <p><i>Harry suggested this for you!</i></p>
        </div>
    </div>
    <div className="card">
        <img src={kurtaone}/>
        <div className="container">
            <p><b>W</b></p>
            <p>Designer kurta</p>
            <p>Rs.1999</p>
            <p><i>Harry suggested this for you!</i></p>
        </div>
    </div>
    </div>);
}
export default Product;