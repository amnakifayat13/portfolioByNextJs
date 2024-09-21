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
    
        {
            Object.keys(projects).map(project => (
                <Image
                src={projects[project as keyof Projects].image}
                alt=""
                width={300}
                height={250}

             className=' mt-4 p-2'/>
            ))
        }
        </div>
      
      
      
    </section>
  )
}

export default Projects
