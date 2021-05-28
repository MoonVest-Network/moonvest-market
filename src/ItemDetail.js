import { useEffect, useState } from "react";
import nftItemsJson from './nftItems.json';

const ItemDetail = (props) => {
    const nftItemIndex = props.match.params.id || 0;
    
    return(
        <>
            {/* <!-- ============================ Item Detail Start ================================== --> */}
            <section className="gray-light">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-12 col-sm-12">

                            <div className="col-12">
                                <h3>{nftItemsJson[nftItemIndex].name}</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb light">
                                        <li className="breadcrumb-item"><a><i className="fa fa-home"></i></a></li>
                                        <li className="breadcrumb-item"><a>Files</a></li>
                                        <li className="breadcrumb-item"><a>HTML Templates</a></li>
                                        <li className="breadcrumb-item"><a>Corporate</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Business</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-12">
                                <img src={nftItemsJson[nftItemIndex].image} className="img-fluid" alt="" />
                            </div>
                            <div className="col-12">
                                <div className="urip_follo_link">
                                    <ul>
                                        <li><a href="#" className="btn btn-dark btn-block btn-md">Live Demo</a></li>
                                        <li><a href="#" className="btn theme-bg btn-block btn-md">Screenshots</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <blockquote className="noted">
                                    NOTE: This is an HTML template.
                                </blockquote>
                            </div>
                            <div className="col-12">
                                <div className="font-light mb-3 col-12 px-0">
                                    {nftItemsJson[nftItemIndex].description}
                                </div>
                                <div className="font-light mb-3 col-12 px-0">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                    expedita distinctio.
                                </div>
                                <div className="col-12 px-0">
                                    <blockquote>
                                        <p className="quote"><span className="big">“</span>Actually or the tone play is the
                                            curiously, was have out fully than pervasively got derisively empty<span
                                                className="big">“</span></p>
                                    </blockquote>
                                </div>
                                <div className="font-light mb-3 col-12 px-0">
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                                    reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                                    qui dolorem eum fugiat quo voluptas nulla pariatur
                                </div>
                                <div className="col-12 px-0 feature-list">
                                    <h4 className="">Features list</h4>
                                    <div className="dashed mb-3"></div>
                                    <ul className="list-unstyled">
                                        <li>HTML5 &amp; CSS3</li>
                                        <li>Built with Bootstrap 3.3</li>
                                        <li>Freelancing Page</li>
                                        <li>Ads Management </li>
                                        <li>40+ All Pages</li>
                                        <li>Responsive design</li>
                                        <li>Multi Color Option</li>
                                        <li>Premium Job Option</li>
                                        <li>Dashboard Include</li>
                                        <li>Multi Search, Resume &amp; Employer Pages</li>
                                        <li>Well documented</li>
                                        <li>Creative Design</li>
                                        <li>6 Home Pages</li>
                                        <li>2 Blog Page</li>
                                        <li>26 Inner Pges</li>
                                        <li>Developer friendly code</li>
                                        <li><strong>Easy to customize</strong></li>
                                        <li>FontAwesome <strong>600+ icons</strong></li>
                                        <li>ICONS ET-LINE <strong>100+ icons</strong></li>
                                    </ul>
                                </div>
                                <div className="col-12 mt-4 px-0">
                                    <button className="btn theme-bg btn-md font-weight-bold px-5">
                                        Purchase Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sidebar Start --> */}
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            {/* <!--Select License Bootstrap--> */}
                            <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Select License</h4>
                                            <h6 className="text-white font-light">Choose Suitable License</h6>
                                        </div>
                                        <div className="card-body px-0 py-0">

                                            <div className="moonvest-prices dashed px-2 py-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        <h6>Regular License</h6>
                                                        <p>You can check this first option</p>
                                                    </label>
                                                    <h3 className="pull-right">$36</h3>
                                                </div>
                                            </div>

                                            <div className="moonvest-prices dashed px-2 py-3">
                                                <div className="custom-control custom-checkbox ">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">
                                                        <h6 className="red">Extended License</h6>
                                                        <p>You can check this first option</p>
                                                    </label>
                                                    <h3 className="pull-right ">$36</h3>
                                                </div>
                                            </div>

                                            <div className="moonvest-prices px-2 pt-3">
                                                <div className="custom-control custom-checkbox ">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">
                                                        <h6>Commercial License</h6>
                                                        <p>You can check this first option</p>
                                                    </label>
                                                    <h3 className="pull-right">$36</h3>
                                                </div>
                                            </div>

                                            <div className="px-4 py-3">
                                                <button className="btn btn-block theme-bg btn-md font-weight-bold">Purchase
                                                    Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Select License Bootstrap--> */}

                            {/* <!-- Author Info --> */}
                            <div className="urip_widget_wrap shadow_0 mb-4 large">
                                <div className="urip_widget_avater">
                                    <a href="author-portfolio.html"><img src="https://via.placeholder.com/400x400" className="img-fluid circle" alt=""/></a>
                                    <div className="veryfied_author"><img src="img/verified.svg" className="img-fluid" width="15" alt=""/></div>
                                </div>
                                <div className="widget_avater_124">
                                    <h4 className="avater_name_214"><a href="author-portfolio.html">Digital Studio</a></h4>
                                    <span>Member since Sep 2016</span>
                                </div>
                                <div className="widget_avater_124">
                                    <ul className="auhor_list_badges">
                                        <li><img src="img/golden.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        <li><img src="img/1st.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/2year.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        <li><img src="img/3year.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        <li><img src="img/platinum.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        <li><img src="img/green-elite.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/gold-medal.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/smart.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget_lkpi">
                                    <ul className="auhor_info_list_215">
                                        <li>
                                            <div className="urip_jbl"><span className="count">102</span>K</div><span
                                                className="smallest">Sales</span>
                                        </li>
                                        <li>
                                            <div className="urip_jbl urip_rates good">4.7</div><a><span className="smallest">42Reviews</span></a>
                                        </li>
                                        <li>
                                            <div className="urip_jbl">152</div><a><span
                                                    className="smallest">Comments</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget_avater_423">
                                    <a href="author-portfolio.html" className="btn btn-block theme-bg btn-md font-weight-bold">View Portfolio</a>
                                </div>
                            </div>

                            {/* <!-- Product Information --> */}
                            <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Product Information</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Created:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">10 July 2020</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Last update:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">28 Aug 2020</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Compatible Browsers:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">Elementor, WooCommerce 3.5, WooCommerce 4.1, WooCommerce 4.2, WooCommerce 4.7</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Tags:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">job, resume, fashion, candidates, employer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============================ Item Detail Start ================================== --> */}

            {/* <!-- ============================ Call To Action Start ================================== --> */}
            <section className="call-to-act" style={{background:"#5d47dd url(img/landing-bg.png) no-repeat"}}>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-7 col-md-8">
                            <div className="clt-caption text-center mb-4">
                                <h3>Subscribe Now!</h3>
                                <p>Simple pricing plans. Unlimited web maintenance service</p>
                            </div>
                            <div className="inner-flexible-box subscribe-box">
                                <div className="input-group">
                                    <input type="text" className="form-control large" placeholder="Enter your mail here" />
                                    <button className="btn btn-subscribe" type="button"><i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============================ Call To Action End ================================== --> */}
        </>
    );
}

export default ItemDetail;