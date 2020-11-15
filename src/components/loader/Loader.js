import React from "react";
import "./Loader.css";

const Loader = (props) => {
    return(
        <div className={props.load === true ? "loader": "close"}>
            <div className="bar"></div>
        </div>
    )
}

export default Loader;