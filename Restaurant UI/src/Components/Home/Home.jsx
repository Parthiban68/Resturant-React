import React from 'react'
import Hero from '../Hero/Hero'
import { bg } from '../../assets/Image/Image'
import Banner from '../Banner/Banner'


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
            <Hero />
            <Banner/>
        </div>
    )
}

export default Home