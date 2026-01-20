import Link from "next/link";
import { Icon } from '@iconify/react';
import { plus } from '../font';

interface CardProps {
  name: string;
  role: string;
  text: string;
  image: any;
}

export default function Testimonial({ name, role, text, image }: CardProps) {
  return (
    <div className="card bg-[#121111] px-8 py-8 md:py-12 rounded-md grid justify-items-start">
        <div className="flex justify-start items-center gap-3 mb-2 md:mb-4">
            <img className='w-10 h-10 md:h-20 md:w-20 rounded-full object-cover' src={image} alt=""></img>
            <div className="grid justify-items-start">
                <p className="uppercase text-white text-left text-xl md:text-4xl font-bold">{name}</p>
                <p className={`${plus.className} font-normal text-sm md:text-xl text-white`}>{role}</p> 
            </div>                    
        </div>
        
        <p className={`${plus.className} text-white text-xs md:text-base text-left md:text-justify font-light`}>{text}</p>                   
    </div>
  )
}