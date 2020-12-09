import React from "react";
import "./Search.css";
import Header from "../../components/user-header/UserHeader";
import UserSideNav from "../../components/user-side-nav/UserSideNav";
import BottomNav from "../../components/bottom-nav/BottomNav";
import ListBlog from "../../components/list-blog/ListBlog";
import CommentBar from "../../components/comment-bar/CommentBar";
// import ListBlog from "../../components/list-blog/ListBlog";
import {useSelector, useDispatch} from "react-redux";
const Search = () => {
    // title
    document.title = "Blogrr | Search"
    const sidebar = useSelector(state => state.actions.userSideNav);
    const blog = useSelector(state => state.listblog);
    const search = useSelector(state => state.listblog.search);
    const dispatch = useDispatch();
    let key = [], publisher = [], title = [], content = [], commentkey = [], commentkeylength = [], img = [];

    const handleSearch = (event) => {

        var newbloglist = blog.title.filter(items => items.toLowerCase().includes((event.target.value.toLowerCase()))).map(items => items);

        if (event.target.value === ""){
            dispatch({
                type: "LOAD_SEARCH",
                key: [],
                publisher: [],
                title: [],
                content: [],
                commentkey: [],
                commentkeylength: [],
                img: []
            })
        } else {
            newbloglist.map((items, i =+ 1) => {
                key.push(blog.key[i]);
                publisher.push(blog.publisher[i]);
                title.push(items);
                content.push(blog.content[i]);
                commentkey.push(blog.commentkey[i]);
                commentkeylength.push(blog.commentkeylength[i])
                img.push(blog.img[i])
    
                dispatch({
                    type: "LOAD_SEARCH",
                    key: key,
                    publisher: publisher,
                    title: title,
                    content: content,
                    commentkey: commentkey,
                    commentkeylength: commentkeylength,
                    img: img
                })
    
            })
        }        

        key = [];
        publisher = [];
        title = [];
        content = [];
        commentkey = [];
        commentkeylength = [];
        img = []
    }

    return(
        <div className="search">
            <Header />
            <div className={sidebar === true ? "user-sidebar show-main-side-nav": "user-sidebar"}>
                <UserSideNav />
            </div>
            <main>
                <div className="content">
                    <div className="search-bar">
                        <input placeholder="search" type="text" onChange={handleSearch}/>
                        <button className="fa fa-search ripple"></button>
                    </div>
                </div>
                 <ListBlog data={search}/>
            </main>
            <div className="user-space-footer-bottom"></div>
            <CommentBar data={blog}/>
            <BottomNav/>
        </div>
    )
}

export default Search;