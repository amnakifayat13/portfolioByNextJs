import React from 'react'
import Intro from '../components/intro'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/contact'

const Main: React.FunctionComponent = () => {
  return (
    <div className="lg:mx-32 md:mx-4">
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default Main
