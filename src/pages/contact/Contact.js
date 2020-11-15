import React from "react";
import "./Contact.css";
import Header from "../../components/main-header/MainHeader";
import Footer from "../../components/footer/Footer";
import MainSideNav from "../../components/main-side-nav/MainSideNav";
import {useSelector} from "react-redux";

// contact img
import contactImg from "./img/images (14).png"


const Contact = () => {
    // title
    document.title = "Blogrr | Contact";

    const sidebar = useSelector(state => state.actions.mainSideNav);

    return(
        <div className="contact">
            <Header />
            <main>
                <div className={sidebar === true ? "sidebar show-main-side-nav": "sidebar"}>
                    <MainSideNav />
                </div>
                <div className="nav-side-space"></div>
                <div className="content">
                    <div className="heading">
                        <h4>Contact</h4>
                    </div>
                    <div className="info">
                        <img alt="" src={contactImg}/>
                        <div className="data">
                            <div className="text">
                                <i className="fa fa-map-marker-alt"></i>
                                <p>Nigeria</p>
                            </div>
                            <div className="text">
                                <i className="fa fa-mobile"></i>
                                <p>+ 234 09025452313</p>
                            </div>
                            <div className="text">
                                <i className="fa fa-at"></i>
                                <p>akinleyejoshua.dev@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        
                    </form>
                </div>
            </main>
            <div className="space-footer-bottom"></div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;