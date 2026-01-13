import Link from "next/link";
import { plus } from '../font';
import { Icon } from '@iconify/react';

interface CardProps {
  header: string;
  text: string;
  image: any;
  link: any;
}

export default function Card({ header, text, image, link }: CardProps) {
  return (
    <div className="card bg-white px-2 py-2 md:py-2 rounded-md overflow-hidden">
                <Link href={link} target="_blank">
                    <img className='h-50 md:h-125 w-full object-cover hover:scale-105 rounded-lg' src={image} alt=""></img>
                        <div className="flex flex-col px-0 md:px-4 py-4 md:py-6">
                            <div className="flex flex-row justify-between uppercase mb-4">
                                <h2 className="text-black text-2xl md:text-5xl font-black">{header}</h2>
                                {/* <div className="bg-black p-2 rounded-full"><Icon className="text-white w-6 h-6 md:w-10 md:h-10 rotate-45 hover:rotate-90" icon="prime:arrow-up" /></div> */}
                            </div>
                            <div className="">   
                                <p className={`${plus.className} text-black text-justify md:text-justify text-lg md:text-lg font-normal mb-0 md:mb-2`}>
                                    {text}</p> 
                            </div>
                        </div>
                </Link>
                
            </div>
  )
}