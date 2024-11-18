import React from "react";
import Sectionhead from "./Sectionhead";

import Image from "../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../Data";
import Card from "../UI/Card";

function Values() {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
            <div className="values_image">
            <img src={Image} alt="values image" />
            </div>

        </div>
        <div className="values_right">
          <Sectionhead icon={<GiCutDiamond />} title="Values" />
          <p>
          
         "Our Core Values: Empowering Your Fitness Journey"
          </p>
          <div className="values_wrapper">
            {
                values.map(({id,icon,title,desc})=>{
                    return (
                        <Card className="values_value" key={id}>
                          <span>{icon}</span>
                          <h4>{title}</h4>
                          <small>{desc}</small>
                        </Card>
                    )
                })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
