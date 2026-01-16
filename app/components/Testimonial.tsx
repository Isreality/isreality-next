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
    <div className="card bg-[#121111] px-8 py-8 md:py-16 rounded-md grid justify-items-start">
        <div className="flex justify-start items-center gap-3">
            <img className='h-20 w-20 rounded-full object-cover' src={image} alt=""></img>
            <div className="grid justify-items-start">
                <p className="uppercase text-white text-left text-base md:text-xl font-bold">{name}</p>
                <p className="uppercase text-white text-left text-base md:text-xl font-light">{role}</p> 
            </div>                    
        </div><br/>
        
        <p className={`${plus.className} text-white text-sm md:text-base text-left md:text-justify`}>{text}</p>                   
    </div>
  )
}