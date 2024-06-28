import React from 'react';
import { hero } from '../../assets/Image/Image';
import HeroButton from '../Buttons/HeroButton';

function Hero() {
  return (
    <div className='relative z-[-1]'>
        <div className="container py-16 sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 data-aos="fade-left" className='text-5xl'>Fresh & Healthy mela plan <span className='text-primary font-cursive text-7xl '>Delivery</span> in Miami</h1>
                        <p data-aos="fade-left" data-aos-delay="300" className='lg:pr-64 '>Delicious Meals Delivered to your Door Step</p>
                        <div data-aos="fade-left" data-aos-delay="500">
                            <HeroButton/>
                        </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="500" className='relative z-30 '>
                    <img src={hero} alt="" className='w-full sm:scale-100 sm:translate-y-1' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero