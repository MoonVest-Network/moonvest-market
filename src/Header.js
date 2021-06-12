// react imports
import React, { useState, useEffect } from "react";
// Routes file
import Routes from "./utils/Routes";
import { connectWallet } from "./utils/interact.js";
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
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height:"11px"
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

  useEffect(async () => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const connectWalletClicked = async () => {
    const walletResponse = await connectWallet();

    setConnected(walletResponse.isConnected);

    if (walletResponse.isConnected) {
      setWalletAddress(walletResponse.walletAddress);
      setMvnBalance(walletResponse.mvnBalance);
      setBnbBalance(walletResponse.bnbBalance);
    }
  };


  const shortAddress = (address) => {
    if (!address) return "";
    if (mobileView) {
      return address.substring(2).slice(0, 5) + "..." + address.slice(-4);
    }
    return address.substring(2).slice(0, 8) + "..." + address.slice(-5);
  };


  const walletButton = () => {
    return (
      <Button
        {...(connected ? { className: connectedButton } : {className: connectButton})}
        size={mobileView ? "small" : "large"}
        onClick={connectWalletClicked}
        variant="contained"
        color="primary"
        startIcon={connected ? <AccountCircleIcon /> : ""}
        endIcon={connected ? <ArrowDropDownIcon /> : <PowerOffIcon />}
      >
        {connected ? "0x" + shortAddress(walletAddress) : "Connect Wallet"}
      </Button>
    );
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
            <NavLink className="navbar-brand" to="/">
              <img src={"img/Logo.png"} height="20" className={logo} alt="" />
            </NavLink>
            <Hidden smDown>
              <div className="d-flex align-items-center">
                <NavLink to="/" className="nav-link">
                  <Button className="text-capitalize">Home</Button>
                </NavLink>
                <NavMenu title="Resource" data={resourceMenuData} />
                <NavMenu title="About" data={aboutMenuData} />
              </div>
              <div className="ml-auto">{walletButton()}</div>
            </Hidden>
            <Hidden mdUp>
              <div className="mx-auto">
                {walletButton()}
              </div>
            </Hidden>
            <Hidden mdUp>
              <div className="ml-auto">
                <DialogMenu resourceData={resourceMenuData} aboutData={aboutMenuData} />
              </div>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Route paths can be found in /utils/Routes.js */}
      <Routes></Routes>
    </HashRouter>
  );
}
