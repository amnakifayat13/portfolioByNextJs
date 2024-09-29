'use client'
import React, {useState} from 'react'
import  { userInfo, headerItems}  from '../constants/constant';
import {NavItems} from '../models/header'
import { BiMenu } from "react-icons/bi";
import {Link as ScrollLink} from 'react-scroll' 

const Header: React.FC = () => {
  const [navItem, showNavItems] = useState<boolean>(false);
  return (
    <header className='bg-white p-6 md:flex justify-between w-full fixed top-0 z-10'>
        <div className="flex justify-between">
            <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
            <BiMenu 
            size={30}
            className="md:hidden"
            onClick={() => showNavItems(prevState => !prevState)}
            />

        </div>
        <div className={`mr-8 md:space-x-6 mt-6 md:mt-0  md:block ${navItem ? 'block' : 'hidden hover:text-purple-600 hover:font-extrabold'}`}>
          {
            Object.keys(headerItems).map(item => (
              <ScrollLink
              to = {headerItems[item as keyof NavItems].page}
              key={headerItems[item as keyof NavItems].label}
              className=" block md:inline-block cursor-pointer"
              spy={true}
              smooth={true}
              >
                
                {headerItems[item as keyof NavItems].label}
                </ScrollLink>
            ))
          }

        </div>
      
    </header>
  )
}

export default Header
