import abiJson from './abi.json';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

var provider;
var web3Modal;

// const bsc = {
//     name: "Binance Smart Chain",
//     short_name: "bsc",
//     chain: "smartchain",
//     network: "mainnet",
//     chain_id: 56,
//     network_id: 56,
//     rpc_url: "https://bsc-dataseed1.defibit.io/",
//     native_currency: {
//       symbol: "BNB",
//       name: "BNB",
//       decimals: "18",
//       contractAddress: "",
//       balance: ""
//     };

export const connectWallet = async () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
                chainId: 56
            }
        }
    };
    
    web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions,
        theme: {
            background: "rgb(50, 70, 100, 0.85)",
            main: "rgb(230, 240, 240)",
            secondary: "rgb(185, 190, 190)",
            border: "rgba(0, 5, 5, 1)",
            hover: "rgb(130, 100, 150, 0.9)"
          }
    });

    try{
        provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        const networkId = await web3.eth.net.getId();

        if (networkId) {
            return {
                isConnected: true,
                networkId: networkId,
                address: address
            }
        }
    }
    catch (error){
        console.log(error);
    }

    return {
        isConnected: false
    }

    // // Is MetaMask installed on browser?
    // if (window.ethereum) 
    // {
	// 	// Yes.
    //     try 
    //     {
	// 		// Connect MetaMask.
    //         const address = await window.ethereum.enable();
    //         const obj = {
    //             connectedStatus: true,
    //             status: "",
    //             address: address
    //         }

    //         return obj;   
    //     } 
    //     catch (error) 
    //     {
    //         return {
    //             connectedStatus: false,
    //             status: "🦊 Connect to Metamask using the Connect Wallet button."
    //         }
    //     }
    // } 
    // else 
    // {
	// 	// No.
    //     return {
    //         connectedStatus: false,
    //         status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
    //     }
    // }
};

export const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    provider = null;
};

export const metaMask = async (walletAddress) => {
    // Web3 API.
    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));

    // Constant variables
    const tokenAddress = "0x0323e7752c2d404718e2beaa57d7b6ee4021ae36";
    const tokenABI = abiJson;

    // Create token instance for contract and user's wallet address.
    const tokenInst = new web3.eth.Contract(tokenABI, tokenAddress);

    // Get balance.
    const walletBalance = await tokenInst.methods.balanceOf(walletAddress).call().then(function (bal) {
        return String(bal);
    });

    // Get supply.
    const totalSupply = await tokenInst.methods.totalSupply().call().then(function (totalSupp) {
        return String(totalSupp);
    });
    
    const obj = {
        walletBalance: walletBalance,
        totalSupply: 1000000000000 - totalSupply
        // 1000000000 * 10 ** 18
    };

    return obj;
}

export const testLiquidityPool = async() => {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
    const tokenAddress = "0x0323e7752c2d404718e2beaa57d7b6ee4021ae36";
    const tokenABI = abiJson;
    var UNIV2BSCADDRESS = "0x05ff2b0db69458a0750badebc4f9e13add608c7f";
    const tokenInstUniv = new web3.eth.Contract(tokenABI, UNIV2BSCADDRESS);

    // Get liquidity pool.
    const reserves = await tokenInstUniv.methods.getTokenReserves(tokenAddress, 56);
    console.log(reserves);
}