import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  { Button, Paper, Stack, Typography } from "@mui/material";


const MetaConnect = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountChange(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6"> Account: {account} </Typography>
        <Typography variant="h6">
          Balance: {balance} {balance ? "ETH" : null}
        </Typography>
        <Button onClick={connectHandler}>Connect Account</Button>
        {errorMessage ? (
          <Typography variant="body1" color="red">
            Error: {errorMessage}
          </Typography>
        ) : null}
      </Stack>
    </Paper>
  );
};
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} className="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is Akasha?</a>
          </p>
          <p>
          <a href="https://akasha-git-master-ridaen-nasry.vercel.app/"> <button id="bt" >Minty</button> </a>
          </p>
          <p>
            <a
              href="https://www.keepandshare.com/doc6/38222/akasha-original-white-paper-1-pdf-129k?da=y"
              target="_blank"
              rel="noopener noreferrer"
            >
              White Paper
            </a>
          </p>
          <p>
            <a href="#team">Team</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Connect Wallet</button>import 
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is Akasha</a>
              </p>
              <p>
              <a target="_blank" href="https://akasha-git-master-ridaen-nasry.vercel.app/"> <button id="bt" >Mint</button> </a>
              </p>
              <p>
                <a href="#features">White Paper</a>
              </p>
              <p>
                <a href="#blog">Company</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">Connect Wallet</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
