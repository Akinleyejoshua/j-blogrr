import React from "react";
import "./MainSideNav.css";
import NavBrand from "../nav-brand/NavBrand";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const MainSideNav = () => {
    const dispatch = useDispatch();
    
    const toggleNav = () => {
        dispatch({type: "TOGGLE_MAIN_SIDE_BAR", payload: false})
    }

    return(
        <div className="main-side-nav">
            <div className="nav-top">
                <div className="nav-left">
                    <button className="fa fa-arrow-left ripple round" onClick={toggleNav}></button>
                </div>
                <div className="brand">
                    <NavBrand />
                </div>
            </div>
            <div className="nav-body">
                
                <Link className="nav-link  ripple" to="/index" onClick={toggleNav}>
                    <i className="fa fa-home"></i>
                    <p>Home</p>
                </Link>
                <Link className="nav-link  ripple" to="/about" onClick={toggleNav}>
                    <i className="fa fa-info-circle"></i>
                    <p>About</p>
                </Link>
                <Link className="nav-link  ripple" to="/services" onClick={toggleNav}>
                    <i className="fa fa-tools"></i>
                    <p>Services</p>
                </Link>
                <Link className="nav-link  ripple" to="/contact" onClick={toggleNav}>
                    <i className="fa fa-user"></i>
                    <p>Contact</p>
                </Link>
            </div>
            <div className="nav-bottom">
                <a href="https://www.github.com/Akinleyejoshua" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.twitter.com/Akinleyejoshua9" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default MainSideNav;