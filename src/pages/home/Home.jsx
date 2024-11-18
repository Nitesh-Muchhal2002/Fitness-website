import React from 'react'
import Header from '../../components/MainHeader'
import './home.css'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQS from '../../components/FAQS'

function Home() {
  return (
   <>
   <Header/>
   <Programs/>
   <Values/>
   <FAQS/>
   </>
  )
}

export default Home