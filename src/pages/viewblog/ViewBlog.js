import React from "react";
import "./ViewBlog.css";
import {useSelector, useDispatch} from "react-redux";
import Header from "../../components/user-header/UserHeader";
import BottomNav from "../../components/bottom-nav/BottomNav";
import CommentBar from "../../components/comment-bar/CommentBar";
import UserSideNav from "../../components/user-side-nav/UserSideNav";

const ViewBlog = () => {
    // title
    document.title = "Blogrr | View Blog";

    const dispatch = useDispatch();

    const blog = useSelector(state => state.viewblog);
    const img = blog.img;
    const publisher = blog.publisher;
    const title = blog.title;
    const content = blog.content;
    const key = blog.key;
    
    const sidebar = useSelector(state => state.actions.userSideNav);
    const loading = useSelector(state => state.viewblog.loading);

    const togglecommentbar = () => {
        dispatch({type: "TOGGLE_COMMENT_BAR", payload: true})
    }

    const toHTML = (str) => {
        const doc = new DOMParser();
        const newdoc = doc.parseFromString(content, "text/html");
        return newdoc.firstElementChild.innerText;
    }


    return(
        <div className="blog-viewer">
            <Header />
            <main>
                <div className={sidebar === true ? "user-sidebar show-main-side-nav": "user-sidebar"}>
                    <UserSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content" key={key}>
                    <div className="top">
                        <div className="avater">
                            <img src={img} className={loading === true ? "img-loading": ""}/>
                        </div>
                        <h4 className={loading === true ? "name text-loading" : "name"}>{publisher}</h4>
                    </div>

                    <h1 className={loading === true ? "title text-loading": "title"}>{title}</h1>

                    <div className={loading === true ? "blog-content text-loading" : "blog-content"} onClick={togglecommentbar}>
                        {toHTML(content)}
                    </div>
                    <div className="actions">
                        <button onClick={togglecommentbar}>
                            <i className="far fa-comment-alt"></i>
                            {blog.commentkey.length}
                        </button>
                    </div>
                </div>
            </main>
            <div className="user-space-footer-bottom"></div>
            <CommentBar data={blog}/>
            <BottomNav />
        </div>
    )
}

export default ViewBlog;