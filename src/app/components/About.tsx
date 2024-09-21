import React from 'react'
import {headerItems, userInfo} from '../constants/constant'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section id={headerItems.about.page}
    className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">
     
      <div className=' m-4 md:ml-20 sm:ml-12 md:w-1/2'>
      <h1 className="text-6xl my-6 ">About</h1>
      <h2 className="text-2xl mt-5 md:text-3xl">
    <span className="text-purple-900 text-3xl my-4 font-bold">Get to know me!</span>
        </h2>
      <p className="mt-4 mb-4 ">{userInfo.about}</p>
      
      </div>
      <div className="flex flex-col justify-center items-center text-center">
     <Image
     src={userInfo.picture}
     alt="dp"
     width={250}
     height={450}
     className="m-auto"
     />
     <div className="mt-3 w-3/4 break-words">
        {
            userInfo.skills.map(skill => (
             <span className='bg-gray-200 m-1 p-2 text-sm inline-block rounded-md'>{skill}</span>
            ))
        }
        </div>
      </div>
      
      
    </section>
  )
}

export default About
