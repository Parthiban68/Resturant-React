import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <div>
            <div  className='text-white mt-20'>
                <div data-aos="fade-right" data-aos-delay="300" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
                    <div>
                        <h1 className='py-10 text-3xl font-semibold text-center text-yellow'> Contact Us</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                            <div data-aos="fade-right" data-aos-delay="600" className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <IoLocationSharp className='text-5xl ' />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Ab rerum sit corrupti dolor voluptates doloribus,
                                    quos veritatis animi
                                </p>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="900" className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <MdEmail className='text-5xl ' />
                                </div>
                                <p>hr@gmail.com</p>
                                <p>info@gmail.com</p>
                            </div>
                            <div data-aos="fade-right" data-aos-delay="1200" className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <FaPhone className='text-5xl ' />
                                </div>
                                <p>+91 6379780905</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between p-4 items-center'>
                        <p>@ 2024 TCJ. All rights reserved</p>
                        <div className='flex items-center gap-6'>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer