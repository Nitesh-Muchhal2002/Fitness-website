import React from 'react'
import Card from "../UI/Card"


function Trainer({image,name,job,socials}) {
  return (
       <Card className="trainer">
         <div className="trainer_img">
            <img src={image} alt={name} />
         </div>
         <h3>{name}</h3>
         <p>{job}</p>
         <div className="trainer_socials">
            {
                socials.map(({icon,link},index)=>{
                 return <a key={index} href={link} target='_blank'>{icon}</a>
                })
            }
         </div>
       </Card>
  )
}

export default Trainer