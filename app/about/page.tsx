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
                We start by understanding your business, goals, and target audience. This phase includes research, competitor analysis, and defining the project scope to ensure a clear direction.</p>
            </div>
          </div>

          {/* Ideation */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">02.</h2>    
              <p className="font-light">Ideation</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full md:w-full lg:w-full font-normal`}>
                Here, I brainstorm and develop creative concepts that align with your vision. Initial sketches and ideas are refined into tangible wireframes, setting the direction for design and functionality.</p>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">03.</h2>    
              <p className="font-light">Design</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full font-normal`}>
                This is where your website comes to life. Using your brand identity, I design a visually compelling interface with the perfect balance of aesthetics and usability.</p>
            </div>
          </div>

          {/* Testing */}
          <div className="bg-white flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
            <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full mb-2 md:mb-2 lg:mb-0">
              <h2 className="font-black">04.</h2>    
              <p className="font-light">Development</p>
            </div>
        
            <div className="">
              <p className={`${plus.className} text-sm md:text-lg text-black w-full font-normal`}>
                Once the design is approved, I build your website using modern, responsive technologies. I ensure that it’s optimized for speed, SEO, and a flawless user experience across all devices.</p>
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
                Once everything is finalized, the project is launched and delivered to you. I also provide guidance or support for ongoing maintenance to ensure long-term success.</p>
            </div>
          </div>           
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
        <h2 className="uppercase mb-4 md:mb-16 text-black text-center md:text-center lg:text-center font-black text-4xl md:text-6xl lg:text-7xl">
          <b className="text-[#646464]">Tech</b> Stack
        </h2>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-2 md:gap-5">
          {/* Figma */}
          <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-10 rounded-lg items-center">
            <div className="">
              <Icon icon="skill-icons:figma-dark" className="w-16 h-16 md:w-20 md:h-20" />    
            </div>
      
            <div className="">
              <h2 className="uppercase text-2xl md:text-3xl text-black font-black mb-0 md:mb-2">Figma</h2>
              <p className="uppercase text-xl md:text-3xl text-black font-light">+2348140082953</p>
            </div>  
          </div>

          {/* Github */}
          <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-10 rounded-lg items-center">
            <div className="">
              <Icon icon="logos:github-icon" className="w-16 h-16 md:w-20 md:h-20" />    
            </div>
      
            <div className="">
              <h2 className="uppercase text-2xl md:text-3xl text-black font-black mb-0 md:mb-2">Github</h2>
              <p className="text-xl md:text-3xl text-black font-light">isrealitycreations@gmail.com</p>
            </div>  
          </div>

          {/* Photoshop */}
          <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-10 rounded-lg items-center">
            <div className="">
              <Icon icon="devicon:photoshop" className="w-16 h-16 md:w-20 md:h-20" />    
            </div>
      
            <div className="">
              <h2 className="uppercase text-2xl md:text-3xl text-black font-black mb-0 md:mb-2">Photoshop</h2>
              <p className="text-xl md:text-3xl text-black font-light">isrealitycreations@gmail.com</p>
            </div>  
          </div>

          {/* Illustrator */}
          <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-10 rounded-lg items-center">
            <div className="">
              <Icon icon="skill-icons:illustrator" className="w-16 h-16 md:w-20 md:h-20" />    
            </div>
      
            <div className="">
              <h2 className="uppercase text-2xl md:text-3xl text-black font-black mb-0 md:mb-2">Illustrator</h2>
              <p className="text-xl md:text-3xl text-black font-light">isrealitycreations@gmail.com</p>
            </div>  
          </div>

        </div>
      </div>

      


    </div>
  )
}
