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
    <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-0 md:gap-0 lg:gap-0 px-2 md:px-2 py-4 md:py-8 border-b items-start md:items-start lg:items-center justify-between">
        <div className="text-black mb-0 md:mb-2 lg:mb-0">
            <h2 className="uppercase font-normal text-2xl md:text-4xl">{title}</h2>    
            <p className={`${plus.className} font-normal text-base md:text-2xl text-black`}>{name}</p>
        </div>
            
        <div className="">
            <p className={`${plus.className} text-sm md:text-lg lg:text-lg 2xl:text-2xl text-left font-normal`}>
            {date}</p>
        </div>
    </div> 
  )
}