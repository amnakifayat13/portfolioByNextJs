
'use client'
import React from 'react'
import {headerItems, userInfo} from '../constants/constant'
import Image from 'next/image'
import {Link as ScrollLink} from 'react-scroll'

const Contact: React.FC = () => {
  return (
    <section id={headerItems.contact.page}
    className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
      <div>
     <Image
     src={userInfo.picture}
     alt="dp"
     width={250}
     height={450}
     className="rounded-full md:shadow-2xl mt-10"
     />
      </div>
      <div className='md:ml-20 sm:ml-12 md:w-1/2 text-xl'>
      <h1 className="text-7xl uppercase hidden md:block">Contact</h1>
      <p className='mt-6'> <b>Email:</b> hayatullahamna@gmail.com</p>
      <p><b>Email:</b> aftabamna13@gmail.com</p>
      <p><b> Whatsapp:</b> 0316-2391694</p>
      <p><b>Phone No:</b> 0316-2391694</p>
      <p> <b>LinkedIn:</b> https://www.linkedin.com/in/amna-aftab-kifayat-81a5822b7/</p>
      
      </div>
      
    </section>
  )
}

export default Contact
