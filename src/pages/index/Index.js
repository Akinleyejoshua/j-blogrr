import React from "react";
import "./Index.css";
import Header from "../../components/main-header/MainHeader";
import Footer from "../../components/footer/Footer";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

// feature images
import FeatureImg1 from "./img/download (2).png";
import FeatureImg2 from "./img/download (6).png";
import FeatureImg3 from "./img/download (3).jfif";


const Index = () => {
    // title
    document.title = "Blogrr";
    const sidebar = useSelector(state => state.actions.mainSideNav);

    return(
        <div className="index">
            <Header />
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="hero">
                        <div className="hero-bg"></div>
                        <div className="hero-body">
                            <h2>Blogrr Enables Users to Publish, Edit and Create Blog Post</h2>
                            <Link to="/signup" className="btn">                    
                                <button className="ripple">Get Started</button>
                            </Link>
                        </div>
                    </div>

                    <div className="features">
                        <div className="heading">
                            <h4>Features</h4>
                        </div>
                        <div className="items">
                            <div className="item ripple">
                                <img src={FeatureImg1} alt=""/>
                                <h5>PUBLISHER</h5>
                                <p className="text">With Blogrr You can create and publish blog post of any type</p>
                            </div>
                            <div className="item ripple">
                                <img src={FeatureImg2} alt=""/>
                                <h5>EDITOR</h5>
                                <p className="text">With Blogrr You can Edit a blog post to your satisfaction</p>
                            </div>
                            <div className="item ripple">
                                <img src={FeatureImg3} alt=""/>
                                <h5>INFO SHARING</h5>
                                <p className="text">With Blogrr You can Create, Edit, Publish and share blog post to other social communities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="space-footer-bottom"></div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Index;