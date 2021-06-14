// react imports
import React, { useState, useEffect } from "react";
// Routes file
import Routes from "./utils/Routes";
import { connectWallet, disconnectWallet } from "./utils/interact.js";
// react router
import { HashRouter, NavLink } from "react-router-dom";
// material core imports
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Container,
  Hidden,
  MenuItem,
  Menu
} from "@material-ui/core";
// material icons
import PowerOffIcon from "@material-ui/icons/PowerOff";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// components
import DialogMenu from "../src/components/DialogMenu";
import NavMenu from './components/NavMenu';

// usestyles
const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(to bottom right, #132639, #884dff)",
    paddingRight: "30px",
    paddingLeft: "180px",
    "@media (max-width: 750px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height:"17px"
    }
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
    background:
      "linear-gradient(to bottom, rgba(255,235,250,0.8), rgba(150,100,250,0.6))",
    color: "#212F3C",
    border: "1px solid #6849C4",
    textTransform: "none",
  },
  connectButton:{
    [theme.breakpoints.down('xs')]: {
      fontSize:"9px"
    },
  }
}));

// menu data
const resourceMenuData = [
  {name:"About NFTs",url:"https://academy.binance.com/en/articles/7-things-you-should-know-about-nfts"},
  {name:"Binance Smart Chain", url:"https://academy.binance.com/en/articles/how-to-get-started-with-binance-smart-chain-bsc"},
  {name:"Matemask",url:"https://academy.binance.com/en/articles/how-to-use-metamask"}
];
const aboutMenuData = [
  {name:"MVN Token",url:"https://moonvest.network/index.html#token"},
  {name:"Social",url:"https://moonvest.network/index.html#social"},
  {name:"Contact Us",url:"https://t.me/moonvestnetwork"}
]

export default function Header() {
  // State hook variables.
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [mvnBalance, setMvnBalance] = useState(0);
  const [bnbBalance, setBnbBalance] = useState(0);
  const { connectedButton } = useStyles();
  const { connectButton } = useStyles();
  const { logo } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    resourceMenu: false,
    aboutMenu: false,
  });

  const { mobileView } = state;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(async () => {
    const setResponsiveness = () => {
      return window.innerWidth < 750
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const connectWalletClicked = async (event) => {
  
    if (connected) {
      setAnchorEl(event.currentTarget);
      return;
    }

    const walletResponse = await connectWallet();

    setConnected(walletResponse.isConnected);

    if (walletResponse.isConnected) {
      setWalletAddress(walletResponse.walletAddress);
      setMvnBalance(walletResponse.mvnBalance);
      setBnbBalance(walletResponse.bnbBalance);
    }
  };

  const disconnectWalletClicked = async () => {
    await disconnectWallet();
    setAnchorEl(null);
    setConnected(false);
    setWalletAddress("");
    setMvnBalance(0);
    setBnbBalance(0);
  };

  const shortAddress = (address) => {
    if (!address) return "";
    if (mobileView) {
      return address.substring(2).slice(0, 5) + "..." + address.slice(-4);
    }
    return address.substring(2).slice(0, 8) + "..." + address.slice(-5);
  };

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

      <div>
        <Button
          {...(connected ? { className: connectedButton } : {className: connectButton})}
          aria-controls="wallet-menu"
          aria-haspopup="true" 
          size={mobileView ? "medium" : "large"}
          onClick={connectWalletClicked}
          variant="contained"
          color="primary"
          startIcon={connected ? <AccountCircleIcon /> : ""}
          endIcon={connected ? <ArrowDropDownIcon /> : <PowerOffIcon />}
        >
          {connected ? "0x" + shortAddress(walletAddress) : "Connect Wallet"}
        </Button>
        <Menu
          id="wallet-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem><a href={bscScanMvnLink(walletAddress)} target="_blank" rel="noopener noreferrer">{formatNumber(mvnBalance)} MVN</a></MenuItem>
          <MenuItem><a href={bscScanAddressLink(walletAddress)} target="_blank" rel="noopener noreferrer">{formatNumber(bnbBalance)} BNB</a></MenuItem>
          <MenuItem onClick={disconnectWalletClicked}>Disconnect</MenuItem>
        </Menu>
      </div>
    );
  };

  const walletMenu = () => {
    return (
      <ul className="dropdown-menu rounded-0" aria-labelledby="connectWalletDropdown">
        <a href={bscScanMvnLink(walletAddress)} target="_blank" rel="noopener noreferrer"><li className="dropdown-item">{formatNumber(mvnBalance)} MVN</li></a>
        <a href={bscScanAddressLink(walletAddress)} target="_blank" rel="noopener noreferrer"><li className="dropdown-item">{formatNumber(bnbBalance)} BNB</li></a>
        <li><a onClick={disconnectWalletClicked} className="dropdown-item" rel="noopener noreferrer">Disconnect</a></li>
      </ul>
    )
  };

  return (
    <HashRouter>
      <AppBar
        position="static"
        color="inherit"
        className="header header-light navbar-light bg-white"
      >
        <Container fixed>
          <Toolbar>

            <Hidden smDown>
              <NavLink className="navbar-brand" to="/">
                <img src={"img/Logo.png"} height="20" className={logo} alt="" />
              </NavLink>
              <div className="d-flex align-items-center">
                <NavMenu title="Resource" data={resourceMenuData} />
                <NavMenu title="About" data={aboutMenuData} />
              </div>
              <div className="ml-auto">{walletButton()}</div>
            </Hidden>
            <Hidden mdUp>
              <div className="ml-auto">
                <DialogMenu resourceData={resourceMenuData} aboutData={aboutMenuData} />
              </div>
              <NavLink className="navbar-brand" to="/">
                <img src={"img/Logo.png"} height="20" className={logo} alt="" />
              </NavLink>
              <div className="mx-auto">{walletButton()}</div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Route paths can be found in /utils/Routes.js */}
      <Routes></Routes>
    </HashRouter>
  );
}
