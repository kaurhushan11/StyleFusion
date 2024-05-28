import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import Logo from '../Images/Logo.png';
import cart_icon from '../Images/cart_icon.png';
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import dropdown_icon from "../Images/dropdown_icon.png";

const Navbar = () =>{

    const [menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(HomeContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle('open');
    }

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt=""></img>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log Out</button>
                :<Link to='/login'><button>Login</button></Link>}
                
                <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;