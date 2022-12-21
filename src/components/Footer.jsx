import React from 'react';
import twitter from '../images/white-twitter-icon.png';
import dribble from '../images/white-dribble-icon.png';
import linkedin from '../images/white-linkedin-icon.png';
import mail from '../images/white-mail-icon.png';
import github from '../images/white-github-icon.png';
import crown from '../images/white-crown.png';


const Footer = () => {

  return (
    <div className="footer">
      <div>
        <div className="footer-header">
          <div className="collab">
            <h1>Start a project</h1>
            <div className="coffee">
              <p>Interested in working together? We should queue up a</p>
              <p>time to chat. I'll buy the coffee.</p>
            </div>
            <a className="collab-btn" href="/">Lets chat</a>
          </div>
          <img src={crown} className="logo"/>
          <h2>Designing, developing and innovating one day at a time.</h2>
        </div>

        <div className="links">
          <div className="links-bg">
            <a href="/"><img src={twitter} /></a>
          </div>
          <div className="links-bg">
            <a href="/"><img src={dribble} /></a>
          </div>
          <div className="links-bg">
            <a href="/"><img src={linkedin} /></a>
          </div>
          <div className="links-bg">
            <a href="/"><img src={mail} /></a>
          </div>
          <div className="links-bg">
            <a href="/"><img src={github} /></a>
          </div>
        </div>
      </div>

      <h3 className="credit">
        Designed by me @2022
      </h3>
    </div>
  );
};

export default Footer;