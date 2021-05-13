import { useEffect, useState } from "react";

const Header = (props) => {
    return (
        <>
            <div className="header header-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
						    <nav id="navigation" className="navigation navigation-landscape">
                                <div className="nav-header">
                                    <a className="nav-brand" href="#">
                                        <img src={"img/Logo.png"} className="logo" alt="" />
                                    </a>
                                    <div className="nav-toggle"></div>
                                </div>
                                <div className="nav-menus-wrapper">
                                    <ul className="nav-menu">
                                        <li><a href="#">Marketplace<span className="submenu-indicator"></span></a>
                                            <ul className="nav-dropdown nav-submenu">
                                                <li><a href="index.html">New</a></li>                                    
                                                <li><a href="home-2.html">Popular</a></li>                                    
                                                <li><a href="home-3.html">Art</a></li> 
                                                <li><a href="home-4.html">Virtual Worlds</a></li> 
                                                <li><a href="home-5.html">Trading Cards</a></li> 
                                                <li><a href="home-6.html">Game Items</a></li> 
                                                <li><a href="home-7.html">DeFi</a></li>
                                            </ul>
                                        </li>
                                        
                                        <li><a href="#">Tools<span className="submenu-indicator"></span></a>
                                            <ul className="nav-dropdown nav-submenu">                              
                                                <li><a href="home-2.html">Create NFTs</a></li>                                    
                                                <li><a href="home-3.html">Users</a></li> 
                                                <li><a href="home-3.html">Analytics</a></li> 
                                            </ul>
                                        </li>
                                        
                                        <li><a href="https://moonvest.network" target="_blank">About</a></li>
                                    </ul>
                                    
                                    <ul className="nav-menu nav-menu-social align-to-right">
                                
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#login" className="hv-red">
                                                <i className="fa fa-arrow-circle-right mr-1"></i><span className="dn-lg">Connect Wallet</span>
                                            </a>
                                        </li>
                                        <li className="add-listing red-bg">
                                            <a href="#">Create</a>
                                        </li>
                                        <li className="add-listing green-bg">
                                            <a href="#">Explore</a>
                                        </li>
                                    </ul>
								</div>
                            </nav>
						</div>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>

            {/* <!-- Log In Modal --> */}
			<div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="registermodal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
					<div className="modal-content" id="registermodal">
						<div className="modal-header">
							<h4>Close Window</h4>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ti-close"></i></span></button>
						</div>
						<div className="modal-body">
							<h4 className="modal-header-title">Sign <span className="theme-cl">In</span></h4>
							
							<div className="login-form">
								<form>
								
									<div className="form-group">
										<label>User Name</label>
										<div className="input-with-gray light">
											<input type="text" className="form-control" placeholder="Username" />
										</div>
									</div>
									
									<div className="form-group">
										<label>Password</label>
										<div className="input-with-gray light">
											<input type="password" className="form-control" />
										</div>
									</div>
									
									<div className="form-group">
										<button type="submit" className="btn theme-bg btn-md full-width pop-login">Login</button>
									</div>
								
								</form>
							</div>
							
							<div className="form-group text-center">
								<span>Or Signup with</span>
							</div>
							
							<div className="social_logs mb-4">
								<ul>
									<li className="fb-login"><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li className="gp-login"><a href="#"><i className="fa fa-google-plus"></i></a></li>
									<li className="ln-login"><a href="#"><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
							
						</div>
						<div className="modal-footer">
							<div className="mf-link"><i className="ti-user"></i>Haven't An Account?<a className="theme-cl"> Sign Up</a></div>
							<div className="mf-forget"><a href="#"><i className="ti-help"></i>Forget Password</a></div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Modal --> */}
        </>
    );
}

export default Header;