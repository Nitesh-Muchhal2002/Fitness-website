import React from 'react'
import {Link} from 'react-router-dom'
import {programs} from '../Data'
import Card from '../UI/Card';
import Sectionhead from './Sectionhead';

// react_icons
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";


function Programs() {
  return (
         <section className="programs">
            <div className="container programs_container">
               <Sectionhead icon={<FaCrown/>} title="Programs"/>
          
            <div className="programs_wrapper">
                {
                    programs.map(({id,icon,title,info,path})=>{
                        return (
                            <Card className="programs_program" key={id}>
                             <span>{icon}</span>
                             <h4>{title}</h4>
                             <small>{info}</small>
                             <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/></Link>
                            </Card>
                        )
                    })
                }
            </div>
            </div>
         </section>
  )
}

export default Programs