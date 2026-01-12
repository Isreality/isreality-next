import Link from "next/link";
import { Icon } from '@iconify/react';

interface CardProps {
  header: string;
  text: string;
  image: any;
}

export default function Card({ header, text, image }: CardProps) {
  return (
    <div className="card bg-black px-2 py-2 md:py-2 rounded-md overflow-hidden">
                <Link href="/" target="_blank">
                    <img className='h-50 md:h-100 w-full object-cover hover:scale-105 rounded-lg' src={image} alt=""></img>
                        <div className="flex flex-row justify-between items-center px-0 md:px-2 py-4 md:py-6">
                            <div className="uppercase">
                                    <p className="text-[#646464] text-justify md:text-justify text-lg md:text-2xl font-bold mb-0 md:mb-2">{text}</p>
                                    <h2 className="text-white text-2xl md:text-5xl font-black">{header}</h2>
                            </div>
                            <div className="">   
                                <div className="bg-white p-2 rounded-full"><Icon className="text-black w-6 h-6 md:w-10 md:h-10 rotate-45 hover:rotate-90" icon="prime:arrow-up" /></div>
                            </div>
                        </div>
                </Link>
                
            </div>
  )
}