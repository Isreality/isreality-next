import Link from "next/link";
import { Icon } from '@iconify/react';
import { plus } from '../font';

interface ExpProps {
  title: string;
  name: string;
  date: string;
}

export default function Btn({ title, name, date}: ExpProps) {
  return (
    <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-0 px-4 md:px-2 py-8 md:py-8 border-b-2 items-center justify-between">
        <div className="text-black mb-2 md:mb-2 lg:mb-0">
            <h2 className="uppercase font-black text-2xl md:text-4xl">{title}</h2>    
            <p className={`${plus.className} font-normal text-base md:text-2xl`}>{name}</p>
        </div>
            
        <div className="">
            <p className={`${plus.className} text-sm md:text-lg text-left text-black font-normal`}>
            {date}</p>
        </div>
    </div> 
  )
}