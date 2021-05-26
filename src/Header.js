import MoonVest from './MoonVest';
import ItemDetail from './ItemDetail';
import { HashRouter, NavLink, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import PowerOffIcon from '@material-ui/icons/PowerOff';
import { connectWallet } from "./utils/interact.js";

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
}));

export default function Header() {
  // State hook variables.
	const [connected, setConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");
	const [walletBalance, setWalletBalance] = useState(0);
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
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

    console.log(walletResponse);
		
    if (walletResponse.isConnected) {
      setConnected(true);
      setWalletAddress(walletResponse.address);
    } else {
      setConnected(false);
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

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {Logo}
        <div>{getMenuButtons()}</div>
        <div>{getConnectWalletButton("medium")}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{Logo}</div>
				<div>{getConnectWalletButton("small")}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <MenuItem>{label}</MenuItem>
      );
    });
  };

  const Logo = (
    <Typography variant="h6" component="h1" className={logo}>
      Moonvest Market
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getConnectWalletButton = (size) => {
    if (connected){
      return (
        <Button onClick={connectWalletClicked} size="{size}" variant="contained" color="primary">
          {walletAddress}
        </Button>
      )
    }

    return (
      <Button onClick={connectWalletClicked} variant="contained" size="{size}" color="primary" endIcon={<PowerOffIcon />}>
        Connect Wallet
      </Button>
    )
  }

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}