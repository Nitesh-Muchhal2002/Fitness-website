import React from 'react'
import Header from '../../components/MainHeader'
import './home.css'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQS from '../../components/FAQS'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

function Home() {
  return (
   <>
   <Header/>
   <Programs/>
   <Values/>
   <FAQS/>
    <Testimonials/>
    <Footer/>
   </>
  )
}

export default Home