"use client"
import { Navlink } from '@/app/Constant/Constant';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';

const Nav = ({ openNav }) => {

    const [navbg,setNavbg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY > 90)setNavbg(true);
            if(window.scrollY < 90)setNavbg(false);
        };
        window.addEventListener('scroll',handler);
        return () => {
            window.removeEventListener('scroll',handler)};
      
        },[]);
  return (
    <div className={`transition-all ${navbg? "bg-amber-100 shadow-md" : "fixed"}  duration-200 w-full h-[12vh] z-100 fixed container`}>
        <div className="flex items-center justify-between W-[90%] xl:w-[80%] mx-auto h-full">
            <Link href='#'>
            <img src="/amit.png" alt="logo" className="max-w-20 max-h-20" />
            </Link>
            <div className="hidden lg:flex items-center space-x-10">
                {Navlink.map((link,index) => (
                    <Link href={link.link} key={index} className='text-black  hover:text-yellow-500 font-semibold transition-all duration-200'>
                        {link.name}
                    </Link>
                ))}

            </div>
            <div className="flex lg:gap-2 md:gap-10 items-center spyce-x-4">
                <Link href="#" className='bg-yellow-500 flex  justify-center items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-200'>
                    <BiDownload className='mr-2' />
                    Download CV  
                </Link>
                <FaMoon  className='w-8 h-8 cursor-pointer text-black'/>
                <MdOutlineMenu onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default Nav ;
