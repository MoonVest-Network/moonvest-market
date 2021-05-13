import { useEffect, useState } from "react";

const Footer = (props) => {
    return (
        <footer className="dark-footer skin-dark-footer">
            <div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <img src="img/logo-light.png" className="img-fluid f-logo" width="120" alt="" />
                                <ul className="footer-bottom-social">
                                    <li><a href="https://www.facebook.com/moonvestnetwork"><i className="ti-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/MoonvestN"><i className="ti-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/moonvestnetwork"><i className="ti-instagram"></i></a></li>
                                    <li><a href="https://github.com/MoonVest-Network"><i className="ti-github"></i></a></li>
                                </ul>
                            </div>
                        </div>		
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="faq.html">FAQs Page</a></li>
                                    <li><a href="billing.html">Checkout</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Developers</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">Booking</a></li>
                                    <li><a href="#l">Stays</a></li>
                                    <li><a href="#">Adventures</a></li>
                                    <li><a href="#">Author Detail</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="faq.html">Jobs</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Press</a></li>
                                </ul>
                            </div>
                        </div>
                                
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Useful links</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="#">Privacy &amp; Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-12 col-md-12 text-center">
                            <p className="mb-0">© 2021 <a href="https://moonvest.network">Moonvest Network</a>. All Rights Reserved</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;