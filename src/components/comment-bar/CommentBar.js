import React, {useState} from "react";
import "./CommentBar.css";
import {useDispatch, useSelector} from "react-redux";
import Firebase from "../../database/Firebase";

const CommentBar = (props) => {
    const key = props.data.commentkey;
    const sender = props.data.commentsender;
    const img = props.data.commentimg;
    const text = props.data.commenttext;
    
    const loading = useSelector(state => state.actions.commentloading);
    const commentbar = useSelector(state => state.actions.commentbar);
    const blogkey = useSelector(state => state.viewblog.commentblogkey);
    const profile = useSelector(state => state.profile);
    const commentrecieved = useSelector(state => state.listblog.commentrecieved)

    const comment = key.map((items, i =+ 1) => 
        <div className="comments" key={i}>
            <div className="row">
                <div className="avater">
                    <img alt="" src={img[i]}/>
                </div>
                <div className="comment-content">
                    <h4>{sender[i]}</h4>
                    <p className="text">{text[i]}</p>
                </div>
            </div>    
        </div>
            
    )

    const dispatch = useDispatch();

    const togglecommentbar = () => {
        dispatch({type: "TOGGLE_COMMENT_BAR", payload: false})
    }
    
    const [commenttext, setCommenttext] = useState("")

    const sendComment = () => {
        if (commenttext === ""){
            alert("Comment Text Blank")
        } else {
            dispatch({type: "COMMENT_RECIEVED", payload: false})
            Firebase().db.ref("posts/" + blogkey + "/comments").push({
                sender: profile.username,
                img: profile.profilepic,
                text: commenttext
            }).then(() => {
                alert("Comment sent");
                Firebase().db.ref("posts/" + blogkey + "/comments").limitToLast(1).on("child_added", snapshot => {
                    if (commentrecieved === false){
                        dispatch({
                            type: "LOAD_BLOG_COMMENTS",
                            commentimg: snapshot.val().img,
                            commentsender: snapshot.val().sender,
                            commenttext: snapshot.val().text,
                            commentkey: snapshot.key
                        })
                    }
                    dispatch({type: "COMMENT_RECIEVED", payload: true})
                })
            })
        }      
    }

    return(
        <div className={commentbar === true ? "open-commentbar comment-bar" : "comment-bar"}>
            <div className="top">
                    <h3>Comment({key.length})</h3>
                    <button className="fa fa-arrow-down ripple" onClick={togglecommentbar}></button>
                    <button className="fa fa-arrow-right ripple" onClick={togglecommentbar}></button>
                </div>
                <div className="main">
                    <div className={loading === true ? "blog-loader comment-load" : "close"}>
                        <div className="row">
                            <div className="avater">
                                <img alt="" className="img-loading"/>
                            </div>
                            <div className="comment-content text-loading"></div>
                        </div>    
                    </div>
                    {comment}
                </div>
                <div className="bottom">
                    <input placeholder="comment" onChange={(event) => setCommenttext(event.target.value)}/>
                    <button className="far fa-paper-plane ripple" onClick={sendComment}></button>
                </div>
        </div>
    )
}

export default CommentBar;