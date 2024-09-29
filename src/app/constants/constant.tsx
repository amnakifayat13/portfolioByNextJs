import {UserObject} from '../models/user'
import {NavItems} from '../models/header'
import Image from 'next/image'

export const userInfo: UserObject = {
    name: "Portfolio",
    userName: "Amna Aftab Kifayat",
    picture: "/images/heroImage.jpeg",
    heading: 'I am a Web Developer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I have built websites, and desktop applications.',
    about: `
        I am a passionate Web Developer with a strong background in Web Development.
        My journey in IT began in 2023 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.
         I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. 
        `,
    skills: ['React', 'Next.JS', 'JavaScript', 'TypeScript', 'MongoDB', 'HTML','CSS'],
}

export const projects = {
    calculator: { image: '/images/img1.png'},
    offerList: { image: '/images/img2.png' },
    
}



export const headerItems: NavItems ={
    home: {label: "Home", page: "home"},
    about: {label: "About", page: "about"},
    projects: {label: "Projects", page: "projects"},
    contact: {label: "Contact", page: "contact"}
}