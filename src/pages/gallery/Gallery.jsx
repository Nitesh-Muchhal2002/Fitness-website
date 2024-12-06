import React from "react";
import Header from "../../components/Header";
import headerImage from "../../images/header_bg_3.jpg";

import image1 from '../../images/gallery1.jpg'
import image2 from '../../images/gallery2.jpg'
import image3 from '../../images/gallery3.jpg'
import image4 from '../../images/gallery4.jpg'
import image5 from '../../images/gallery5.jpg'
import image6 from '../../images/gallery6.jpg'
import image7 from '../../images/gallery7.jpg'
import image8 from '../../images/gallery8.jpg'
import image9 from '../../images/gallery9.jpg'
import video from '../../images/vi.mp4'


import "./gallery.css";

function Gallery() {
    
         const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9]
  
  return (
    <>
    <Header title="Our Gallery" image={headerImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora qui
      recusandae quo hic vitae odit vel eveniet dolor illum.
    </Header> 
     <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image,index)=>{
             return <article key={index}>
               <img src={image} alt={`Gallery Image ${index+1}.jpg`} />

             </article>
          })
        }
     
      </div>
  
     </section>
    </>
  );
}

export default Gallery;
