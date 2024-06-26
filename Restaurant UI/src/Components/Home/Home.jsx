import React from 'react'
import Hero from '../Hero/Hero'
import { bg } from '../../assets/Image/Image'
import Banner from '../Banner/Banner'
import WhyChoose from '../Choose/WhyChoose'
import AboutUs from '../AboutUs/AboutUs'
import Navbar from '../Navbar/Navbar'


const BgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
}

const Home = () => {
    return (
        <div style={BgStyle} className='relative z-[1]'>
            <Navbar/>
            <Hero />
            <Banner/>
            <WhyChoose/>
            <AboutUs/>
        </div>
    )
}

export default Home