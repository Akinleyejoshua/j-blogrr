import React from "react";
import "./Signin.css";
import Header from "../../components/main-header/MainHeader";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import Loader from "../../components/loader/Loader";

import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Signin = () => {
    // title
    document.title = "Blogrr | Sign in"
    const sidebar = useSelector(state => state.actions.mainSideNav);
    const loading = useSelector(state => state.signin.loading);

    const dispatch = useDispatch();

    const postEmail = (event) => {
        dispatch({type: "SIGNIN_EMAIL", email: event.target.value})
    }

    const postPassword = (event) => {
        dispatch({type: "SIGNIN_PASSWORD", password: event.target.value})
    }

    const signin = () => {
        dispatch({type: "SIGNIN"})
        dispatch({type: "SIGNIN_LOADING", payload: true})
    }

    return(
        <div className="signin">
            <Header />
            <Loader load={loading}/>
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>Sign In</h4>
                    </div>
                    <form method="dialog">
                        <div className="input-section">
                            <div className="input">
                                <div className="fa fa-at"></div>
                                <input type="email" placeholder="email address" onChange={postEmail}/>
                            </div>
                            <div className="input">
                                <div className="fa fa-key"></div>
                                <input type="password" placeholder="password" onChange={postPassword}/>
                            </div>
                            <button className="ripple" onClick={signin}>Sign In</button>
                        </div>
                        
                        <div className="actions">
                            <p>Not Registerd ?</p>
                            <button>
                                <Link to="/signup" className="btn">Sign Up</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            
        </div>
    )
}

export default Signin;