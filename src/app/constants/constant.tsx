import {UserObject} from '../models/user'
import {NavItems} from '../models/header'
import Image from 'next/image'

export const userInfo: UserObject = {
    name: "Portfolio",
    userName: "Amna Aftab Kifayat",
    picture: "/images/heroImage.jpeg",
    heading: 'I am a passionate web developer with a focus on buildingresponsive user-friendly, and efficient websites and web applications. My expertise spans across modern JavaScript frameworks like React and Next.js, along with solid experience in backend development with Node.js and databases.',
    about: `
        I'm a passionate web developer dedicated to crafting
                             high-quality, engaging digital experiences. With a 
                             strong foundation in front-end and back-end technologies,
                              I enjoy building responsive and interactive websites that
                               blend creativity with functionality. From user-friendly
                               interfaces to robust server-side applications, I focus
                                on delivering solutions that not only meet user needs 
                                but also enhance business goals. I'm constantly learning
                                 and experimenting with the latest web technologies,
                                 ensuring my skills stay at the cutting edge. Let's
                                  work together to bring your vision to life on the web!
        `,
    skills: ['React', 'Next.JS', 'JavaScript', 'TypeScript', 'MongoDB', 'HTML','CSS'],
}

export const projects = {
    calculator: { image: '/images/img1.png '},
    offerList: { image: '/images/img2.png' },
    
}



export const headerItems: NavItems ={
    home: {label: "Home", page: "home"},
    about: {label: "About", page: "about"},
    projects: {label: "Projects", page: "projects"},
    contact: {label: "Contact", page: "contact"}
}