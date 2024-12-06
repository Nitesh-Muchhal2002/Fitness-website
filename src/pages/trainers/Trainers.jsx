import React from "react";
import Header from "../../components/Header";
import HaderImage from "../../images/header_bg_5.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { links, trainers } from "../../Data";
import Trainer from "../../components/Trainer";
import "./trainer.css";
function Trainers() {
  return (
    <>
      <Header title="Our Trainers" image={HaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure
        illo fugiat impedit placeat ea sequi autem sapiente, nihil quisquam?
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id,image,name,job,socials})=>{
             return    <Trainer key={id} image={image} name={name} job={job} 
                socials={
                  [
                    {icon:<FaInstagram/>, link:socials[0]},
                    {icon:<FaXTwitter/>, link:socials[1]},
                    {icon:<FaFacebook/>, link:socials[2]},
                    {icon:<FaLinkedinIn/>, link:socials[3]},
                  ]
                }>

                </Trainer>
            })
          }
        </div>
      </section>
    </>
  );
}

export default Trainers;
