import React from 'react'
import { FaArrowRight } from "react-icons/fa"
function HeroButton() {
  return (
    <div  className='flex items-center group'>
        <button className='bg-primary px-3 py-2 h-[40px] text-white'>
            Choose the food
            </button>
            <FaArrowRight className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primary text-white"/>
    </div>
  )
}

export default HeroButton