"use client"
import React from 'react'
import {headerItems, userInfo} from '../constants/constant'
import Image from 'next/image'
import {projects} from '../constants/constant'


const Projects: React.FC = () => {
  return (
    <section id={headerItems.projects.page}
    className="h-screen flex flex-col text-center justify-center items-center my-40">
     
      
      <h1 className="text-6xl my-6 ">Projects</h1>
      
      <div className="flex flex-wrap justify-center items-center text-center mt-3  break-words">
    
        <div> <Image src="/images/img2.png"
        width={400}
        height={400}
        alt=""/>
       <div className='mt-6'>
       <a
            href={"https://mudassir-offer-list.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>
       <div className='ml-4'> <Image src="/images/img3.png"
        width={400}
        height={400}
        alt=""/>
       <div className='mt-6'>
       <a
            href={"https://css-portfolio-nu.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>
       <div className='ml-4'> <Image src="/images/img4.png"
        width={400}
        height={400}
        alt=""/>
       <div className='mt-6'>
       <a
            href={"https://funforkids.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>
       <div className='mt-3'> <Image src="/images/img5.png"
        width={400}
        height={400}
        alt=""/>
       <div className='mt-6'>
       <a
            href={"https://planto-website.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>
       <div className='mt-3 ml-4'> <Image src="/images/img6.png"
        width={400}
        height={400}
        alt=""/>
       <div className='mt-6'>
       <a
            href={"https://fashionwebsite-ybzk.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-400 hover:text-black hover:font-bold "
    
          >
            Live Demo
          </a>
       </div>
       </div>

       </div>
        
     
  
      
      
      
    </section>
  )
}

export default Projects
