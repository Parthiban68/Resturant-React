import { useEffect, useState } from 'react'
import Home from './Components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
 useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
  });
  AOS .refresh();
 },[])
  return (
    <div className='overflow-x-hidden'>
      <Home/>
    </div>
  )
}

export default App
