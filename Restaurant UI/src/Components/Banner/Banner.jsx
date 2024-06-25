import React from 'react'
import { leaf, tomato, apple, kiwi, lemon, } from '../../assets/Image/Image'
import HeroButton from '../Buttons/HeroButton'

function Banner() {
    return (
        <div className='container py-14 relative'>
            <div className=''>
                <h1 className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>Taste and Healthy Difference</h1>
            </div>
            <div className='space-y-10'>
                <div className='grid gird-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit inventore soluta, aut quam assumenda non iure commodi, dolor eius explicabo quos quasi corporis nulla distinctio eligendi ducimus, harum eaque.</p>
                    </div>
                    <div></div>
                </div>
                <div className='grid gird-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit inventore soluta, aut quam assumenda non iure commodi, dolor eius explicabo quos quasi corporis nulla distinctio eligendi ducimus, harum eaque.</p>
                    </div>
                </div>
                <div className='grid gird-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit inventore soluta, aut quam assumenda non iure commodi, dolor eius explicabo quos quasi corporis nulla distinctio eligendi ducimus, harum eaque.</p>
                    </div>
                    <div></div>
                </div>
                <div className='grid gird-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit inventore soluta, aut quam assumenda non iure commodi, dolor eius explicabo quos quasi corporis nulla distinctio eligendi ducimus, harum eaque.</p>
                    </div>
                </div>
                <div className='flex justify-center mt-10 sm:mt-14'>
                    <HeroButton/>
                </div>
            </div>
            <div className='absolute top-9 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img src={leaf} alt="" className='max-w-[160px]' />
            </div>
            <div className='absolute top-[16rem] left-24 sm:-bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                <img src={tomato} alt="" className='max-w-[380px]'/>
            </div>
            <div className='absolute top-[6rem]  -right-[-190px] sm:right-10 opacity-50 sm:opacity-100'>
                <img src={lemon} alt="" className='max-w-[240px]' />
            </div>
            <div className='absolute bottom-60 right-[10rem] opacity-50 sm:bottom-60 sm:right-[10rem] sm:opacity-100'>
                <img src={apple} alt="" className='max-w-[3800px]'/>
            </div>
            <div className='absolute bottom-0 opacity-50 sm:opacity-100 sm:bottom-28'>
                <img src={kiwi} alt="" className='max-w-[380px]'/>
            </div>
        </div>
    )
}

export default Banner