import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
          <a target="_blank" href="https://akasha-git-master-ridaen-nasry.vercel.app/"> <button id="bt" >Mint</button> </a>
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
        <button type="button">Connect Wallet</button>
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
              <a href="https://akasha-git-master-ridaen-nasry.vercel.app/"> <button id="bt" >Mint</button> </a>
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
