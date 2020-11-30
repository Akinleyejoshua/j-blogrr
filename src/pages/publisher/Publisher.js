import React, {useEffect} from "react";
import "./Publisher.css";
import Header from "../../components/user-header/UserHeader";
import UserSideNav from "../../components/user-side-nav/UserSideNav";
import BottomNav from "../../components/bottom-nav/BottomNav";
import {useSelector, useDispatch} from "react-redux";
import EditorJS from "@editorjs/editorjs";
import EHeader from "@editorjs/header";
import EList from "@editorjs/list";
import EAttaches from "@editorjs/attaches";
import EEmbed from "@editorjs/embed";
import EImage from "@editorjs/image";
import ETable from "@editorjs/table";
import EQuote from "@editorjs/quote";
import EICode from "@editorjs/inline-code";
import Firebase from "../../database/Firebase";
import {useHistory} from "react-router"

const Publisher = () => {
    // title
    document.title = "Blogrr | Publisher";
    const sidebar = useSelector(state => state.actions.userSideNav);
    const title = useSelector(state => state.publisher.title);
    const content = useSelector(state => state.publisher.content);
    const img = useSelector(state => state.profile.profilepic);
    const username = useSelector(state => state.profile.username);
    const history = useHistory();


    const dispatch = useDispatch();
    let editor;

    useEffect(() => {
        editor = new EditorJS({
            holder: "editor",
            tools: {
                header: EHeader,
                list: EList,
                attaches: EAttaches,
                embed: EEmbed,
                image: EImage,
                table: ETable,
                quote: EQuote,
                inlineCode: EICode
            },
            placeholder: "content"
        })
    
    }, [])

    const handleContent = (event) => {
        dispatch({type: "PUBLISH_CONTENT", payload: event.target.parentElement.parentElement.parentElement.innerHTML})
    }

    const handleTitle = (event) => {
        dispatch({type: "PUBLISH_TITLE", payload: event.target.value})
    }

    const publish = () => {
        if (title === "" || content === ""){
            alert("Empty Fields")
        } else {
            Firebase().db.ref("posts/").push({
                title: title,
                imgUrl: img,
                content: content,
                sender: username
            }).then(() => {
                alert("Published")
                Firebase().db.ref("posts/").limitToLast(1).on("child_added", snapshot => {
                   
                    dispatch({
                        type: "LOAD_BLOGS",
                        key: snapshot.key,
                        title: snapshot.val().title,
                        publisher: snapshot.val().sender,
                        content: snapshot.val().content,
                        img: snapshot.val().imgUrl,
                    })
                        
                    history.push("/home")
                         
                })
            })
        }     
    }
   
    return(
        <div className="publisher">
            <Header />
            <main>
                <div className={sidebar === true ? "user-sidebar show-main-side-nav": "user-sidebar"}>
                    <UserSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>PUBLISHER</h4>
                    </div>
                    <form>
                        <div className="input">
                            <i>T</i>
                            <input type="text" placeholder="title" onChange={handleTitle}/>
                        </div>
                        <div className="editor-panel" id="advance-editor">
                            <h5>Content</h5>
                            <div id="editor" onKeyUp={handleContent}></div>
                        </div>
                        <textarea placeholder="content" onKeyUp={handleContent}/>
                        <button className="far fa-paper-plane" onClick={publish}></button>
                    </form>
                </div>
            </main>
            <div className="user-space-footer-bottom"></div>
            <BottomNav />
        </div>
    )
}

export default Publisher;
