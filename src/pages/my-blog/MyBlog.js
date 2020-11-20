import React, {useEffect} from "react";
import "./MyBlog.css";
import Header from "../../components/user-header/UserHeader";
import CommentBar from "../../components/comment-bar/CommentBar";
import UserSideNav from "../../components/user-side-nav/UserSideNav";
import BottomNav from "../../components/bottom-nav/BottomNav";
import ListBlog from "../../components/list-blog/ListBlog";
import {useSelector, useDispatch} from "react-redux";

const MyBlog = () => {
    // title
    document.title = "Blogrr | My Blog(s)"
    const sidebar = useSelector(state => state.actions.userSideNav);
    const blog = useSelector(state => state.listblog);
    const profile = useSelector(state => state.profile);
    const myblog = useSelector(state => state.profile.myBlog);
    const loading = useSelector(state => state.profile.loading);
    const dispatch = useDispatch();

    const username = useSelector(state => state.profile.username)

    useEffect(() => {
        const interval = setInterval(() => {
            if (profile.myblogmounted === false){
                blog.publisher.map((items, i=+1) => {
                    if (items === username){
                        dispatch({
                            type: "GET_MYBLOG",
                            img: blog.img[i],
                            publisher: items,
                            title: blog.title[i],
                            content: blog.content[i],
                            key: blog.key[i],
                            commentkeylength: blog.commentkeylength[i]
                        })
                       dispatch({type: "MOUNT_MYBLOG", payload: true})
                    }
                })  
            }       
        clearInterval(interval)
        })
        
    }, [username])

    return(
        <div className="my-blog">
            <Header />
            <main>
                <div className={sidebar === true ? "user-sidebar show-main-side-nav": "user-sidebar"}>
                    <UserSideNav/>
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <ListBlog data={myblog} loading={loading}/>
                </div>
            </main>
            <div className="user-space-footer-bottom"></div>
            <CommentBar data={blog}/>
            <BottomNav />
        </div>
    )
}

export default MyBlog;