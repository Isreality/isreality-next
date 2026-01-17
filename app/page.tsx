import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { plus } from './font';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { Icon } from '@iconify/react';
import Testimonial from "./components/Testimonial";
import Btn from "./components/Btn";
import Btn2 from "./components/Btn2";

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <div className="gap-0 ">

            {/* Content */}
            <div className=" flex flex-col md:flex-col lg:flex-row items-center -mt-30 md:-mt-30 lg:-mt-30">
              <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20 mt-30 gap-0">
                  <h2 className="text-black text-center md:text-center lg:text-left font-black text-6xl md:text-8xl lg:text-9xl mt-8 md:mt-8 lg:mt-0">
                    ISRAEL AGBAJE
                  </h2><br/>

                  <h1 className={`${plus.className} text-black text-sm md:text-lg lg:text-xl text-center md:text-center lg:text-left w-full font-regular`}>
                    A Brand Designer, Design Engineer and Illustrator, dedicated to crafting beautiful and functional digital experiences.
                  </h1><br/>
                  
                  {/* Hero Button */}
                  <div className="flex flex-row items-center gap-2">
                    <Btn name="Design CV" link="https://drive.google.com/file/d/1jociKuMGT0lWljKHCTgygnjgahaN187Y/view?usp=drive_link"/>
                    <Btn2 name="Frontend CV" link="https://drive.google.com/file/d/1fKhZhuQmWcHQ0z3C5sIBNRShanyHvwhx/view?usp=drive_link"/>
                  </div><br/>
                  
                  {/* STATS */}
                  <div className="flex flex-row gap-10 md:gap-25 lg:gap-15">
                    <div className="flex flex-col text-2xl md:text-3xl uppercase">
                      <h1 className="text-black font-bold">7+</h1>
                      <p className="text-[#646464] font-light">experience</p>
                    </div>

                    <div className="flex flex-col text-2xl md:text-3xl uppercase">
                      <h1 className="text-black font-bold">50+</h1>
                      <p className="text-[#646464] font-light">clients</p>
                    </div>

                    <div className="flex flex-col text-2xl md:text-3xl uppercase">
                      <h1 className="text-black font-bold">60+</h1>
                      <p className="text-[#646464] font-light">Projects</p>
                    </div>
                  </div>    
              </div>

              {/* Image desktop */}
              <div className="hidden md:hidden lg:flex -z-10">
                <Image src="/img/izzy_hero.png" alt="Dante" className="" width={1000} height={1000} />
              </div>

              {/* Image tablet and mobile */}
              <div className="lg:hidden">
                <Image src="/img/isreality.png" alt="Dante" className="" width={1000} height={1000} />
              </div>
            </div>   
        </div>

        {/* ABOUT */}
        {/* <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
          <h1 className={`${plus.className} text-black text-sm md:text-lg lg:text-5xl text-center md:text-center lg:text-left font-regular`}>
            A Brand Designer, Design Engineer and Illustrator, dedicated to crafting beautiful and functional digital experiences.
          </h1><br/>
        </div> */}
        
        {/* SERVICES */}
        <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
          <h2 className="uppercase mb-4 md:mb-16 text-black text-center md:text-center lg:text-center font-black text-4xl md:text-6xl lg:text-7xl">
            <b className="text-[#646464]">My</b> Expertise
          </h2>

          {/* Features */}
          <div>
            {/* UI/UX */}
            <Link href="/works" className="bg-black flex flex-col md:flex-col lg:flex-row rounded-lg gap-2 md:gap-1 px-4 md:px-8 py-8 md:py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-white text-3xl md:text-5xl w-full md:w-full lg:w-[90%] mb-2 md:mb-2 lg:mb-0">
                      <h2 className="font-black">01.</h2>    
                      <p className="font-light">UI/UX Design</p>
                  </div>

                  <div className="">
                    <p className={`${plus.className} text-sm md:text-xl text-white w-full md:w-full lg:w-[80%] font-light`}>
                      Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
                  </div>

                  <div className="hidden md:hidden lg:flex bg-white p-2 rounded-full">
                    <Icon className="text-black rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Web */}
            <Link href="/works" className="bg-white hover:bg-[#fafafa] flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-6 md:py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full md:w-full lg:w-full mb-2 md:mb-2 lg:mb-0">
                      <h2 className="font-black">02.</h2>    
                      <p className="font-light">WEB DEVELOPMENT</p>
                  </div>

                  <div className="">
                    <p className={`${plus.className} text-sm md:text-xl text-black w-full md:w-full lg:w-[80%] font-regular`}>Create visually stunning and user-friendly websites and responsive web applications using modern technologies like HTML, CSS, JavaScript(React & Next Js) and Wordpress.</p>
                  </div>

                  <div className="hidden md:hidden lg:flex bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Brand Design */}
            <Link href="/works" className="bg-white hover:bg-[#fafafa] flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-6 md:px-8 py-4 md:py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full md:w-full lg:w-[90%] mb-2 md:mb-2 lg:mb-0">
                      <h2 className="font-black">03.</h2>    
                      <p className="font-light">Brand Design</p>
                  </div>

                  <div className="">
                    <p className={`${plus.className} text-sm md:text-xl text-black w-full md:w-full lg:w-[80%] font-regular`}>Design unique logos and graphics that reflect the essence of your brand, ensuring it maintains a visually appealing image across all digital touchpoints.</p>
                  </div>

                  <div className="hidden md:hidden lg:flex bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Illustration */}
            <Link href="/works" className="bg-white hover:bg-[#fafafa] flex flex-col md:flex-col lg:flex-row gap-2 md:gap-1 px-4 md:px-8 py-6 md:py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-3xl md:text-5xl w-full md:w-full lg:w-full mb-2 md:mb-2 lg:mb-0">
                      <h2 className="font-black">04.</h2>    
                      <p className="font-light">Illustration</p>
                  </div>

                  <div className="">
                    <p className={`${plus.className} text-sm md:text-xl text-black w-full md:w-full lg:w-[80%] font-regular`}>Whether it’s digital artwork, character design, or icons, I create visuals that enhance storytelling and branding, bringing creativity and originality to every project.</p>
                  </div>

                  <div className="hidden md:hidden lg:flex bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>
          </div>
        </div>


        {/* WORKS */}
        <div className="bg-black w-full px-4 md:px-8 lg:px-24 py-16">
          {/* Heading */}
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
              <h2 className="uppercase mb-6 md:mb-16 text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
              <b className="text-[#646464]">Selected</b> Works
              </h2>

              <div className="mb-4 md:mb-16">
                <Btn2 name="View All" link="/works"/><br/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
              <Card header="Ounje Ibile" text="Brand Design" image="/img/ounje.png" link={'/works'}/>
              <Card header="Ankra" text="Web Development" image="/img/ankra.png" link={'https://www.ankra.vercel.app'}/>
              <Card header="iGuard" text="UI/UX Design" image="/img/ig.png" link={'https://www.behance.net/gallery/224472665/iGuard'}/>
              <Card header="Illustration" text="Illustration" image="/img/kungirl.jpg" link={'/works'}/>
            </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="bg-black w-full px-4 md:px-8 lg:px-24 py-16">
          {/* Heading */}
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
              <h2 className="uppercase mb-6 md:mb-16 text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
              <b className="text-[#646464]">Review from our</b> clients
              </h2>

              <div className="mb-4 md:mb-16">
                {/* <Btn2 name="View All"/><br/> */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
              <Testimonial image="/img/kazeem.jpg" name="Ashaluwala Kazeem" role="Mobile Developer, Frontend Labs" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/>
                                    
              <Testimonial image="/img/kazeem.jpg" name="Olatunde Samuel" role="LightUp Software Ltd" text='"Israel is very good at what he does. His work ethic is highly commendable and his commitment
                to satisfy his clients is dependable. This makes working with him a good choice always"'/>
                                        
                                    {/* <Testimonial name="Ogunsiji Damilare" role="CEO, Ogdams Technologies" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/> */}
                                    
                                    {/* <Testimonial name="Ogunsiji Damilare" role="CEO, Ogdams Technologies" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/> */}
                            </div>
        </div>


        {/* CONTACTS */}
        <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
            {/* Heading */}
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between mb-4 md:mb-16">
              <div>
                <h2 className="uppercase mb-2 text-[#646464] text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
                  Let's Create Something
                </h2>

                <h2 className="uppercase text-black text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 lg:mb-0">
                  Amazing Together
                </h2> 
              </div>
              <div>
                <Btn name="Let's Talk" link="mailto:isrealitycreations@gmail.com"/><br/>
              </div>
            </div>

            <div className="">
                <Image src="/img/woman.png" alt="customer" className="w-full" width={1000} height={1000} />
            </div><br/>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-5">
              <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-16 rounded-lg items-center">
                  <div className="flex flex-row bg-black px-4 py-4 md:px-6 md:py-6 rounded-full items-center gap-3">
                      <Icon icon="ic:baseline-perm-phone-msg" className="text-white w-8 h-8 md:w-10 md:h-10" />    
                  </div>

                  <div className="">
                    <h2 className="uppercase text-2xl md:text-5xl text-black font-black mb-2">Phone</h2>
                    <p className="uppercase text-2xl md:text-3xl text-black font-light">+2348140082953</p>
                  </div>  
              </div>

              <div className="bg-[#fafafa] flex flex-row gap-3 md:gap-5 px-4 md:px-8 py-8 md:py-16 rounded-lg items-center">
                  <div className="flex flex-row bg-black px-4 py-4 md:px-6 md:py-6 rounded-full items-center gap-3">
                      <Icon icon="ic:baseline-email" className="text-white w-8 h-8 md:w-10 md:h-10"  />    
                  </div>

                  <div className="">
                    <h2 className="uppercase text-2xl md:text-5xl text-black font-black mb-2">Email</h2>
                    <p className="text-2xl md:text-3xl text-black font-light">isrealitycreations@gmail.com</p>
                  </div>  
              </div>
            </div>

        </div>

      </main>
    </div>
  );
}
