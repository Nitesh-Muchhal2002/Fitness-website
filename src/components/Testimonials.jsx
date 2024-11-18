import React, { useState } from 'react'
import Sectionhead from './Sectionhead'
import { ImQuotesLeft } from "react-icons/im";
import Card from '../UI/Card'
import { IoIosArrowDroprightCircle ,IoIosArrowDropleftCircle} from "react-icons/io";
import { testimonials } from '../Data';

function Testimonials() {
    const[index,setIndex] = useState(0)
    const {name,quote,job,avatar} = testimonials[index];
  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <Sectionhead icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="testimonial">
                  <div className="tesimonial_avatar">
                    <img src={avatar} alt="" />
                  </div>
                  <p className='testimonial_quote'>
                    {`"${quote}`}
                  </p>
                  <h5>{name}</h5>
                  <small className="testimonial_title">{job}</small>
            </Card>
        </div>
    </section>
  )
}

export default Testimonials