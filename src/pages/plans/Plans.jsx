import React from "react";
import Header from "../../components/Header";
import HederImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../Data";
import "./plans.css";
function Plans() {
  return (
    <>
      <Header title="Membership Plans" image={HederImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        obcaecati velit dolorem nemo cumque vero corporis omnis vel illo labore.
      </Header>
      <section className="plans">
        <div className="containr plans_container">
          {
            plans.map(({id,name,desc,price,features})=>{
              return <Card key={id} className="plan">
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/month</h2>
                  <h4>Features</h4>
                  {
                    features.map(({feature,available},index)=>{
                      return <p key={index} className={!available ? 'disabled':""}>
                        {feature}
                      </p>
                    })
                  }
                  <button className="btn lg">Choose Plans</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  );
}

export default Plans;
