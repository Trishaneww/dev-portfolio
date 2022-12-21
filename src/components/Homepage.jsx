import React from 'react';
import icon from '../images/tezos-silver.png';
import Ui from '../images/UI:UX.png';
import designIcon from '../images/designer-icon.png';
import frontend from '../images/frontend.png';
import backend from '../images/software-developer.png';
import digitalwealth from '../images/digitalwealth.png';
import weatherwizard from '../images/weatherwizard.png';
import doublerfades from '../images/doublerfades.png';
import horiseon from '../images/Horiseon.png';
import campjrnl from '../images/campjrnl.png';
import development from '../images/inprogress.png';
import github from '../images/blue-github.png';
import chat from '../images/blue-message.png';
import profile from '../images/blue-profile.png';
import teagram from '../images/teagram.png';


const Homepage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="striped">
        <div className="intro">
          <h1>Hi, my</h1>
          <h1>name is <span>Trishane</span>.</h1>
          <p>I'm an independent <span>creative developer & designer</span> based</p>
          <p>in Oakville, Canada</p>
        </div>
        <div className="profile">
          <img src={profile} />
        </div>
        </div>
      </div>

      <div className="about-me">
        <div className="greeting">
          <h1>Hi, I'm Trishane. Nice to meet you.</h1>
          <p>We Keep You Updated With the Current Affairs Related To Economy. Subscribe Now! Real Estate. Tech. Business. Trusted Insights. U.S. & World News. Management & Leadership. In-Depth Analysis. Politics. Economy. Award-Winning Coverage.
          </p>
        </div>
        <section className="traits-container">
          <div className="traits">
            <div className="trait-icon">
              <img src={designIcon}/>
            </div>
            <h1>Designer</h1>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <h2>Things I Enjoy Designing:</h2>
            <p>UI, UX, Apps, Logos</p>
            <h2>Design Tools:</h2>
            <ul>
              <li>Affanity Design</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Pen & Paper</li>
              <li>Webflow</li>
              <li>Sketch</li>
            </ul>
          </div>

          <div className="traits">
            <div className="trait-icon">
              <img src={frontend}/>
            </div>
            <h1>Frontend Developer</h1>
            <p>I enjoy bringing creative and ambitious ideas to the browser, starting from scratch!</p>
            <h2>Languages I work with:</h2>
            <p>HTML, CSS, Git</p>
            <h2>Libraries, Frameworks and Dev Tools:</h2>
            <ul>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Github</li>
              <li>Terminal</li>
            </ul>
          </div>

          <div className="last-trait">
            <div className="trait-icon">
              <img src={backend}/>
            </div>
            <h1>Backend Developer</h1>
            <p>I am fascinated with developing effecient ways to complete tasks through software.</p>
            <h2>Languages I work with:</h2>
            <p>Javascript, Python, C#</p>
            <h2>Databases:</h2>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </section>

        <h1 className="recent-work-header">Check Out My Recent Work</h1>
        <p className="recent-work-p">Here are a few projects I've worked on. Looking to collaberate? <a href='/' className="recent-work-a">Reach Out.</a></p>

        <div className="recent-work">
          <div className="projects">
            <img src={digitalwealth} />
            <img src={teagram} />
            <img src={campjrnl} />
            <img src={horiseon} />
            <img src={doublerfades} />
            <img src={weatherwizard} />
          </div>
          <a className="seemore-btn" href="/form"><img src={github} />See more on Github</a>
        </div>


        <div className="startup-bg">
          <h1>My Startup Projects</h1>
          <h3>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.</h3>
          <div className="startup-container">
            <div className="startup">
              <h1>PROJECT</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>

            <div className="startup">
              <h1>SilkWave '03</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>

            <div className="startup">
              <h1>PROJECT</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>

            <div className="startup">
              <h1>PROJECT</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>

            <div className="startup">
              <h1>PROJECT</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>

            <div className="startup">
              <h1>PROJECT</h1>
              <h2>Short, focused design and growth collabs for startup tech founders.</h2>
              <div className="status">
                <p><img src={development} />in development</p>
              </div>
            </div>
          </div>

          <h4>Interested in collaborating with me?</h4>
          <h5>I am always game to discuss product design work and partnership oppurtunities.</h5>
          <a className="startup-btn" href="/form"><img src={chat} />Start a conversation</a>
        </div>
      </div>
    </div>
    
  );
};

export default Homepage;