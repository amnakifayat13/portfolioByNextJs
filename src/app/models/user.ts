import Image from 'next/image';

export interface UserObject {
    name: string,
    userName: string
    picture: string,
    heading: string,
    about: string,
    skills: Array<string>,
}