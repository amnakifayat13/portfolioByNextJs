
'use client'
import React from 'react'
import {headerItems, userInfo} from '../constants/constant'
import Image from 'next/image'
import {Link as ScrollLink} from 'react-scroll'

const Intro: React.FC = () => {
  return (
    <section id={headerItems.home.page}
    className="h-screen flex flex-col text-center justify-center items-center mt-4 md:flex-row md:text-start ">
      <div>
     <Image
     src={userInfo.picture}
     alt="dp"
     width={250}
     height={450}
     className="rounded-full md:shadow-2xl mt-10 sm:rounded-full"
     />
      </div>
      <div className='md:ml-20 sm:ml-12 md:w-1/2'>
      <h1 className="text-7xl uppercase hidden md:block">Web Developer</h1>
      <h1 className="text-2xl mt-5 md:text-3xl">
        Hi, I&#39;m <span className="text-purple-900 text-3xl md:text-4xl font-bold">{userInfo.userName}</span>
        </h1>
      <p className="mt-4 mb-4 ">{userInfo.heading}</p>
      <div className='flex gp-3 ml-28 sm:flex gap-4'>
      <ScrollLink
      to = {headerItems.projects.page}
      className="bg-purple-600 w-28 h-10 text-white rounded cursor-pointer flex items-center justify-center mb-3 space-between hover:bg-gray-400 hover:text-black hover:font-bold"
      spy={true}
      smooth={true}
      >
        Projects
      </ScrollLink>

      <ScrollLink
      to = {headerItems.contact.page}
      className="bg-purple-600 w-28 h-10 text-white rounded cursor-pointer flex items-center justify-center space-between hover:bg-gray-400 hover:text-black hover:font-bold"
      spy={true}
      smooth={true}
      >
        Contact
      </ScrollLink>
      </div>
      </div>
      
    </section>
  )
}

export default Intro
