import React from "react";
import "./BottomNav.css";
import {Link} from "react-router-dom";

const BottomNav = () => {
    return(
        <div className="bottom-nav">
            <Link to="/home" className="btn">
                <i className="fa fa-home"></i>
                <p>Home</p>
            </Link>
            <Link to="/search" className="btn">
                <i className="fa fa-search"></i>
                <p>Search</p>             
            </Link>
            <Link to="/my-blog-post" className="btn">
                <i className="fa fa-blog"></i>
                <p>Your Blog</p>
            </Link>
        </div>
    )
}

export default BottomNav;