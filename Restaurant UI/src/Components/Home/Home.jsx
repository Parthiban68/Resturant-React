import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import { bg } from '../../assets/Image/Image'
import Banner from '../Banner/Banner'
import WhyChoose from '../Choose/WhyChoose'
import AboutUs from '../AboutUs/AboutUs'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'


const BgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
}

const Home = () => {
    const [showPopup, setShowPopup] = useState(false)
    const handlepop = () =>{
        setShowPopup(true)
    }
     return (
        <div style={BgStyle} className='relative z-[1]'>
            <Navbar/>
            <Hero />
            <Banner/>
            <WhyChoose/>
            <AboutUs/>
            <Banner/>
            <Footer/>
            {/* <Popup showPopup={showPopup} setShowPopup={setShowPopup}/> */}
        </div>
    )
}

export default Home