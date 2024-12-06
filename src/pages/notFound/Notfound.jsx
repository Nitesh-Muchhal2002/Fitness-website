import React from 'react'
import {Link} from 'react-router-dom'
import './notfound.css'

function Notfound() {
  return (
 <div className="container notfound_container">
    <h2>Page Not Found</h2>
     <Link to="/" className='btn'>
     Go back home</Link>
 </div>
  )
}

export default Notfound