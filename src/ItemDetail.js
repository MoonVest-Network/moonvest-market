import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getNft, getCollection } from './graphql/queries';

const ItemDetail = (props) => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [owner, setOwner] = useState("");
    const [creator, setCreator] = useState("");
    const [properties, setProperties] = useState({});
    const [history, setHistory] = useState({});
    const [creationBlock, setCreationBlock] = useState(0);
    const [lastTransferBlock, setLastTransferBlock] = useState(0);
    const [collectionName, setCollectionName] = useState("");
    const [collectionAddress, setCollectionAddress] = useState("");
    const [blockchainShort, setBlockchainShort] = useState("bsc");
    const [blockchainFull, setBlockchainFull] = useState("Binance Smart Chain");
    const collectionID = props.match.params.collectionID || 0;
    const tokenID = props.match.params.tokenID || 0;

    useEffect(async () => {
		await fetchNftItem();
	}, []);

    async function fetchNftItem() {
		try{
			const nftData = await API.graphql(
				graphqlOperation(
					getNft, { collectionID: collectionID, tokenID: tokenID }
				)
			);
            console.log(nftData.data.getNft);
			setName(nftData.data.getNft.name);
            setDescription(nftData.data.getNft.description);
            setImage(nftData.data.getNft.image);
            setProperties(JSON.parse(nftData.data.getNft.properties));
            setOwner(nftData.data.getNft.ownerAddress);
            setCreator(nftData.data.getNft.creatorAddress);
            setCreationBlock(nftData.data.getNft.creationBlock);
            setLastTransferBlock(nftData.data.getNft.lastTransferBlock);

            const collectionData = await API.graphql(
				graphqlOperation(
					getCollection, { blockchain: blockchainShort, collectionID: collectionID }
				)
			);
            console.log(collectionData.data.getCollection);
            setCollectionName(collectionData.data.getCollection.name);
            setCollectionAddress(collectionData.data.getCollection.address);
            // setHistory(apiData.data.getNft.properties);
		}
		catch (error){
			console.log("===== API Error =====");
			console.log(error);
		}
    }

    const nftImage = (imageUrl, name) => {
		imageUrl = imageUrl.replace('ipfs://', 'https://ipfs.infura.io:5001/api/v0/cat?arg=')
		return <img src={imageUrl} className="img-responsive" alt={name} />  
	}

    const shortString = (address) => {
        if (!address) return "";
        if (address.length < 15) return address;
        return address.substring(2).slice(0, 8) + "..." + address.slice(-5);
    };

    const bscScanAddressLink = (address) => {
        return "https://www.bscscan.com/address/" + address;
    }

    const bscScanTokenLink = (address) => {
        return "https://www.bscscan.com/token/" + address;
    }

    const bscScanBlockLink = (blockNumber) => {
        return "https://www.bscscan.com/block/" + blockNumber;
    }

    const listProperties = (properties) => {
        let html = [];
        try {
            for (let key in properties) {
                console.log(key);
                if(properties[key].hasOwnProperty("trait_type")){
                    html.push(
                        <div className="row my-3">
                            <div className="col"><span className="font-light">{properties[key]["trait_type"]}:</span></div>
                            <div className="col"><span className="align-content-end" title={properties[key]["value"]}>{shortString(properties[key]["value"])}</span></div>
                        </div>
                    );
                } else {
                    html.push(
                        <div className="row my-3">
                            <div className="col"><span className="font-light">{key}:</span></div>
                            <div className="col"><span className="align-content-end" title={properties[key]}>{shortString(properties[key])}</span></div>
                        </div>
                    );
                }
            }
        } catch (error){
            console.log("===== Properties Error =====");
            console.log(error);
            console.log(properties);
        }
        return html;
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
                                {nftImage(image, name)}
                            </div>
                            {/* <div className="col-12">
                                <div className="urip_follo_link">
                                    <ul>
                                        <li><a href="#" className="btn btn-dark btn-block btn-md">Make Offer</a></li>
                                        <li><a href="#" className="btn theme-bg btn-block btn-md">Buy Now</a></li>
                                    </ul>
                                </div>
                            </div> */}
   
                            <div className="col-12 mt-3">
                                <div className="font-light mb-3 col-12 px-0">
                                    <blockquote className="noted">
                                        Description: {description}
                                    </blockquote>
                                </div>
                                <div className="col-12 px-0 feature-list">
                                    <h4 className="">History</h4>
                                    <div className="dashed mb-3"></div>
                                    <ul className="list-unstyled">
                                        <li>Transferred at <a href={bscScanBlockLink(lastTransferBlock)} target="_blank">{lastTransferBlock}</a></li>
                                        <li>Created at <a href={bscScanBlockLink(creationBlock)} target="_blank">{creationBlock}</a></li>
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
                            {/* <!--Start Listings--> */}
                            {/* <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Listings</h4>
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
                            </div> */}
                            {/* <!--End Listings--> */}


                  {/* <!-- Details --> */}
                  <div className="row">
                                <div className="container">
                                    <div className="card">
                                        <div className="card-header bg-dark card rounded-top align-items-start mb-0">
                                            <h4 className="text-white">Details</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Collection:</span>
                                                </div>
                                                <div className="col">
                                                    <a href={bscScanTokenLink(collectionAddress)} _target="blank">
                                                        <span className="align-content-end">{collectionName}</span>
                                                    </a>
                                                </div>
                                            </div>

                                            {listProperties(properties)}
                                    
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Last Transfer:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end"><a href={bscScanBlockLink(lastTransferBlock)} target="_blank">{lastTransferBlock}</a></span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Created:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end"><a href={bscScanBlockLink(creationBlock)} target="_blank">{creationBlock}</a></span>
                                                </div>
                                            </div>
                                            <div className="row my-3">
                                                <div className="col">
                                                    <span className="font-light">Blockchain:</span>
                                                </div>
                                                <div className="col">
                                                    <span className="align-content-end">{blockchainFull}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Details --> */}

                            {/* <!-- Owner Info --> */}
                            <div className="urip_widget_wrap shadow_0 mb-4 large">
                                <div className="urip_widget_avater">
                                    <a href={bscScanAddressLink(owner)}><img src="https://picsum.photos/64/65" className="img-fluid circle" alt=""/></a>
                                    <div className="veryfied_author"><img src="img/verified.svg" className="img-fluid" width="15" alt=""/></div>
                                </div>
                                <div className="widget_avater_124">
                                    <h4 className="avater_name_214"><a href={bscScanAddressLink(owner)}>{shortString(owner)}</a></h4>
                                    <span>Owner</span>
                                </div>
                                {/* <div className="widget_avater_124">
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
                                </div> */}
                                {/* <div className="widget_lkpi">
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
                                </div> */}
                                <div className="widget_avater_423">
                                    <a href={bscScanAddressLink(owner)} className="btn btn-block theme-bg btn-md font-weight-bold">View Profile</a>
                                </div>
                            </div>
                            {/* <!-- End Owner Info --> */}

                            {/* <!-- Creator Info --> */}
                            <div className="urip_widget_wrap shadow_0 mb-4 large">
                                <div className="urip_widget_avater">
                                    <a href={bscScanAddressLink(creator)}><img src="https://picsum.photos/65/64" className="img-fluid circle" alt=""/></a>
                                    <div className="veryfied_author"><img src="img/verified.svg" className="img-fluid" width="15" alt=""/></div>
                                </div>
                                <div className="widget_avater_124">
                                    <h4 className="avater_name_214"><a href={bscScanAddressLink(creator)}>{shortString(creator)}</a></h4>
                                    <span>Creator</span>
                                </div>
                                {/* <div className="widget_avater_124">
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
                                </div> */}
                                
                                {/* <div className="widget_lkpi">
                                    <ul className="auhor_info_list_215">
                                        <li>
                                            <div className="urip_jbl"><span className="count">432</span></div><span
                                                className="smallest">Following</span>
                                        </li>
                                        <li>
                                            <div className="urip_jbl"><span className="count">234</span></div><span
                                                className="smallest">Followers</span>
                                        </li>
                                        <li>
                                            <div className="urip_jbl urip_rates good">4.9</div><a><span className="smallest">Rating</span></a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="widget_avater_423">
                                    <a href={bscScanAddressLink(creator)} className="btn btn-block theme-bg btn-md font-weight-bold">View Profile</a>
                                </div>
                            </div>
                            {/* <!-- End Creator Info --> */}

          
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============================ Item Detail Start ================================== --> */}
        </>
    );
}

export default ItemDetail;