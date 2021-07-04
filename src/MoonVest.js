import { useEffect, useState } from "react";
import { connectWallet, metaMask } from "./utils/interact.js";
import { HashRouter, NavLink, Router } from "react-router-dom";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listNfts } from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';
import { data } from "jquery";
import SearchIcon from '@material-ui/icons/Search';
import { 
	Button, 
	InputBase,
	IconButton,
	makeStyles,
	TextField,
	Paper
} from "@material-ui/core";


Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const MoonVest = (props) => {
	// State hook variables.
	const classes = useStyles();
	const [nftItems, setNftItems] = useState(null);
	const [nftResults, setNftResults] = useState(12);
	
	// Similar to componentDidMount and componentDidUpdate.
	useEffect(async () => {
		await fetchNftItems();
		try {
			//console.log(Object.values(nftItems[0]));
			console.log(nftItems);
		} catch {}
	}, [nftResults]);

	async function fetchNftItems() {
		let rand_int = Math.floor(Math.random() * 20000); 
		try{
			const apiData = await API.graphql(
				graphqlOperation(
					listNfts, { 
						// sortDirection: 'DESC',
						// filter: {
						// 	popularity: {
						// 		gt: 5
						// 	}
						// },
						// 	// collectionID: {
						// 	// 	gt: 0
						// 	// }
						// },
						limit: nftResults
					}
				)
			);
			setNftItems(apiData.data.listNfts.items);
		}
		catch (error){
			console.log("===== API Error =====");
			console.log(error);
		}
  }

	const searchSubmit = (event) => {
		console.log('submit')
    console.log(event)
    event.preventDefault()

  }

	const moreClicked = async () => {
		setNftResults(nftResults + 12);
	};

	const nftImage = (imageUrl, name) => {
		imageUrl = imageUrl.replace('ipfs://', 'https://ipfs.infura.io:5001/api/v0/cat?arg=')
		return <img src={imageUrl} className="card-img-top" alt={name} />
	}

	// const details = (properties) => {
	// 	// if (!properties) return "";
	// 	console.log(properties.length);
	// 	console.log(_.isEmpty(properties));
	// }

	const nftItemsList = () => {
		if (nftItems == null) return;
		console.log("here");
		const nftItemsCard = nftItems.map(data => {
			return (<NavLink to={"/nft/" + data.collectionID + '/' + data.tokenID}>
				<div key={data.collectionID + '#' + data.tokenID} className="card card-image">
					{nftImage(data.image, data.name)}	
					<div className="top-right pr-2 pt-2">
					<a href="" className="fa-stack fa-2x">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-heart fa-stack-1x fa-inverse"></i>
						</a>
						<a href="" className="fa-stack fa-2x">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-credit-card fa-stack-1x fa-inverse"></i>
						</a>
						<a href="" className="fa-stack fa-2x">
							<i className="fa fa-square fa-stack-2x"></i>
							<i className="fa fa-info-circle fa-stack-1x fa-inverse"></i>
						</a>
					</div>
					<div className="bottom-left pl-2 pb-2">
						<div className="media">
							<span className="d-inline-block pl-1">
								<span className="font-bold d-block">
									<h2 className="text-white">{data.name}</h2>
								</span>
								{/* <span className="font-light d-block">
									<NavLink to={"/item-detail/" + index} style={{color: "white"}}>{data.name}</NavLink>
								</span> */}
							</span>
						</div>
					</div>
					{/* <h4>{data.name}</h4>
					<div className="_ft76y">
						<div className="_65ero"><a>Art</a></div>
						<div className="_65ero"><a>Collectible</a></div>
					</div> */}
					
				</div>
				</NavLink>
			);
		})

		return(
			<HashRouter>
				{nftItemsCard}
			</HashRouter>
		);
	};
	
	// The UI of our component.
	return (
		<>
			{/* <!-- ============================ Hero Banner  Start================================== --> */}
			<div className="hero-banner bg-cover" style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(78, 92, 124, 0.7)), url(img/gallery.jpg) no-repeat" }} data-overlay="5">
				<div className="container">
					<h1>Collect and Trade NFTs</h1>
					<p className="lead">Digital Assets Secured by Blockchain Technology</p>
					<form className="mt-4">
						<div className="row">
							<div className="col-lg-7 col-md-9 col-sm-12">
								<div className="banner-search style-1">
									<div className="input-group">
									<form onSubmit={searchSubmit}>
										<Paper className={classes.root} >										
											<InputBase
												className={classes.input}
												placeholder="Search NFTs"
												inputProps={{ 'aria-label': 'search' }}
											/>
											<IconButton type="submit" className={classes.iconButton} aria-label="search">
												<SearchIcon />
											</IconButton>		
										</Paper>
									</form>
									</div>
								</div>
								<div className="featured-category">
									<ul>
										<li>Browse:</li>
										<li><a href="#">Art</a></li>
										<li><a href="#">Collectibles</a></li>
										<li><a href="#">DeFi</a></li>
										<li><a href="#">Gaming</a></li>
									</ul>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			{/* <!-- ============================ Hero Banner End ================================== --> */}

			{/* <!-- ============================ Featured List Start ================================== --> */}

			<section className="min-sec">
				<div className="container">
					<div className="row justify-content-center">
						<div className="card-columns col-sm-12">
							{nftItemsList()}
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-12 text-center mt-4">
						<Button variant="outlined" size="large" onClick={moreClicked}>More</Button>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Featured List End ================================== --> */}

			{/* <!-- ============================ Partners List ================================== --> */}
			<section className="gray-light min-sec">
				<div className="container">
					<div className="row justify-content-center">

						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/mvn-blue.png" className="img-fluid" alt=""/>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/binance-smart-chain-logo.png" className="img-fluid" alt=""/>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/pancakeswap.png" className="img-fluid" alt=""/>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/bscscan.png" className="img-fluid" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Partners Lists End ================================== --></div> */}

			{/* <!-- ============================ Collections List ================================== --> */}
			<section className="min-sec">
				<div className="container">
					
				<div className="row justify-content-center">
						<div className="col-lg-7 col-md-9">
							<div className="sec-heading">
								<h2>Trending Collections</h2>
							</div>
						</div>
					</div>
					
					<div className="row">
					
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o crop">
									<a href="#" className="_5gt9"><img src="https://d3vi7ke2kcvale.cloudfront.net/images/bsc/0xc014b45d680b5a4bf51ccda778a68d5251c14b5e/889a2bda981db520e6c2a3cfa512afb3.png" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt text-white">Binance NFT</a></h4>
										<span className="_ip76n">3248 NFTs</span>
									</div>
								</div>
								<div className="_45lik">
									{/* <p>Download amazing photos and pictures for free.</p> */}
									{/* <div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div> */}
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o crop">
									<a href="#" className="_5gt9"><img src="https://d3vi7ke2kcvale.cloudfront.net/images/official/a6702636fe00c6c40b668ff5e9fbae88.png" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt text-white">Pancake Bunnies</a></h4>
										<span className="_ip76n">2046 NFTs</span>
									</div>
								</div>
								<div className="_45lik">
									{/* <p>Download amazing photos and pictures for free.</p> */}
									{/* <div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div> */}
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o crop">
									<a href="#" className="_5gt9"><img src="https://d3vi7ke2kcvale.cloudfront.net/images/bsc/0x36633b70eac3d1c98a20a6ecef6033d1077372f5/abf561085422c18ba80b0611c775e79f_500x0.png" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt text-white">GEGO-V2</a></h4>
										<span className="_ip76n">626 NFTs</span>
									</div>
								</div>
								<div className="_45lik">
									{/* <p>Download amazing photos and pictures for free.</p> */}
									{/* <div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div> */}
								</div>
							</div>
						</div>
		
					</div>
					
				</div>
			</section>

		
			{/* <!-- ============================ Collections End ================================== --></div> */}

			{/* <!-- ============================ Call To Action Start ================================== --> */}
			<section className="call-to-act" style={{background:"#5d47dd url(img/landing-bg.png) no-repeat"}}>
				<div className="container">
					<div className="row justify-content-center">

						<div className="col-lg-7 col-md-8">
							<div className="clt-caption text-center mb-4">
								<h3>Find NFTs</h3>

							</div>
							<div className="inner-flexible-box subscribe-box">
								<div className="input-group">
									<input type="text" className="form-control large" placeholder="search by keyword" />
									<button className="btn btn-subscribe" type="button"><i className="fa fa-arrow-right"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Call To Action End ================================== --></section> */}
		</>
	);
}

export default MoonVest;