import React from "react";
import "./UserHeader.css";
import NavBrand from "../nav-brand/NavBrand";
import {useDispatch, useSelector} from "react-redux";
import Firebase from "../../database/Firebase";

const UserHeader = () => {
    const dispatch = useDispatch();


    window.onscroll = () => {
        if (window.scrollY > 200){
            dispatch({type: "TOGGLE_HEADER_FIXED", payload: true})
        } else {
            dispatch({type: "TOGGLE_HEADER_FIXED", payload: false})
        }
    }

    const onscroll = useSelector(state => state.actions.onScroll)

    const toggleSidebar = () => {
        dispatch({type: "TOGGLE_USER_SIDE_BAR", payload: true})
    }

    const loading = useSelector(state => state.profile.loading);
    
    const logout = () => {
        dispatch({type: "LOGGED_IN", payload: false})
        Firebase().auth.signOut();
    }   

    const profilepic = useSelector(state => state.profile.profilepic);
    
    return(
        <header className={onscroll === true ? "user-header onscroll" : "user-header"}>
            <nav>
                <div className="nav-top">
                    <img alt="" className={loading === true ? "img-loading user-pic" : "user-pic"} onClick={toggleSidebar} src={profilepic}/>
                    <NavBrand />
                </div>
                
                <button className="ripple logout fa fa-sign-out-alt" onClick={logout}></button>
            </nav>
        </header>
    )
}

export default UserHeader;