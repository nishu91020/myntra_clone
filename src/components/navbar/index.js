import React from 'react';
import {NavLink} from 'react-router-dom'; 
import profile from '../../images/profile.png';
import heart from '../../images/heart.png';
import bag from '../../images/bag.png';
import recommend from '../../images/recommended.png';
import approval from '../../images/approval.png';
import './style.css';
const Navbar=()=>{
    return(
    <div className="navbar">
        <ul className="Navmenu">
            <li><NavLink to="/">MENU</NavLink></li>
            <li><NavLink to="/">WOMEN</NavLink></li>
            <li><NavLink to="/">KIDS</NavLink></li>
            <li><NavLink to="/">LIVING &amp; HOME</NavLink></li>
            <li><NavLink to="/">OFFERS</NavLink></li>
            <input   style={{height:'30px',textAlign:'center',borderRadius:'5px',marginLeft:'35%',border:'transparent',background:'#C0C0C0'}} type="text" placeholder="search"/>
            <li ><NavLink to="/"><img src={profile} style={{width:'1.5%',height:'1.5%'}}/></NavLink></li>
            <li><NavLink to="/"><img src={heart} style={{width:'1.5%',height:'1.5%'}}/></NavLink></li>
            <li><NavLink to="/"><img src={bag} style={{width:'1.5%',height:'1.5%'}}/></NavLink></li>
            <li><NavLink to="/AskApproval"><img src={approval} style={{width:'1.5%',height:'1.5%'}}/></NavLink></li>
            <li><NavLink to="/Apprec"><img src={recommend} style={{width:'1.5%',height:'1.5%'}}/></NavLink></li>
        </ul>
    </div>
        );
}
export default Navbar;