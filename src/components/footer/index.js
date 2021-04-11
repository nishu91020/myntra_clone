import React from 'react';
import playstore from '../../images/playstore.png';
import applestore from '../../images/applestore.png';
import './style.css';
const footer=()=>{
    return(
        <div className="footer">
            <div className="links">
                <h5>Useful links</h5>
                <div>FAQ</div>
                <div>T&amp;c</div>
                <div>Shipping</div>
                <div>Cancellation</div>
                <div>Returns</div>
            </div>
            <div class="touch">
                <div>
                    <img src={playstore} className="button"/>
                    <img src={applestore} className="button"/>
                </div>
                <div>
                    <div>FACEBOOK</div>
                    <div>INSTAGRAM</div>
                    <div>TWITTER</div>
                </div>
            </div>
            <div class="trademark">
                <div>100% ORIGINAL</div>
                <div>RETURN WITHIN 30 DAYS</div>
                <div>FREE DILEVERY</div>
            </div>

        </div>
    );
}
export default footer;
