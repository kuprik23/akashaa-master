import React from 'react';
import { Helmet } from 'react-helmet';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
// import ReactPlayer from 'react-player'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Akasha Metaverse</h1>
      <div className="wrapper">
        <div className="video-main">
          <div className="promo-video">
            <div className="waves-block">
              <div className="waves wave-1" />
              <div className="waves wave-2" />
              <div className="waves wave-3" />
            </div>
          </div>
          <Helmet>
            <script
              async
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
            />
            <script
              async
              src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.js"
            />
          </Helmet>
          <a
            href="https://youtu.be/vDwgWHw7eWA"
            className="video video-popup mfp-iframe"
            data-lity
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
      <p>
        Connection are evolving and so should we. <br /> Akasha Metaverse is a
        virtual heaven where the possibilities are limitless.
      </p>
      <div className="gpt3__header-content__input">
        <button type="button" className="access-button">
          Access The Metaverse
        </button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 requested a visit to akasha in last 24h</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
