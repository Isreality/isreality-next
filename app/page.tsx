import Image from "next/image";
import Btn from "./components/Btn";

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <div className="pro py-4 md:py-8 flex flex-row items-center bg-white">
            <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20 gap-0">
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

            <div>
              <Image src="/img/izzy hero.png" alt="Dante" className="" width={1000} height={1000} />
            </div>
        </div> 
      </main>
    </div>
  );
}
