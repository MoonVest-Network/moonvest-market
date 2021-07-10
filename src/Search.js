import { useEffect, useState } from "react";
import { HashRouter, NavLink, Router } from "react-router-dom";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listNfts } from './graphql/queries';
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
    width: 400,
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

const Search = (props) => {
	// State hook variables.
	const classes = useStyles();
	const [query, setQuery] = useState(props.match.params.query || '');
	const [nftItems, setNftItems] = useState(null);
	const [nftResults, setNftResults] = useState(10000);
	
	// Similar to componentDidMount and componentDidUpdate.
	useEffect(async () => {
		await fetchNftItems();
		try {
			//console.log(Object.values(nftItems[0]));
			console.log(nftItems);
		} catch {}
	}, [nftResults]);

	async function fetchNftItems() {
		try{
			const apiData = await API.graphql(
				graphqlOperation(
					listNfts, { 
						// sortDirection: 'DESC',
						filter: {
							keywords: {
								contains: query
							}
						},
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

	function searchSubmit(event) {
		setNftResults(nftResults + 1000);
    event.preventDefault();
  }

	const moreClicked = async () => {
		setNftResults(nftResults + 10000);
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
			<div className="hero-banner-small bg-cover" style={{ background: "linear-gradient(to bottom right, rgba(10, 25, 65, 0.95), rgba(75, 45, 130, 0.7))" }} data-overlay="1">
				<div className="container">
					<form onSubmit={searchSubmit}>
						<div className="row">
							<div className="col-lg-7 col-md-9 col-sm-12">
								<div className="banner-search style-1">
									<div className="input-group">
										<Paper className={classes.root} >			
											<InputBase
												className={classes.input}
												placeholder="Search NFTs"
												inputProps={{ 'aria-label': 'search' }}
												value={query}
                        onInput={ e=>setQuery(e.target.value)}
											/>
											<IconButton type="submit" className={classes.iconButton} aria-label="search">
												<SearchIcon />
											</IconButton>				
										</Paper>									
									</div>
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
					{/* <div className="row">
						<div className="col-lg-12 col-md-12 text-center mt-4">
						<Button variant="outlined" size="large" onClick={moreClicked}>More</Button>
						</div>
					</div> */}
				</div>
			</section>
			{/* <!-- ============================ Featured List End ================================== --> */}

		</>
	);
}

export default Search;