// import React from 'react';
// import bannerImage from "../images/Banner.jpg";
// import sideImage from "../images/Image-3.png";
// import '../css/About.css'; 

// const About = () => (
//   <div className="about-container">
//     <div className="about-banner">
//       <img src={bannerImage} alt="About Us Banner" className="banner-image" />
//       <div className="banner-text">
//         <h1>About Us</h1>
//       </div>
//     </div>
//     <div className="about-content">
//       <div className="side-by-side">
//         <img src={sideImage} alt="Side Image" className="side-image" />
//         <div className="side-text">
//           <h2>We promise you the <h2 className='best'>BEST</h2></h2>
//           <p>Daiki Lanka is an established company in Sri Lanka since 2010. We already get employed 140 Sri Lankans (100 trainees and 40 engineers) in Japan. We are the one and only consulting service in Sri Lanka who own Japanese Language School in Japan.</p>
//         </div>
//       </div>
//       <div className="advice-section">
//         <h2>Advice !</h2>
//         <p>Best advice we can give you is you must learn Japanese before you start your career in Japan.</p>
//       </div>
//     </div>
//   </div>
// );

// export default About;

import React from 'react';
import bannerImage from "../images/Banner.jpg";
import sideImage from "../images/Image-3.png";
import YosukeNakamura from "../images/Yosuke Nakamura.jpeg"; // Replace with actual path
import SoichiroMine from "../images/Soichiro Mine.jpeg"; // Replace with actual path
import RanilNimalasena from "../images/Ranil Nimalasena.jpg"; // Replace with actual path
import MALSandaruwan from "../images/M.A.L. Sandaruwan.jpeg"; // Replace with actual path
import AASirisena from "../images/A.A. Sirisena.png";
import SamanDeSilva from "../images/Saman De Silva.jpg";
import AkilaDulanjali from "../images/AkilaDulanjali.png";
import MSAMadhushani from "../images/MSAMadhushani.png";
import '../css/About.css';

const About = () => (
  <div className="about-container">
    <div className="about-banner">
      <img src={bannerImage} alt="About Us Banner" className="banner-image" />
      <div className="banner-text">
        <h1>About Us</h1>
      </div>
    </div>
    <div className="about-content">
      <div className="side-by-side">
        <img src={sideImage} alt="Side Image" className="side-image" />
        <div className="side-text">
          <h2>We promise you the <h2 className='best'>BEST</h2></h2>
          <p>Daiki Lanka is an established company in Sri Lanka since 2010. We already get employed 140 Sri Lankans (100 trainees and 40 engineers) in Japan. We are the one and only consulting service in Sri Lanka who own Japanese Language School in Japan.</p>
        </div>
      </div>
      <div className="advice-section">
        <h2>Advice !</h2>
        <p>Best advice we can give you is you must learn Japanese before you start your career in Japan.</p>
      </div>
    </div>
    <div className="full-width-background">
      <div className="administration-section">
        <h2>Our Team</h2>
        <div className="administration-grid">
          <div className="admin-card">
            <div className="admin-image-container"> <img src={YosukeNakamura} alt="Yosuke Nakamura" className="admin-image" /></div>
            <h3>Yosuke Nakamura</h3>
            <p>Managing Director <br />Daiki Lanka (PVT) Ltd</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container"><img src={SoichiroMine} alt="Soichiro Mine" className="admin-image" /> </div>

            <h3>Soichiro Mine</h3>
            <p>Manager <br />Daiki Lanka (PVT) Ltd</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container"><img src={RanilNimalasena} alt="Ranil Nimalasena" className="admin-image" /> </div>

            <h3>Ranil Nimalasena</h3>
            <p>Manager <br />Daiki Lanka (PVT) Ltd.</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container">   <img src={MALSandaruwan} alt="M.A.L.Sandaruwan" className="admin-image" /> </div>

            <h3>M.A.L.Sandaruwan</h3>
            <p>Accountant <br />Daiki Lanka (PVT) Ltd.</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container">   <img src={AASirisena} alt="A.A. Sirisena" className="admin-image" /> </div>

            <h3>A.A. Sirisena</h3>
            <p>Financial Adviser <br />Daiki Lanka (PVT) Ltd.</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container">   <img src={SamanDeSilva} alt="Saman De Silva" className="admin-image" /> </div>

            <h3>Saman De Silva</h3>
            <p>Legal Adviser <br />Daiki Lanka (PVT) Ltd.</p>
          </div>
        </div>
      </div>
    </div>
    <div >
      <div className="Teacher-section">
        <h2>Meet Our Best Teachers</h2>
        <div className="administration-grid">
          <div className="admin-card">
            <div className="admin-image-container"> <img src={AkilaDulanjali} alt="Akila Dulanjali" className="admin-image" /></div>
            <h3>Akila Dulanjali</h3>
            <p>Japanese Lecturer <br />Daiki Lanka (PVT) Ltd</p>
          </div>
          <div className="admin-card">
            <div className="admin-image-container"><img src={MSAMadhushani} alt="M.S.A. Madhushani" className="admin-image" /> </div>
            <h3>M.S.A. Madhushani</h3>
            <p>Japanese Lecturer <br />Daiki Lanka (PVT) Ltd</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
