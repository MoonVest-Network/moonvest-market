import MoonVest from './MoonVest';
import ItemDetail from './ItemDetail';
import { HashRouter, NavLink, Route } from "react-router-dom";

const Header = (props) => {
    return (
        <HashRouter>
            <div className="header header-light navbar-light bg-white">
                <div className="container px-0">
                    <nav className="navbar navbar-expand-md navbar-light bg-white">
                        <NavLink className="navbar-brand" to="/"><img src={"img/Logo.png"} height="20" className="logo" alt="" /></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav col">
                                <li className="nav-item border-bottom-sm">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item border-bottom-sm">
                                    <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item border-bottom-sm">
                                    <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item border-bottom-sm">
                                    <NavLink className="nav-link" to="/item-detail">Item Details <span className="sr-only">(current)</span></NavLink>
                                    {/* <a className="nav-link" href="#">Item Details <span className="sr-only">(current)</span></a> */}
                                </li>
                                <li className="nav-item dropdown border-bottom-sm">
                                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu rounded-0" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="">Hello</a>
                                            <ul className="dropdown-menu border-left-0 border-right-0 bg-light rounded-0">
                                                <li><a className="dropdown-item" href="#">Submenu</a></li>
                                                <li><a className="dropdown-item" href="#">Submenu0</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav col d-sm-flex-spacing connect-wallet justify-content-md-end">
                                <li className="col-xs-4">
                                    <a href="#" data-toggle="modal" data-target="#login" className="hv-red">
                                        <i className="fa fa-arrow-circle-right mr-1"></i><span className="dn-lg">Connect Wallet</span>
                                    </a>
                                </li>
                                <li className="col-xs-4">
                                    <a href="#" className="btn red-bg btn-sm mx-3">Create</a>
                                </li>
                                <li className="col-xs-4">
                                    <a href="#" className="btn theme-bg btn-sm">Explore</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="clearfix"></div>

            <Route exact path="/" component={MoonVest}/>
            <Route path="/item-detail" component={ItemDetail}/>

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
                                            <input type="password" className="form-control" placeholder="*******" />
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
        </HashRouter>
    );
}

export default Header;