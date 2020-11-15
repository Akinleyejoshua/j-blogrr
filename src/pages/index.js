import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Firebase from "../database/Firebase";


// import all pages
import Index from "./index/Index";
import Home from "./home/Home";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import EditBlog from "./editblog/EditBlog";
import ViewBlog from "./viewblog/ViewBlog";
import Publisher from "./publisher/Publisher";
import Profile from "./profile/Profile";
import About from "./about/About";
import Contact from "./contact/Contact";
import Services from "./services/Services";
import Search from "./search/Search";
import MyBlog from "./my-blog/MyBlog"

const Router = () => {
    const dispatch = useDispatch();

    var loggedin = useSelector(state => state.actions.loggedin)
    dispatch({type: "TOGGLE_COMMENT_BAR", payload: false})

    Firebase().auth.onAuthStateChanged(user => {
        if (user){
            dispatch({type:"LOGGED_IN", payload: true})

            // load profile
            Firebase().db.ref("users/" + user.uid).once("value").then(snapshot => {
                dispatch({
                    type: "GET_PROFILE",
                    username: snapshot.val().username,
                    email: snapshot.val().email
                });
                Firebase().storage.ref().child(`images/profile-pic/${snapshot.val().username}.jpg`).getDownloadURL().then(url => {
                    dispatch({
                        type: "GET_PROFILE_PIC",
                        profilepic: url
                    })
                }).then(() => {
                    dispatch({type: "LOAD_PROFILE", payload: false})
                }).catch((error) => {
                    console.log(error)
                })
            }).catch(() => {
                alert("Oops!, Some error occured while loading certain data, Try again")
            })
            
        } else {
            dispatch({type:"LOGGED_IN", payload: false})
        }
    })

    //  load blogs

    useEffect(() => {
        Firebase().db.ref("posts/").once("value").then(snapshot => {
            snapshot.forEach(items => {
                dispatch({
                    type: "LOAD_BLOGS",
                    key: items.key,
                    title: items.val().title,
                    publisher: items.val().sender,
                    content: items.val().content,
                    img: items.val().imgUrl,
                })
                
                let array = []
                Firebase().db.ref("posts/" + items.key + "/comments/").once("value").then(snapshot => {
                    snapshot.forEach(items => {
                        array.push(items.key)
                    })
                }).then(() => {
                    dispatch({type: "LOAD_COMMENT_KEY_LENGTH", payload: array.length})
                    array = []
                }).then(() => {
                    dispatch({type: "COMMENT_LOADING", payload: false})
                })
            });
                 
        }).then(() => {
            dispatch({type:"LIST_BLOG_LOADING", payload: false})
        }).catch(() => {
            alert("Error while loading some content, Refresh page")
        })

    }, [dispatch])

    return(
        <BrowserRouter>
        {loggedin === true && <Redirect to="/home"/>}
        {loggedin === false && <Redirect to="/index"/>}
            <Switch>
                <Route exact path="/index" component={Index}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/edit-blog" component={EditBlog}/>
                <Route exact path="/view-blog" component={ViewBlog}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/publisher" component={Publisher}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/my-blog-post" component={MyBlog}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;