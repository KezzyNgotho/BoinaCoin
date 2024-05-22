import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faTelegram, faTiktok, faAirbnb } from '@fortawesome/free-brands-svg-icons';
import rocketImage from '../assets/lol.png';
import lockImage from '../assets/lol.png';
import smileImage from '../assets/lol.png';
import diamondImage from '../assets/lol.png';
import logoImage from '../assets/log.png';
import lol from '../assets/lol-removebg-preview.png';
import '../styles/LandingPage.scss';
import TokenomicsChart from '../components/TokenomicsChart';
const LandingScreen = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div className="landing-screen">
      <header className="header">
        <div className="logo">
          <img src={logoImage} alt="Boina Coin Logo" className="logo-image" />
        </div>
        <div className="header-content">
          <h1>Welcome to Boina Coin</h1>
          <p>The memeCoin that's taking the internet by storm!</p>
          <button className="cta-button" onClick={handleAnimation}>Join the Hype</button>
        </div>
      </header>
      <main className="main-content">
      <section className={`meme-section ${isAnimated ? 'animate-out' : 'animate-in'}`}>
  <div className="text-content">
  <h1>Welcome to BoinaCoin Community</h1>
  <p>The memeCoin that's taking the internet by storm!</p>
  <p>Discover the world of Boina Coin, where fast transactions, community engagement, and fun come together. 
    Join our growing community and be a part of the next big thing in the crypto world!</p>
    <div className="social-icons">
      <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#" className="social-icon"><FontAwesomeIcon icon={faDiscord} /></a>
      <a href="#" className="social-icon"><FontAwesomeIcon icon={faTelegram} /></a>
      <a href="#" className="social-icon"><FontAwesomeIcon icon={faTiktok} /></a>
      <a href="#" className="social-icon"><FontAwesomeIcon icon={faAirbnb} /></a>
    </div>
  </div>
  <img src={lol} alt="Boina Coin Meme" className="meme-image" />
</section>

        <section className="features-section">
          <h2>Why Boina Coin?</h2>
          <ul className="features-list">
            <li>
              <div className="feature-icon-container"><img src={rocketImage} alt="Fast Transactions" className="feature-icon" /></div>
              <span className="feature-text">Fast Transactions - Experience lightning-fast transactions that complete in seconds, ensuring you don't miss out on any opportunities.</span>
            </li>
            <li>
              <div className="feature-icon-container"><img src={diamondImage} alt="Community Driven" className="feature-icon" /></div>
              <span className="feature-text">Community Driven - Join a vibrant and passionate community of enthusiasts and influencers, where your voice matters.</span>
            </li>
            <li>
              <div className="feature-icon-container"><img src={lockImage} alt="Secure & Reliable" className="feature-icon" /></div>
              <span className="feature-text">Secure & Reliable - Rest assured with our robust and secure blockchain technology, providing peace of mind for your transactions.</span>
            </li>
            <li>
              <div className="feature-icon-container"><img src={smileImage} alt="Fun & Engaging" className="feature-icon" /></div>
              <span className="feature-text">Fun & Engaging - Participate in exciting events, challenges, and community activities to keep the fun going and create lasting memories.</span>
            </li>
          </ul>
        </section>
        <section className="tokenomics-section">
          <h2>Tokenomics</h2>
          <div className="tokenomics-row">
            <div className="tokenomics-column">
              <TokenomicsChart />
            </div>
            <div className="tokenomics-column">
              <div className="tokenomics-item">
                <h3>Total Supply</h3>
                <p>1,000,000,000 BOINA</p>
              </div>
              <div className="tokenomics-item">
                <h3>Distribution</h3>
                <ul>
                  <li>50% - Community</li>
                  <li>20% - Team</li>
                  <li>15% - Marketing</li>
                  <li>10% - Liquidity</li>
                  <li>5% - Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="roadmap-section">
          <h2>Roadmap</h2>
          <div className="roadmap-content">
            <div className="roadmap-item">
              <h3>Q1 2024: Launch and Airdrop</h3>
              <p>Kick off Boina Coin with a grand launch and exciting airdrop events to attract initial users and create a buzz in the community.</p>
            </div>
            <div className="roadmap-item">
              <h3>Q2 2024: Exchange Listings</h3>
              <p>Get Boina Coin listed on major cryptocurrency exchanges, making it accessible to a wider audience and enhancing liquidity.</p>
            </div>
            <div className="roadmap-item">
              <h3>Q3 2024: Partnership Announcements</h3>
              <p>Form strategic partnerships with key players in the industry to expand our ecosystem and bring more value to our community.</p>
            </div>
            <div className="roadmap-item">
              <h3>Q4 2024: Community Events and Giveaways</h3>
              <p>Engage with our community through fun events and generous giveaways, fostering a strong and loyal user base.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
        <h2>Our Socials</h2>
        <div className="team-members">
          <a href="https://twitter.com/YourTwitterHandle" className="social-button">
            <FontAwesomeIcon icon={faTwitter} />
            <p>X</p>
          </a>
          <a href="https://discord.gg/YourDiscordServer" className="social-button">
            <FontAwesomeIcon icon={faDiscord} />
            <p>Discord</p>
          </a>
          <a href="https://t.me/YourTelegramHandle" className="social-button">
            <FontAwesomeIcon icon={faTelegram} />
            <p>Telegram</p>
          </a>
          <a href="https://t.me/YourTelegramHandle" className="social-button">
            <FontAwesomeIcon icon={faTelegram} />
            <p>OpenChat</p>
          </a>
        </div>
      </section>
      </main>
      <footer className="footer">
        <p>© 2024 Boina Coin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingScreen;

      