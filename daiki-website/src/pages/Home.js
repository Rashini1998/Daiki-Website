import React, { useEffect, useRef, useState } from 'react';
import '../css/Home.css';
import bannerImage from "../images/Banner.jpg";
import engineers from "../images/daiki_engineers.jpg";
import introImage from "../images/Image-2.png";
import englishNotice from "../images/study-and-work-in-japan2_orig.jpg";
import sinhalaNOtice from "../images/study-and-work-in-japan_1_orig.jpg";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const fadeInRef = useRef([]);

  const handleCardClick = (card) => {
    setSelectedCard(selectedCard === card ? null : card);
  };

  const handleScroll = () => {
    fadeInRef.current.forEach((element) => {
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text fade-in" ref={(el) => fadeInRef.current.push(el)}>
          <div className='banner-text-main'>
            DAIKI JAPANESE STUDIES
          </div>
          <div className='banner-text-container'>
            <div className="banner-text-small">
              BRIDGE TO JAPAN
            </div>
            <div className="banner-text-small">
              日本への掛け橋
            </div>
          </div>
        </div>
      </div>
      <div className="company-description fade-in" ref={(el) => fadeInRef.current.push(el)}>
        <div className="company-description-text">
          <h2>Welcome to Daiki Japanese Studies</h2>
          <p>Japan is a prosperous country and has the most diverse economy in Asia. The leading Japanese companies are among the largest, most efficiently run, and most well-known firms in the world. Familiar names like Sony, Toshiba, Sanyo, Casio, Canon, Minolta, Honda, Toyota, Mitsubishi, and many others have infiltrated the world market in a variety of sectors.</p>
          <p>Whether you're in the field of business, engineering, manufacturing, research, economics, or politics, chances are you will be competing with, if not working for, a Japanese entity.</p>
        </div>
        <div className="company-description-image">
          <img src={introImage} alt="Company" className="fade-in" ref={(el) => fadeInRef.current.push(el)} />
        </div>
      </div>
      <div className="youtube-section fade-in" ref={(el) => fadeInRef.current.push(el)}>
        <div className="youtube-background"></div>
        <div className="youtube-overlay"></div>
        <div className="youtube-content">
          <h2>Daiki Lanka Japanese Institute</h2>
          <p>Explore our videos to learn more about our activities, events, and the services we offer. Stay updated with our latest content and get insights into Japanese studies and more.</p>
          <a href="https://www.youtube.com/@daikilankajapaneseinstitut4171" target="_blank" rel="noopener noreferrer" className="youtube-link">Watch Now</a>
        </div>
      </div>
      <div className="cards-section fade-in" ref={(el) => fadeInRef.current.push(el)}>
        <h2 className="cards-section-title">Our Programs</h2>
        <div className="cards-container">
          <div className="card" onClick={() => handleCardClick('students')}>
            <img src={engineers} className='card-img-top' alt='Daiki Students' />
            <div className="card-body">
              <h3 className='card-title'>Daiki Students</h3>
            </div>
          </div>
          <div className="card" onClick={() => handleCardClick('engineers')}>
            <img src={engineers} className='card-img-top' alt='Daiki Engineers' />
            <div className="card-body">
              <h3 className='card-title'>Daiki Engineers</h3>
            </div>
          </div>
        </div>
      </div>

      {selectedCard === 'students' && (
        <div className="card-content fade-in" ref={(el) => fadeInRef.current.push(el)}>
          <h2>Daiki Students</h2>
          <p>We have our own Japanese Language School in Tokyo. Daiki Group of Japan established Daiki Japanese Language School Tokyo in Shiba, Minato-ku, Tokyo. We route students to Tokyo who willing to learn Japanese Language in Daiki Japanese Language School Tokyo in Japan.</p>
          <h4>Requirements</h4>
          <ol>
            <li>A/Levels</li>
            <li>NAT 5 (We conduct classes)</li>
            <li>(18-28) Age Limit</li>
          </ol>
        </div>
      )}
      {selectedCard === 'engineers' && (
        <div className="card-content fade-in" ref={(el) => fadeInRef.current.push(el)}>
          <h2>Daiki Engineers</h2>
          <p>We create opportunities for Engineers who willing to work in Japan as Daiki Engineers. People who have B.Sc, degree from recognized university can easily be Daiki Engineer in Japan.</p>
          <h4>Requirements</h4>
          <ol>
            <li>B.Sc. Degree</li>
            <li>NAT 2 (We conduct classes)</li>
            <li>(18-28) Age Limit</li>
          </ol>
        </div>
      )}
      <div className="images-row fade-in" ref={(el) => fadeInRef.current.push(el)}>
        <img src={englishNotice} alt="English Notice" className="image" />
        <img src={sinhalaNOtice} alt="Sinhala Notice" className="image" />
      </div>
      <div className="more-videos fade-in" ref={(el) => fadeInRef.current.push(el)}>
        <h2>More Videos</h2>
        <div className="videos-row">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/5J412cXeQ5g?si=qRak0_X9yu53CohR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/JPR8ZkwpNcU?si=hHNSyzSxfQ0_UHUg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/4esb5bFweiA?si=LBgVnu9TwefX_7Vz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
