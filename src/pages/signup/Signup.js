import React from "react";
import "./Signup.css";
import Header from "../../components/main-header/MainHeader";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import {Link} from "react-router-dom";
import Loader from "../../components/loader/Loader";

import {useSelector, useDispatch} from "react-redux";

const Signup = () => {
    // title
    document.title = "Blogrr | Sign up"
    const sidebar = useSelector(state => state.actions.mainSideNav);
    const dispatch = useDispatch();

    const handleUsername = (event) => {
        dispatch({type: "SIGNUP_USERNAME", payload: event.target.value})
    }

    const handleEmail = (event) => {
        dispatch({type: "SIGNUP_EMAIL", payload: event.target.value})
    }

    const handlePassword = (event) => {
        dispatch({type: "SIGNUP_PASSWORD", payload: event.target.value})
    }

    const handleImg = (event) => {
        dispatch({type: "SIGNUP_IMG", img: event.target.value, blob: event.target.files[0]})
    }

    const signup = () => {
        dispatch({type: "SIGNUP"})
    }
    return(
        <div className="signup">
            <Header />
            <Loader />
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>Sign up</h4>
                    </div>
                    <form method="dialog">
                        <div className="input-section">
                            <div className="input">
                                <div className="fa fa-user"></div>
                                <input type="text" placeholder="username" onChange={handleUsername}/>
                            </div>
                            <div className="input">
                                <div className="fa fa-at"></div>
                                <input type="email" placeholder="email address" onChange={handleEmail}/>
                            </div>
                            <div className="input">
                                <div className="fa fa-key"></div>
                                <input type="password" placeholder="password" onChange={handlePassword}/>
                            </div>
                            <div className="input">
                                <div className="far fa-image"></div>
                                <input type="file" onChange={handleImg}/>
                            </div>
                            <button className="ripple" onClick={signup}>Sign Up</button>
                        </div>
                        
                        <div className="actions">
                            <p>Already Registerd ?</p>
                            <button>
                                <Link to="/signin" className="btn">Sign In</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            
        </div>
    )
}

export default Signup;