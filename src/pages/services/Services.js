import React from "react";
import "./Services.css";
import Header from "../../components/main-header/MainHeader";
import Footer from "../../components/footer/Footer";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import {useSelector} from "react-redux";

// services img
import serviceImg1 from "./img/1.png";
import serviceImg2 from "./img/2.jfif";
import serviceImg3 from "./img/3.png";

const Services = () => {
    // title
    document.title = "Blogrr | Services";

    const sidebar = useSelector(state => state.actions.mainSideNav); 

    return(
        <div className="services">
            <Header />
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>Services</h4>
                    </div>
                    <p>We offer the following services</p>
                    <div className="items">
                        <div className="item">
                            <img alt="" src={serviceImg1}/>
                            <h5>BLOG PUBLISHING</h5>
                            <p className="text">We Offer Blog Creation and Publishing service, build, create, edit and <b>PUBLISH</b> your documents</p>
                        </div>
                        <div className="item">
                            <img alt="" src={serviceImg2}/>
                            <h5>SHARING</h5>
                            <p className="text">We Offer Shareing service, build, create, edit, publish then <b>SHARE</b> your documents</p>
                        </div>
                        <div className="item">
                            <img alt="" src={serviceImg3}/>
                            <h5>BLOG EDITING</h5>
                            <p className="text">Blogrr has a powerful Editor which scales through most factors required for publishing great blog</p>
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

export default Services;