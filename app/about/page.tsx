import Link from "next/link";
import { Icon } from '@iconify/react';
import { plus } from '../font';


export default function About() {
  return (
    <div>
      {/* SERVICES */}
      <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
        <h2 className="uppercase mb-4 md:mb-16 text-black text-center md:text-center lg:text-center font-black text-4xl md:text-6xl lg:text-7xl">
          <b className="text-[#646464]">My</b> Process
        </h2>
      
        {/* Features */}
        <div>
          {/* Research */}
          <div className="bg-black flex flex-col md:flex-col lg:flex-row rounded-lg gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-white text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">01.</h2>    
              <p className="font-light">Research & Strategy</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-white w-full md:w-full lg:w-full font-light`}>
                Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
            </div>
          </div>

          {/* Ideation */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">02.</h2>    
              <p className="font-light">Concept & Ideation</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full md:w-full lg:w-full font-normal`}>
                Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">03.</h2>    
              <p className="font-light">feedback & Refinement</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full md:w-full lg:w-full font-normal`}>
                Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
            </div>
          </div>

          {/* Testing */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row  gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">04.</h2>    
              <p className="font-light">Testing & Optimization</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full font-normal`}>
                Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
            </div>
          </div>

          {/* Launch */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full md:w-full lg:w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">05.</h2>    
              <p className="font-light">Launch & Delivery</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full font-normal`}>
                Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
            </div>
          </div>
      
                  
        </div>
      </div>


    </div>
  )
}
