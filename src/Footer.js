const Footer = (props) => {
    return (
        <footer className="dark-footer skin-dark-footer">
            <div>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <a href="https://moonvest.network/" target="_blank"><img src="img/logo-light.png" className="img-fluid f-logo" width="120" alt="" /></a>
                                <ul className="footer-bottom-social">
                                    <li><a href="https://www.facebook.com/moonvestnetwork"><i className="ti-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/MoonvestN"><i className="ti-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/moonvestnetwork"><i className="ti-instagram"></i></a></li>
                                    <li><a href="https://github.com/MoonVest-Network/moonvest-market"><i className="ti-github"></i></a></li>
                                </ul>
                            </div>
                        </div>		
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Marketplace</h4>
                                <ul className="footer-menu">
                                    <li><a href="/tags/art">Art/Collectibles</a></li>
                                    <li><a href="/tags/gaming">Gaming</a></li>
                                    <li><a href="/tags/defi">DeFi</a></li>
                                    <li><a href="/tags/charity">Charity</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="footer-menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">My NFTs</a></li>
                                    <li><a href="#">Followers</a></li>
                                    <li><a href="#">Settings</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">Resources</h4>
                                <ul className="footer-menu">
                                    <li><a href="https://academy.binance.com/en/articles/7-things-you-should-know-about-nfts">NFTs</a></li>
                                    <li><a href="https://academy.binance.com/en/articles/how-to-get-started-with-binance-smart-chain-bsc">Binance Smart Chain</a></li>
                                    <li><a href="https://academy.binance.com/en/articles/how-to-use-metamask">Metamask</a></li>

                                </ul>
                            </div>
                        </div>
                                
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-widget">
                                <h4 className="widget-title">About Us</h4>
                                <ul className="footer-menu">
                                    <li><a href="https://moonvest.network/index.html#token" target="_blank">MVN Token</a></li>
                                    <li><a href="https://moonvest.network/moonvest_network_whitepaper.pdf" target="_blank">Whitepaper</a></li>
                                    <li><a href="https://t.me/moonvestnetwork" target="_blank">Contact Us</a></li>
                                    <li><a href="https://moonvest.network/index.html#social" target="_blank">Follow Us</a></li>
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