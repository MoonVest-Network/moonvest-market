import { useEffect, useState } from "react";
import { connectWallet, metaMask } from "./utils/interact.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/plugins.css';
import './assets/styles.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';

const MoonVest = (props) => {
	// State hook variables.
	const [isConnected, setConnectedStatus] = useState(false);
	const [status, setStatus] = useState("");
	const [walletAddress, setWallet] = useState("");
	const [walletBalance, setBalance] = useState("00.00");
	const [walletSupply, setTotalSupply] = useState("00.00");
	const [totalBurn, setTotalBurn] = useState("00.00");
	const [price, setPrice] = useState("0.00");
	const [marketCap, setMarketCap] = useState("0.00");
	const [anchorEl, setAnchorEl] = useState(null);
	
	// Similar to componentDidMount and componentDidUpdate.
	useEffect(async () => {
		// Is MetaMask installed?
		if (window.ethereum)
		{
			// Yes.
			try
			{
				// Get MetaMask wallet.
				const accounts = await window.ethereum.request({
					method: "eth_accounts"
				});
				
				// Is MetaMask account connected?
				if (accounts.length)
				{
					// Yes.
					setConnectedStatus(true);
					setWallet(accounts[0]);

					await processWalletData();
				}
				else
				{
					// No.
					setConnectedStatus(false);
					setStatus("🦊 Connect to MetaMask using the Connect Wallet button.");
				}
			}
			catch
			{
				// An error occured while trying to connect wallet.
				setConnectedStatus(false);
				setStatus("🦊 Disconnect wallet from Metamask then reconnect with Connect Wallet button. " + walletAddress);
			}
		}
	});
	
	// On click event of Connect Wallet Button.
	const connectWalletClicked = async () => {
		const walletResponse = await connectWallet();
		
		// Update state hooks.
		setConnectedStatus(walletResponse.connectedStatus);
		setStatus(walletResponse.status);
		
		if (isConnected) 
		{
			setWallet(walletResponse.address);
			await processWalletData();
		}
	};

	// Data filler for wallet state hooks.
	const processWalletData = async () => {
		const metaMaskData = await metaMask(String(walletAddress));
		setBalance(metaMaskData.walletBalance);
		setTotalSupply(metaMaskData.totalSupply);
		setTotalBurn(walletSupply);
	};
	
	// The UI of our component.
	return (
		<div className="main-wrapper">
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

			{/* <!-- ============================ Hero Banner  Start================================== --> */}
			<div className="hero-banner bg-cover" style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(78, 92, 124, 0.7)), url(img/gallery.jpg) no-repeat" }} data-overlay="5">
				<div className="container">
					<h1>Collect and Trade NFTs</h1>
					<p className="lead">Digital Assets Secured by Blockchain Technology</p>
					<form className="mt-4">
						<div className="row">
							<div className="col-lg-7 col-md-9 col-sm-12">
								<div className="banner-search style-1">
									<div className="input-group">
										<input type="text" className="form-control radiup" placeholder="Search NFTs" />
										<div className="input-group-append b-l">
											<button type="button" className="btn bt-round trans"><i className="ti-search"></i></button>
										</div>
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

			{/* <!-- ============================ All Images List Start ================================== --> */}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							
							<div className="urip_column_wrap">
								
								<div className="urip_column_single">
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/500/400" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/300/400" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								
								</div>
								
								<div className="urip_column_single">
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/400/300" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/500/450" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/300/410" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								
								</div>
								
								<div className="urip_column_single">
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/330/410" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/400/300" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									{/* <!-- Single Image Product --> */}
									<div className="urip_column_three">
										<div className="item_image_urip">
											<a href="item-detail.html" className="urip_link download"><i className="fa fa-download"></i></a>
											<a href="premium-stock-detail.html" className="item-img">
												<img src="https://picsum.photos/380/410" className="img-fluid" alt="" />
											</a>
											<div className="image_urip_caption">
												<div className="urip_caption_flex">
													<div className="urip_author">
														<div className="urip_avater">
															<a href="author-detail.html.html" className="author-img">
																<img src="https://picsum.photos/400/400" className="img-fluid" alt="" />
															</a>
														</div>
														<div className="urip_avater_place">
															<h3 className="urip_title"><a href="author-detail.html.html">Adam vilson</a></h3>
															<span>Liverpool, London</span>
														</div>
													</div>
												</div>
												<div className="urip_caption_last">
													<div className="item_list_links">
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-plus-circle"></i></a>
														<a href="premium-stock-detail.html" className="urip_link"><i className="fa fa-heart"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								
								</div>
							
							</div>
							
						</div>
					</div>
					
					<div className="row">
						<div className="col-lg-12 col-md-12 text-center">
							<a href="#" className="ure09w">Browse More</a>
						</div>
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ All Images List End ================================== --> */}

			{/* <!-- ============================ Authors List ================================== --> */}
			<section className="gray-light min-sec">
				<div className="container">
					<div className="row justify-content-center">
					
						{/* <!-- Single --> */}
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/mvn-blue.png" className="img-fluid" alt="" />
							</div>
						</div>	
						{/* <!-- Single --> */}
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/binance-smart-chain-logo.png" className="img-fluid" alt="" />
							</div>
						</div>
						{/* <!-- Single --> */}
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/pancakeswap.png" className="img-fluid" alt="" />
							</div>
						</div>
						{/* <!-- Single --> */}
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="royh9">
								<img src="img/bscscan.png" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Author Lists End ================================== --></div> */}

			{/* <!-- ============================ Photo category List ================================== --> */}
			<section className="min-sec">
				<div className="container">
					
					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-9">
							<div className="sec-heading">
								<h2>Featured Images with Tags</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					
					<div className="row">
					
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/700/400" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Wedding & Marriage</a></h4>
										<span className="_ip76n">5k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/500/400" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Work & Desk</a></h4>
										<span className="_ip76n">3.2k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/450/400" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Destinations</a></h4>
										<span className="_ip76n">4.7k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/400/410" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Flowers</a></h4>
										<span className="_ip76n">5.2k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/400/405" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Workspace</a></h4>
										<span className="_ip76n">12k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Single Pricing Box --> */}
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="_45lio">
								<div className="_jk58o">
									<a href="#" className="_5gt9"><img src="https://picsum.photos/430/400" className="img-fluid" alt="" /></a>
									<div className="_io980">
										<h4 className="_95lp"><a href="#" className="_50gt">Interior Design</a></h4>
										<span className="_ip76n">32k Images</span>
									</div>
								</div>
								<div className="_45lik">
									<p>Download amazing photos and pictures for free.</p>
									<div className="_ft76y">
										<div className="_65ero"><a>Nature Image</a></div>
										<div className="_65ero"><a>Cool</a></div>
										<div className="_65ero"><a>HD Images</a></div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			{/* <!-- ============================ Photo category End ================================== --></div> */}

			{/* <!-- ============================ Call To Action Start ================================== --> */}
			<section className="call-to-act" style={{background: "#5d47dd url(img/landing-bg.png) no-repeat"}}>
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

			{/* <!-- =========================== Footer Start ========================================= --> */}
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
			{/* <!-- =========================== Footer End ========================================= --> */}

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
		</div>
	);
}

export default MoonVest;