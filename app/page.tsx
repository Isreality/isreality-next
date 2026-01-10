import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import { Icon } from '@iconify/react';
import Btn from "./components/Btn";

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <div className="gap-0">
            {/* <div className="z-100"><Navbar/></div> */}

            {/* Content */}
            <div className="flex flex-row items-center bg-white -mt-30">
              <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20 mt-30 gap-0">
                  <h2 className="text-black text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-9xl">
                    ISRAEL AGBAJE
                  </h2><br/>

                  <h1 className="text-black text-xs md:text-base lg:text-2xl text-left w-full font-light uppercase">I am a passionate Product & Brand Designer, Frontend ENGINEER and Illustrator, dedicated to crafting beautiful and functional digital experiences. </h1><br/>
                  
                  {/* Hero Button */}
                  <Btn name="SEE MY WORKS"/><br/>
                  
                  {/* STATS */}
                  <div className="flex flex-row gap-15">
                    <div className="flex flex-col text-3xl uppercase">
                      <h1 className="text-black font-bold">7+</h1>
                      <p className="text-[#646464] font-light">experience</p>
                    </div>

                    <div className="flex flex-col text-3xl uppercase">
                      <h1 className="text-black font-bold">50+</h1>
                      <p className="text-[#646464] font-light">clients</p>
                    </div>

                    <div className="flex flex-col text-3xl uppercase">
                      <h1 className="text-black font-bold">60+</h1>
                      <p className="text-[#646464] font-light">Projects</p>
                    </div>
                  </div>    
              </div>

              <div className="">
                <Image src="/img/izzy hero.png" alt="Dante" className="" width={1000} height={1000} />
              </div>
            </div>   
        </div>
        
        {/* SERVICES */}
        <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
          <h2 className="uppercase text-black text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
            <b className="text-[#646464]">My</b> Expertise
          </h2><br/>

          {/* Features */}
          <div>
            {/* UI/UX */}
            <Link href="/" className="bg-black flex flex-row rounded-lg gap-2 md:gap-1 px-4 md:px-8 py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-white text-xl md:text-5xl w-[90%]">
                      <h2 className="font-black">01.</h2>    
                      <p className="font-light">UI/UX Design</p>
                  </div>

                  <div className="">
                    <p className="uppercase text-sm md:text-2xl text-white w-[80%] font-light">Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience.</p>
                  </div>

                  <div className="bg-white p-2 rounded-full">
                    <Icon className="text-black rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Web */}
            <Link href="/" className="bg-white hover:bg-[#fafafa] flex flex-row gap-2 md:gap-1 px-4 md:px-8 py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-xl md:text-5xl w-full">
                      <h2 className="font-black">02.</h2>    
                      <p className="font-light">WEB DEVELOPMENT</p>
                  </div>

                  <div className="">
                    <p className="uppercase text-sm md:text-2xl text-black w-[80%] font-light">Create visually stunning and user-friendly websites and responsive web applications using modern technologies like HTML, CSS, JavaScript(React & Next Js) and Wordpress.</p>
                  </div>

                  <div className="bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Brand Design */}
            <Link href="/" className="bg-white hover:bg-[#fafafa] flex flex-row gap-2 md:gap-1 px-4 md:px-8 py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-xl md:text-5xl w-[90%]">
                      <h2 className="font-black">03.</h2>    
                      <p className="font-light">Brand Design</p>
                  </div>

                  <div className="">
                    <p className="uppercase text-sm md:text-2xl text-black w-[80%] font-light">Design unique logos and graphics that reflect the essence of your brand, ensuring it maintains a visually appealing image across all digital touchpoints.</p>
                  </div>

                  <div className="bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>

            {/* Illustration */}
            <Link href="/" className="bg-white hover:bg-[#fafafa] flex flex-row gap-2 md:gap-1 px-4 md:px-8 py-16 border-b-2 items-center justify-between">
                  <div className="flex flex-row uppercase text-black text-xl md:text-5xl w-full">
                      <h2 className="font-black">04.</h2>    
                      <p className="font-light">Illustration</p>
                  </div>

                  <div className="">
                    <p className="uppercase text-sm md:text-2xl text-black w-[80%] font-light">Whether it’s digital artwork, character design, or icons, I create visuals that enhance storytelling and branding, bringing creativity and originality to every project.</p>
                  </div>

                  <div className="bg-black p-2 rounded-full">
                    <Icon className="text-white rotate-45 hover:rotate-90 cursor-pointer" icon="prime:arrow-up" width="50" height="50" />
                  </div>  
            </Link>
          </div>

        </div>

        {/* CONTACT */}
        <div className="bg-white w-full px-4 md:px-8 lg:px-24 py-16">
            {/* Heading */}
            <div className="flex flex-row items-center justify-between">
              <div>
                <h2 className="uppercase mb-2 text-[#646464] text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
                  Let's Create Something
                </h2>

                <h2 className="uppercase text-black text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
                  Amazing Together
                </h2> 
              </div>
              <div>
                <Btn name="Let's Talk"/><br/>
              </div>
            </div><br/>

            <div className="">
                <Image src="/img/woman.png" alt="customer" className="w-full" width={1000} height={1000} />
            </div><br/>

            {/* Details */}
            <div className="grid grid-cols-2 items-center gap-5">
              <div className="bg-[#fafafa] flex flex-row gap-2 md:gap-5 px-4 md:px-8 py-16 rounded-lg items-center">
                  <div className="flex flex-row bg-black px-6 py-6 rounded-full items-center gap-3">
                      <Icon icon="ic:baseline-perm-phone-msg" className="text-white" width="40" height="40" />    
                  </div>

                  <div className="">
                    <h2 className="uppercase text-xl md:text-3xl text-black font-black mb-2">Phone</h2>
                    <p className="uppercase text-sm md:text-3xl text-black font-light">+2348140082953</p>
                  </div>  
              </div>

              <div className="bg-[#fafafa] flex flex-row gap-2 md:gap-5 px-4 md:px-8 py-16 rounded-lg items-center">
                  <div className="flex flex-row bg-black px-6 py-6 rounded-full items-center gap-3">
                      <Icon icon="ic:baseline-email" className="text-white" width="40" height="40" />    
                  </div>

                  <div className="">
                    <h2 className="uppercase text-xl md:text-3xl text-black font-black mb-2">Email</h2>
                    <p className="text-sm md:text-3xl text-black font-light">isrealitycreations@gmail.com</p>
                  </div>  
              </div>
            </div>

        </div>

      </main>
    </div>
  );
}
