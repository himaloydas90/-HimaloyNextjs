import React from 'react'
import { Navlink } from '@/app/Constant/Constant';
import Link from 'next/link'
import { RxCross2 } from 'react-icons/rx';

const MobileNav = ({ showNav, closeNav }) => {
  const slidevarOpenClose = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      <div className={` ${slidevarOpenClose} fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-90 w-full h-screen`}>
        <div className={`${slidevarOpenClose} text-white flex flex-col fixed h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-green-300 space-y-6 z-1050`}>
           {Navlink.map((link,index) => (
                    <Link href={link.link} key={index} className='text-black  hover:text-yellow-500 font-semibold transition-all duration-200 text-2xl text-center'>
                        <p className='text-blue-600 w-fit text-lg ml-5 sm:text-3xl'>{link.name}</p>
                    </Link>
                ))} 
                <RxCross2 onClick={closeNav} className='w-8 h-8 cursor-pointer text-white absolute top-5 right-5' />
        </div>
      </div>
    
    </div>
  )
}

export default MobileNav;
