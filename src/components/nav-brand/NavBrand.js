import React from "react";
import "./NavBrand.css";
import {Link} from "react-router-dom";

const NavBrand = () => {
    return(
        <div className="nav-brand">
            <Link to="/index" className="brand">
                <i className="fa fa-blog"></i>
                <i>logrr</i>
            </Link>
        </div>
    )
}

export default NavBrand;