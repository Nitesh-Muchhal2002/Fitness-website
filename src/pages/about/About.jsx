import React, { Children } from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css";

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        impedit, porro quaerat dignissimos placeat aliquid ex. Mollitia,
        voluptate perspiciatis?
      </Header>
      <section className="about_story">
        <div className="container about_story_container">
          <div className="about_section_image">
            <img src={StoryImage} alt="Our Story image" />
          </div>
          <div className="about_section_content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_Vision_container">
          <div className="about_section_image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
          <div className="about_section_content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            
          </div>
        </div>
      </section>


      <section className="about_Mission">
        <div className="container about_Mission_container">
         
          <div className="about_section_content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              vel architecto eum ratione alias perspiciatis veritatis in a
              explicabo sapiente, accusamus, facilis, consequatur doloribus
              eaque.
            </p>
            
          </div>
          <div className="about_section_image">
            <img src={MissionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
