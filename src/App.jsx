import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import NotFound from './pages/notFound/Notfound'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bmi from './pages/Bmi/Bmi'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
       <Route index element = {<Home/>}/>
      <Route path='about' element={<About/>}/>
       <Route path='contact' element ={<Contact/>}/>
       <Route path='gallery' element ={<Gallery/>}/>
       <Route path="plans"  element ={<Plans/>}/>
       <Route path='trainers' element ={<Trainers/>}/>
       <Route path ='bmi' element={<Bmi/>}/>
       <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App