import React from "react";
import "./MainHeader.css";
import NavBrand from "../nav-brand/NavBrand";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const MainHeader = () => {
    const dispatch = useDispatch();

    window.onscroll = () => {
        if (window.scrollY > 200){
            dispatch({type: "TOGGLE_HEADER_FIXED", payload: true})
        } else {
            dispatch({type: "TOGGLE_HEADER_FIXED", payload: false})
        }
    }

    const toggleNav = () => {
        dispatch({type: "TOGGLE_MAIN_SIDE_BAR", payload: true})
    }

    const onscroll = useSelector(state => state.actions.onScroll)
    
    return(
        <header className={onscroll === true ? "main-header onscroll" : "main-header"}>
            <nav>
                <div className="header-left">
                    <button className="fa fa-list-ul ripple round" onClick={toggleNav}></button>
                    <NavBrand/>
                </div>
                
                <Link to="signin" className="btn">
                    <button className="ripple signin">
                        <p>Sign in</p>
                        <i className="fa fa-sign-in-alt"></i>
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default MainHeader;