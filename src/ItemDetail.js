import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getMarketplace } from './graphql/queries';

const ItemDetail = (props) => {
    const nftItemId = props.match.params.id || 0;
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [properties, setProperties] = useState(null);

    useEffect(async () => {
		await fetchNftItem();
	}, []);

    async function fetchNftItem() {
		try{
			const apiData = await API.graphql(
				graphqlOperation(
					getMarketplace, { id: nftItemId }
				)
			);
            console.log(apiData.data.getMarketplace)
			setName(apiData.data.getMarketplace.name);
            setDescription(apiData.data.getMarketplace.description);
            setImage(apiData.data.getMarketplace.image);
            setProperties(apiData.data.getMarketplace.properties);
		}
		catch (error){
			console.log("===== API Error =====");
			console.log(error);
		}
    }
    
    return(
        <>
            {/* <!-- ============================ Item Detail Start ================================== --> */}
            <section className="gray-light">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-12 col-sm-12">

                            <div className="col-12">
                                <h1>{name}</h1>
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb light">
                                        <li className="breadcrumb-item"><a><i className="fa fa-home"></i></a></li>
                                        <li className="breadcrumb-item"><a>Files</a></li>
                                        <li className="breadcrumb-item"><a>HTML Templates</a></li>
                                        <li className="breadcrumb-item"><a>Corporate</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Business</li>
                                    </ol>
                                </nav> */}
                            </div>
                            <div className="col-12">
                                <img src={image} className="img-responsive" alt={name} />
                            </div>
                            <div className="col-12">
                                <div className="urip_follo_link">
                                    <ul>
                                        <li><a href="#" className="btn btn-dark btn-block btn-md">Make Offer</a></li>
                                        <li><a href="#" className="btn theme-bg btn-block btn-md">Buy Now</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <blockquote className="noted">
                                    NOTE: This is only a DEMO page.
                                </blockquote>
                            </div>
                            <div className="col-12">
                                <div className="font-light mb-3 col-12 px-0">
                                    {description}
                                </div>
                                <div className="col-12 px-0 feature-list">
                                    <h4 className="">History</h4>
                                    <div className="dashed mb-3"></div>
                                    <ul className="list-unstyled">
                                        <li>Purchased by Axil for 0.2 BNB on Feb 19, 2021</li>
                                        <li>Purchased by Bobble for 95 BUSD on Jan 21, 2021</li>
                                        <li>Transferred to NftCollector on Jan 5, 2021</li>
                                        <li>Created by DigiArtist on Jan 2, 2021</li>
                                    </ul>
                                </div>
                                {/* <div className="col-12 mt-4 px-0">
                                    <button className="btn theme-bg btn-md font-weight-bold px-5">
                                        Purchase Now
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* <!-- Sidebar Start --> */}
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            {/* <!--Select License Bootstrap--> */}
                            <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Listings</h4>
                                            <h6 className="text-white font-light">Demo Only</h6>
                                        </div>
                                        <div className="card-body px-0 py-0">

                                            <div className="moonvest-prices dashed px-2 py-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" htmlFor="customCheck1">
                                                        <h6>NFTCollector</h6>
                                                        <p>Expires in 3 days</p>
                                                    </label>
                                                    <h3 className="pull-right">0.5 BNB</h3>
                                                </div>
                                            </div>

                                            <div className="moonvest-prices dashed px-2 py-3">
                                                <div className="custom-control custom-checkbox ">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                    <label className="custom-control-label" htmlFor="customCheck2">
                                                        <h6 className="red">Bobble</h6>
                                                        <p>Expires in 5 Days</p>
                                                    </label>
                                                    <h3 className="pull-right ">8.5M MVN</h3>
                                                </div>
                                            </div>

                                            <div className="moonvest-prices px-2 pt-3">
                                                <div className="custom-control custom-checkbox ">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                    <label className="custom-control-label" htmlFor="customCheck3">
                                                        <h6>Axil</h6>
                                                        <p>Expires in 25 Days</p>
                                                    </label>
                                                    <h3 className="pull-right">120 BUSD</h3>
                                                </div>
                                            </div>

                                            <div className="px-4 py-3">
                                                <button className="btn btn-block theme-bg btn-md font-weight-bold">Buy Now</button>
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
                                    <h4 className="avater_name_214"><a href="author-portfolio.html">DigiArtist</a></h4>
                                    <span>Member since Sep 2020</span>
                                </div>
                                <div className="widget_avater_124">
                                    <ul className="auhor_list_badges">
                                        <li><img src="img/golden.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        {/* <li><img src="img/1st.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/2year.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li> */}
                                        <li><img src="img/3year.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        <li><img src="img/platinum.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li>
                                        {/* <li><img src="img/green-elite.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/gold-medal.svg" className="img-avater rounded" width="40" alt=""/></li>
                                        <li><img src="img/smart.svg" className="img-avater rounded" width="40" alt=""/>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="widget_lkpi">
                                    <ul className="auhor_info_list_215">
                                        <li>
                                            <div className="urip_jbl"><span className="count">25</span></div><span
                                                className="smallest">Following</span>
                                        </li>
                                        <li>
                                            <div className="urip_jbl"><span className="count">957</span></div><span
                                                className="smallest">Followers</span>
                                        </li>
                                        <li>
                                            <div className="urip_jbl urip_rates good">4.7</div><a><span className="smallest">Rating</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget_avater_423">
                                    <a href="author-portfolio.html" className="btn btn-block theme-bg btn-md font-weight-bold">View Profile</a>
                                </div>
                            </div>

                            {/* <!-- Details --> */}
                            <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Product Details</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Created:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">2 Jan 2021</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Last Sale:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">19 Feb 2021</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Collection:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">BSC NFT</span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Tags:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">Art, Collectible</span>
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
        </>
    );
}

export default ItemDetail;