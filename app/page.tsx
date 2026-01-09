import Image from "next/image";
import Navbar from "./components/Navbar"
import Btn from "./components/Btn";

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <div className="gap-0">
            <div className="z-100"><Navbar/></div>

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
                  <div className="">
                  <h2 className="uppercase text-xl md:text-3xl text-black font-black mb-2">Phone</h2>
                    <p className="uppercase text-sm md:text-3xl text-black font-light">+2348140082953</p>
                  </div>  
              </div>

              <div className="bg-[#fafafa] flex flex-row gap-2 md:gap-5 px-4 md:px-8 py-16 rounded-lg items-center">
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
