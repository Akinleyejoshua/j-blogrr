import React from "react";
import "./Home.css";
import Header from "../../components/user-header/UserHeader";
import UserSideNav from "../../components/user-side-nav/UserSideNav";
import BottomNav from "../../components/bottom-nav/BottomNav";
import ListBlog from "../../components/list-blog/ListBlog";
import {useSelector} from "react-redux";
import CommentBar from "../../components/comment-bar/CommentBar";
import {Link} from "react-router-dom";

const Home = () => {
    // title
    document.title = "Blogrr | Home"
    const sidebar = useSelector(state => state.actions.userSideNav);

    const blog = useSelector(state => state.listblog);

    const loading = useSelector(state => state.listblog.loading);

    // const img = blog.img;
    // const publisher = blog.publisher;
    // const title = blog.title;
    // const content = blog.content;
    // const commentlength = blog.commentkeylength

    return(
        <div className="home">
            <Header />
            <main>
                <div className={sidebar === true ? "user-sidebar show-main-side-nav": "user-sidebar"}>
                    <UserSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <ListBlog data={blog} loading={loading}/>
                    {/* <ListBlog data={blog} img={img} publisher={publisher} title={title} content={content} commentlength={commentlength} loading={loading}/> */}
                </div>
            </main>
            <div className="user-space-footer-bottom"></div>
            <Link to="publisher" className="publish-btn">
                <i className="fa fa-pen"></i>
            </Link>
            <CommentBar data={blog}/>
            <BottomNav />
        </div>
    )
}

export default Home;