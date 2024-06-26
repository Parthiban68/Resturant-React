import React from 'react'
import { FaBus } from 'react-icons/fa'
function WhyChoose() {
    return (
        <div>
            <div className='py-14 md:py-28'>
                <div className='container'>
                    <h1 data-aos='fade-up' data-aos-delay="300" className='py-4 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4 py-20'>
                            <div data-aos='fade-up' data-aos-delay="400" className='text-center flex justify-center items-center flex-col gap-3 px-2'>
                                <p className='text-dark./70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>....</p>
                                <FaBus className='text-5xl text-secondary' />
                            </div>
                            <div data-aos='fade-up' data-aos-delay="600" className='text-center flex justify-center items-center flex-col gap-3 px-2'>
                                <FaBus className='text-5xl text-primary' />
                                <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>....</p>
                                <p className='text-dark./70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="800" className='text-center flex justify-center items-center flex-col gap-3 px-2'>
                                <p className='text-dark./70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>....</p>
                                <FaBus className='text-5xl text-secondary' />
                            </div>
                            <div data-aos='fade-up' data-aos-delay="1000" className='text-center flex justify-center items-center flex-col gap-3 px-2'>
                                <FaBus className='text-5xl text-primary' />
                                <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>....</p>
                                <p className='text-dark./70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose