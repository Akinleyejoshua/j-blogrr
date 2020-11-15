import React from "react";
import "./About.css";
import Header from "../../components/main-header/MainHeader";
import Footer from "../../components/footer/Footer";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import {useSelector} from "react-redux";

// about img
import aboutImg from "./img/download (1).jfif"

const About = () => {
    // title
    document.title = "Blogrr | About";

    const sidebar = useSelector(state => state.actions.mainSideNav);

    return(
        <div className="about">
            <Header />
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>About</h4>
                    </div>
                    <img src={aboutImg} alt=""/>
                    <div className="text">
                        <p>We Help Social Marketers, Digital Marketers, Blogers, Info Graphic Shows and the likes Publish Information and share them to other social commodities, Kindly get in touch with our social handles</p>
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

export default About;