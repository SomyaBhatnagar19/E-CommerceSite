import React from "react";
import "./Footer.css";
import { Image } from "react-bootstrap";
import instagram from '../Images/instagram.png';
import facebook from '../Images/facebook.png';
import linkedin from '../Images/linkedin.png';
import youtube from '../Images/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2023 The Generics. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Image
                src={instagram}
                alt="instagram"
                className="icon"
              />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Image
                src={facebook}
                alt="facebook"
                className="icon"
              />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Image
                src={linkedin}
                alt="linkedin"
                className="icon"
              />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <Image
                src={youtube}
                alt="youtube"
                className="icon"
              />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
