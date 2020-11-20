import React from "react";
import "./ListBlog.css";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import Firebase from "../../database/Firebase";

const ListBlog = (props) => {
    const img = props.data.img;
    const publisher = props.data.publisher;
    const title = props.data.title;
    const content = props.data.content;
    const key = props.data.key;
    const commentlength = props.data.commentkeylength

    const dispatch = useDispatch();
    const history = useHistory();

    const view = (event) => {
        const key = event.target.id;
        dispatch({type: "CLEAR_COMMENT"})
        dispatch({type: "CLEAR_BLOG"})
        dispatch({type: "VIEW_BLOG_LOADING", payload: true}) 
        history.push("/view-blog")
        Firebase().db.ref("posts/" + key).once("value").then(snapshot => {
            dispatch({
                type: "VIEW_BLOG",
                key: snapshot.key,
                publisher: snapshot.val().sender,
                title: snapshot.val().title,
                content: snapshot.val().content,
                img: snapshot.val().imgUrl
            })
        }).then(() => {
        dispatch({type: "VIEW_BLOG_LOADING", payload: false}) 
        }).then(() => {
            dispatch({type: "COMMENT_LOADING", payload: true})
            Firebase().db.ref("posts/" + key + "/comments/").once("value").then(snapshot => {

                snapshot.forEach(items => {
                    dispatch({
                        type: "VIEW_BLOG_COMMENTS",
                        commentimg: items.val().img,
                        commentsender: items.val().sender,
                        commenttext: items.val().text,
                        commentkey: items.key
                    })
                })
            }).then(() => {
                dispatch({type: "COMMENT_LOADING", payload: false})
            })
        })
    }

    const toggleCommentBar = (event) => {
        const key = event.target.id;
        dispatch({type: "COMMENT_BLOG_KEY", payload: key})
        dispatch({type: "CLEAR_COMMENT"})
        dispatch({type: "TOGGLE_COMMENT_BAR", payload: true})
        dispatch({type: "COMMENT_LOADING", payload: true})
        Firebase().db.ref("posts/" + key + "/comments/").once("value").then(snapshot => {
            snapshot.forEach(items => {
                dispatch({
                    type: "LOAD_BLOG_COMMENTS",
                    commentimg: items.val().img,
                    commentsender: items.val().sender,
                    commenttext: items.val().text,
                    commentkey: items.key
                })
            })
        }).then(() => {
            dispatch({type: "COMMENT_LOADING", payload: false})
        })
    }

    const loading = props.loading;

    const listblog = key.map((items, i =+ 1) =>
        <div className="blog-card" key={items}>
            <div className="avater">
                <div className="v-line"></div>
                <img alt="" src={img[i]}/>
            </div>
            <div className="blog-content">
                <div className="blog-data">
                    <div className="name">{publisher[i]}</div>
                    <div className="title">{title[i]}</div>
                    <div className="content">
                        <div className="blog-bg" id={items} onClick={view}></div>
                        {content[i]}
                    </div>
                </div>
                <div className="blog-action">
                    <button className="far fa-heart"></button>
                    <button className="fa fa-share-alt"></button>
                    <button className="far fa-edit"></button>
                    <button className="fa fa-trash"></button>
                    <button onClick={toggleCommentBar} id={items}>
                        <i className="far fa-comment-alt" id={items}></i>
                        {commentlength[i]}
                    </button>
                </div>
            </div>
        </div>
    )

    return(
        <div className="list-blog">
            <div className="user-space-footer-bottom"></div>
            <div className={loading === true ? "blog-loader blog-card" : "close"}>
            <div className="avater">
                <img alt="" className="img-loading"/>
            </div>
            <div className="blog-content">
                <div className="blog-data">
                    <div className="name text-loading"></div>
                    <div className="title text-loading"></div>
                    <div className="content text-loading">                        
                    </div>
                </div>
            </div>
        </div>
            {listblog}
        </div>
    )
}

export default ListBlog;