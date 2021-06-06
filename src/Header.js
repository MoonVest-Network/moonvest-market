import Routes from './utils/Routes';
import { HashRouter, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import PowerOffIcon from '@material-ui/icons/PowerOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { connectWallet, disconnectWallet } from "./utils/interact.js";

const headersData = [
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "https://moonvest.network",
  },
];

const useStyles = makeStyles(() => ({
  header: {
		background: 'linear-gradient(to bottom right, #132639, #884dff)',
    paddingRight: "30px",
    paddingLeft: "180px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 700,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "5px 10px",
  },
  connectedButton: {
    background: 'linear-gradient(to bottom, rgba(255,235,250,0.8), rgba(150,100,250,0.6))',
    color: "#212F3C",
    border: '1px solid #6849C4',
    textTransform: "none",
  },
}));

export default function Header() {
  // State hook variables.
	const [connected, setConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");
	const [mvnBalance, setMvnBalance] = useState(0);
  const [bnbBalance, setBnbBalance] = useState(0);
  const { header, logo, menuButton, toolbar, drawerContainer, connectedButton } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(async () => {
    console.log('test');
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    // Is MetaMask installed?
		// if (window.ethereum)
		// {
		// 	// Yes.
		// 	const walletResponse = connectWallet();

    //   setConnected(walletResponse.isConnected);

    //   if (walletResponse.isConnected)
    //     setWalletAddress(walletResponse.address);
		// }
  }, []);

	const connectWalletClicked = async () => {
    const walletResponse = await connectWallet();
  
    setConnected(walletResponse.isConnected);

    if (walletResponse.isConnected) {
      setWalletAddress(walletResponse.walletAddress);
      setMvnBalance(walletResponse.mvnBalance);
      setBnbBalance(walletResponse.bnbBalance);
    }

		// Update state hooks.
		// setConnectedStatus(walletResponse.connectedStatus);
		// setStatus(walletResponse.status);
		
		// if (connected) 
		// {
		// 	setWallet(walletResponse.address);
		// 	await processWalletData();
		// }
	};

  const disconnectWalletClicked = async () => {
    await disconnectWallet();
    setConnected(false);
    setWalletAddress("");
    setMvnBalance(0);
    setBnbBalance(0);
  };

  // const displayDesktop = () => {
  //   return (
  //     <Toolbar className={toolbar}>
  //       {Logo}
  //       <div>{getMenuButtons()}</div>
  //       <div>{getConnectWalletButton("medium")}</div>
  //     </Toolbar>
  //   );
  // };

  // const displayMobile = () => {
  //   const handleDrawerOpen = () =>
  //     setState((prevState) => ({ ...prevState, drawerOpen: true }));
  //   const handleDrawerClose = () =>
  //     setState((prevState) => ({ ...prevState, drawerOpen: false }));

  //   return (
  //     <Toolbar>
  //       <IconButton
  //         {...{
  //           edge: "start",
  //           color: "inherit",
  //           "aria-label": "menu",
  //           "aria-haspopup": "true",
  //           onClick: handleDrawerOpen,
  //         }}
  //       >
  //         <MenuIcon />
  //       </IconButton>

  //       <Drawer
  //         {...{
  //           anchor: "left",
  //           open: drawerOpen,
  //           onClose: handleDrawerClose,
  //         }}
  //       >
  //         <div className={drawerContainer}>{getDrawerChoices()}</div>
  //       </Drawer>

  //       <div>{Logo}</div>
	// 			<div>{getConnectWalletButton("small")}</div>
  //     </Toolbar>
  //   );
  // };

  // const getDrawerChoices = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <MenuItem>{label}</MenuItem>
  //     );
  //   });
  // };

  // const Logo = (
  //   <Typography variant="h6" component="h1" className={logo}>
  //     Moonvest Market
  //   </Typography>
  // );

  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //           className: menuButton,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  // const getConnectWalletButton = (size) => {
  //   return (
  //     <Button onClick={connectWalletClicked} size={size} variant="contained" color="primary" endIcon={connected ? "" : (<PowerOffIcon />)}>
  //       {connected ? (String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)) : "Connect Wallet"}
  //     </Button>
  //   );
  // }
  const shortAddress = (address) => {
    if (!address) return "";
    if (mobileView) {
      return address.substring(2).slice(0,5) + "..." + address.slice(-4);  
    }
    return address.substring(2).slice(0,8) + "..." + address.slice(-5);    
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  }

  const bscScanAddressLink = (address) => {
    return "https://www.bscscan.com/address/" + address;
  }

  const bscScanMvnLink = (address) => {
    return "https://www.bscscan.com/token/0x0323e7752c2d404718e2beaa57d7b6ee4021ae36?a=" + address;
  }
  
  const walletButton = () => {
      return (
        <Button {...connected ? {className: connectedButton} : ""} size={mobileView ? "small" : "large"} onClick={connectWalletClicked} variant="contained" color="primary" startIcon={connected ? (<AccountCircleIcon />) : ("")} endIcon={connected ?  (<ArrowDropDownIcon />) : (<PowerOffIcon />)}>
          {connected ? ("0x"+shortAddress(walletAddress)) : "Connect Wallet"}
        </Button>
      )
  }

  const walletMenu = () => {
    return (
      <ul className="dropdown-menu rounded-0" aria-labelledby="connectWalletDropdown">
        <a href={bscScanMvnLink(walletAddress)} target="_blank"><li className="dropdown-item">{formatNumber(mvnBalance)} MVN</li></a>
        <a href={bscScanAddressLink(walletAddress)} target="_blank"><li className="dropdown-item">{formatNumber(bnbBalance)} BNB</li></a>
        <li><a onClick={disconnectWalletClicked} className="dropdown-item">Disconnect</a></li>
      </ul>
    )
  }

  return (
    <HashRouter>
      <div className="header header-light navbar-light bg-white">
        <div className="container px-0">
          <nav className="navbar navbar-expand-md navbar-light bg-white">
            <NavLink className="navbar-brand" to="/"><img src={"img/Logo.png"} height="20" className="logo" alt="" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex flex-sm-row order-sm-3 order-3 order-lg-3">
              <ul className="navbar-nav col d-sm-flex-spacing connect-wallet justify-content-md-end" style={{cursor: "pointer"}}>
                <li className="dropdown col-xs-4">
                  <div>{walletButton()}</div>
                  {connected ? walletMenu() : ""}
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse order-sm-2 order-2 order-lg-2" id="navbarNavDropdown">
              <ul className="navbar-nav col">
                <li className="nav-item border-bottom-sm">
                  <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item dropdown border-bottom-sm">
                  <a className="nav-link dropdown-toggle" href="#" id="aboutUsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                  </a>
                  <ul className="dropdown-menu rounded-0" aria-labelledby="aboutUsDropdown">
                    <li><a className="dropdown-item" href="https://academy.binance.com/en/articles/7-things-you-should-know-about-nfts" target="_blank">About NFTs</a></li>
                    <li><a className="dropdown-item" href="https://academy.binance.com/en/articles/how-to-get-started-with-binance-smart-chain-bsc" target="_blank">Binance Smart Chain</a></li>
                    <li><a className="dropdown-item" href="https://academy.binance.com/en/articles/how-to-use-metamask" target="_blank">Metamask</a></li>
                      {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="">Hello</a>
                          <ul className="dropdown-menu border-left-0 border-right-0 bg-light rounded-0">
                            <li><a className="dropdown-item" href="#">Submenu</a></li>
                            <li><a className="dropdown-item" href="#">Submenu0</a></li>
                          </ul>
                      </li> */}
                  </ul>
                </li>
                <li className="nav-item dropdown border-bottom-sm">
                  <a className="nav-link dropdown-toggle" href="#" id="contactUsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      About
                  </a>
                  <ul className="dropdown-menu rounded-0" aria-labelledby="contactUsDropdown">
                    <li><a className="dropdown-item" href="https://moonvest.network/index.html#token" target="_blank">MVN Token</a></li>
                    <li><a className="dropdown-item" href="https://moonvest.network/index.html#social" target="_blank">Social</a></li>
                    <li><a className="dropdown-item" href="https://t.me/moonvestnetwork" target="_blank">Contact Us</a></li>
                    {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="">Hello</a>
                        <ul className="dropdown-menu border-left-0 border-right-0 bg-light rounded-0">
                          <li><a className="dropdown-item" href="#">Submenu</a></li>
                          <li><a className="dropdown-item" href="#">Submenu0</a></li>
                        </ul>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="clearfix"></div>

      {/* Route paths can be found in /utils/Routes.js */}
      <Routes></Routes>
    </HashRouter>
  );
}