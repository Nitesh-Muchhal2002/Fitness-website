import React from 'react'

function Sectionhead({icon,title,className}) {
  return   <div className={`section_head ${className}`}>
    <span>{icon}</span>
    <h2>{title}</h2>
   </div>
  
}

export default Sectionhead