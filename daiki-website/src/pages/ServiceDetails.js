import React from 'react';
import { useParams } from 'react-router-dom';
import serviceImage1 from '../images/software-image_1.jpg';
import serviceImage3 from '../images/poster1_orig.jpg';
import studyInJapan_01 from "../images/daiki-jps-school_orig.png";
import '../css/ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    service1: {
      title: "Consulting to Build Your ​Career​ in​ Japan",
      description: "We are representing Daiki Group of Japan in Sri Lanka. Being a bridge between Sri Lanka and Japan we found number of similarities and differences in both countries. As a result of that we were able to create opportunities for Sri Lankans who willing to learn/work in Japan.",
      imgSrc: serviceImage1,
    },
    service2: {
      title: "Daiki Japanese Language School​ Tokyo",
      description: [
        "Our school aims to educate foreign students wishing to further their aspirations at universities, collages and professional training schools in Japan with a focus on Japanese Language, Japanese culture. In addition, school provides career guidance according to each student's goals.",

        "Outputs:",
        "1. Qualify to enter institutions of higher education such as universities, colleges and professional training colleges.",
        "2. Success in Japanese Language Proficiency Tests (JLPT/NAT)",
        "3. Success in qualification tests",
        "4. World-class human resources development for employment purpose",
      ],
      imgSrc: studyInJapan_01,
    },
    service3: {
      title: "Daiki Engineering Co. Ltd.",
      description: ["Provides the latest technologies to various manufactures including Automobiles, Ships, Air Crafts and all IT services",

        "Head Office : Hiroshima",
        "Branches : Tokyo, Tokai, Osaka, Tohoku, Nagasaki, Fukuoka",
        
        "Clients : Toyota, Mitsubishi, Hitachi, IHI, Kawasaki, Mazda, etc."],
      imgSrc: serviceImage3,
    },
  };

  const service = serviceDetails[serviceId] || {};

  return (
    <div className="container">
      {service.title ? (
        <div>
          <h1 className="service-title">{service.title}</h1>
          <div className="service-image-container">
            <img src={service.imgSrc} alt={service.title} className="img-fluid" />
          </div>
          {Array.isArray(service.description) ? (
            <div className="service-description">
              {service.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="service-description">{service.description}</p>
          )}
        </div>
      ) : (
        <p>Service not found.</p>
      )}
    </div>
  );
};

export default ServiceDetails;
