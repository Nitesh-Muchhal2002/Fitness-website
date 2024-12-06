import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import {Link} from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";
function Contact() {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, expedita.
      </Header>
      <section className="container">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <Link 
              to="mailto:example@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </Link>
            <a href="" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
