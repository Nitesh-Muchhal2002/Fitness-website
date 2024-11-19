import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer logo" />
          </Link>
          <p>
            "At Fitness Hub, we are committed to empowering you on your health
            and wellness journey. From personalized workout plans to expert
            nutrition advice, our platform is designed to help you achieve your
            fitness goals with ease and confidence. Start your transformation
            today and be a part of our growing fitness community!"
          </p>
          <div className="footer_socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
             <FaLinkedinIn/>
             </a>
             <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
             <FaFacebook/>
             </a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
             <FaInstagram/>
             </a>
             <a href="https://x.com/" target="_blank" rel="noreferrer noopener">
             <FaXTwitter/>
             </a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case studies</Link>
            <Link to="/s">Trainers</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
         <article>
            <h4>Get in touch</h4>
            <Link to="/contact">Contact us</Link>
            <Link to="/s">Support</Link>
         </article>
      </div>
       <div className="footer_copyrights">
        <h4>2024 Made by Nitesh Muchhal ©️; All Rights Reserverd</h4>
       </div>
    </footer>
  );
}

export default Footer;
