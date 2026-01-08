// import "./globals.css";
import Link from "next/link";
import Image from "next/image";
// import Ankra from "../img/Ankra.png";

export default function Footer() {
  return (
    <div>
        <div className="bg-black py-16 px-4 md:px-8 lg:px-24 gap-10">
            <div className="flex flex-row justify-between">
                <div className="">
                    <p className="text-white text-left text-sm md:text-base font-normal ">© 2025, ISRAEL AGBAJE (ISREALITY)</p>
                </div>

                <div className="flex flex-row gap-5">
                    <p className="text-white text-left text-sm md:text-base mb-4">Github</p>
                    <p className="text-white text-left text-sm md:text-base mb-4">Behance</p>                   
                    <p className="text-white text-left text-sm md:text-base mb-4">X</p>
                    <p className="text-white text-left text-sm md:text-base mb-4">Linkedin</p>
                </div>
            </div>

            <div>
                <p className="text-8xl text-white font-bold">ISREALITY</p>
            </div>
        </div>
    </div>
  )
}
