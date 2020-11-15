import React from "react";
import "./Footer.css";
import NavBrand from "../nav-brand/NavBrand";

const Footer = () => {
    return(
        <footer className="footer">
            <div>
                <NavBrand />
                <h3>Developed By Akinleye Joshua</h3>
            </div>
            <div className="copy">
                <p>&copy; <b>Blogrr</b> 2020</p>
            </div>
        </footer>
    )
}

export default Footer;