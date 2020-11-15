import React from "react";
import "./UserSideNav.css";
import {useDispatch, useSelector} from "react-redux";

const UserSideNav = () => {
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch({type: "TOGGLE_USER_SIDE_BAR", payload: false})
    }

    const loading = useSelector(state => state.profile.loading);
    const profile = useSelector(state => state.profile);

    return(
        <div className="user-side-nav">
            <div className="nav-top">
                <button className="fa fa-arrow-up" onClick={toggleSidebar}></button>
            </div>
            <div className="avater">
                <img alt="" className={loading === true ? "img-loading img" : "img"} src={profile.profilepic}/>
            </div>
            <div className="data">
                <p className={loading === true ? "text-loading" : ""}>
                    <i className="fa fa-user"></i>
                    {profile.username}
                </p>
                <p className={loading === true ? "text-loading" : ""}>
                    <i className="fa fa-envelope"></i>
                    {profile.email}
                </p>
            </div>
            <div className="actions">
                <button className="ripple">
                    <i className="fa fa-cloud-moon"></i>
                    Dark Mode
                </button>
            </div>
        </div>
    )
}

export default UserSideNav;