import React from 'react'
import { link,dropdown } from '../../utils/link'
import { FaCaretDown } from "react-icons/fa"
import AccoutButton from '../Buttons/AccoutButton'

function Navbar() {
  return (
    <div data-aos="fade-down" data-aos-delay="500" className='bg-white shadow-md'>
        <div className='container flex justify-between py-4 sm:py-3'>
            <div className='font-bold'>
                Logo
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {link.map((links)=>(
                        <li key={links.id}>
                            <a href={links.path} className='inline-block hover:text-primary text-xl font-semibold'>{links.name}</a>
                        </li>
                    ))}

                    <li className='cursor-pointer group'>
                        <a href="/#" className='inline-block hover:text-primary text-xl font-semibold'>
                        <div className='flex items-center gap-[2px] py-2'>
                        Cateogory<span><FaCaretDown className='group-hover:rotate-180 duration-300'/></span>
                        </div>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md rounded-md p-3'>
                            <ul>
                                {dropdown.map((data)=>(
                                    <li key={data.id}>
                                        <a href={data.path} className='text-xl inline-block w-full rounded-md p-2 xl:py-5 hover:bg-primary/20'>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <AccoutButton/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar