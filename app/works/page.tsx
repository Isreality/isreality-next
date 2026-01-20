import Image from "next/image";
import WorkTab from "../components/WorkTab"
import { Fade } from "react-awesome-reveal";


export default function Works() {
  return (
    <div>
      <div className="bg-[url('/img/camera.jpg')] bg-center bg-cover flex items-center h-50 md:h-140 px-4 md:px-8 lg:px-24 py-8 mt-0 md:mt-0 lg:-mt-25">
        <Fade direction="left" triggerOnce>
          <h2 className="uppercase w-[50%] md:w-[60%] mb-2 md:mb-4 text-black text-left md:text-left font-black text-5xl md:text-8xl lg:text-9xl">
            <b className="text-[#646464]">Selected</b> Works
          </h2>
        </Fade>
      </div>
      
      <div className="w-full px-4 md:px-8 lg:px-24 py-2 md:py-16">
        <WorkTab/>
      </div>
    </div>
  )
}
