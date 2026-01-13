import WorkTab from "../components/WorkTab"


export default function Works() {
  return (
    <div>
      <div className="w-full px-4 md:px-8 lg:px-24 py-8">
        <h2 className="uppercase mb-6 md:mb-16 text-black text-center md:text-center lg:text-left font-black text-6xl md:text-8xl lg:text-9xl">
           <b className="text-[#646464]">Selected</b> Works
        </h2>

        <WorkTab/>
      </div>
      
    </div>
  )
}
