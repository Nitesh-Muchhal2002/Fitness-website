import React, { useState } from "react";
import { toast } from "react-toastify";
import bmiImage from '../../images/bmi.jpg'
import './bmi.css'
function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const [bmi, setBmi] = useState("");
  
    const calculation = (e) => {
      e.preventDefault();
      if (!height || !weight || !gender) {
        toast.error("Please enter valid height ,weight and gender");
        return;
      }
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
      setBmi(bmiValue);
  
      if (bmiValue < 18.5) {
        toast.warning(
          "You are underweight.Consider seeking advice from a healthcare provider"
        );
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        toast.success(
          "You have normal weight: keep maintaing a healthy lifestyle"
        );
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        toast.success(
          "You are overweight: Consider seeking advice from a healthcare provider"
        );
      } else {
        toast.error("You are in obese range");
      }
    };
     const arr =["hello","hoo","bye"]
    return ( 
      <section className="bmi container" >
        <h1>BMI CALCULATOR</h1>
        <div className="container1">
          <div className="wrapper">
            <form onSubmit={calculation}>
              <div>
                <label>Height(cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <label>Weight(kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label>Gender</label>
                 <select value={gender} 
                 onChange={(e)=>setGender(e.target.value)}>
                   <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                 </select>
              </div>
              <button type="submit">Calculate BMI:</button>
              <h3>Your BMI is :{bmi}</h3>
            </form>
          </div>
          <div className="wrapper">
            <img src={bmiImage} alt="bmiImage" />
          </div>
        </div>
      
      </section>
      
    );
}

export default Bmi