import React from 'react'
import { FaUser } from "react-icons/fa"

function AccoutButton() {
  return (
    <div>
         <button className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'><FaUser/>Signin</button>
    </div>
  )
}

export default AccoutButton