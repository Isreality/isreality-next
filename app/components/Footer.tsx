// import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';
// import Ankra from "../img/Ankra.png";

export default function Footer() {
  return (
    <div className="bg-black h-75 md:h-110 lg:h-140 overflow-hidden gap-0">
        <div className="pt-16 pb-0 px-4 md:px-8 lg:px-24">
            <div className="flex flex-col md:flex-col lg:flex-row items-start md:items-start lg:items-center justify-between">
                <div className="mb-6 md:mb-8 lg:mb-0">
                    <p className="text-white text-left text-2xl md:text-3xl font-normal ">© 2025, ISRAEL AGBAJE (ISREALITY)</p>
                </div>

                <div className="flex flex-row gap-8 md:gap-10 lg:gap-5 items-center">
                    <Link href="https://www.github.com/Isreality" target="_blank">
                        {/* <Icon icon="qlementine-icons:github-24" className="text-white" width="40" height="40" /> */}
                        <p className="text-white text-2xl md:text-3xl font-normal uppercase">Github</p>
                    </Link>

                    <Link href="https://www.behance.net/agbajeisrael" target="_blank">
                        {/* <Icon icon="cib:behance" className="text-white" width="40" height="40" /> */}
                        <p className="text-white text-2xl md:text-3xl font-normal uppercase">Behance</p>
                    </Link>

                    <Link href="https://www.x.com/Agbaje_Israel01" target="_blank">
                        {/* <Icon icon="prime:twitter" className="text-white" width="35" height="35" /> */}
                        <p className="text-white text-2xl md:text-3xl font-normal uppercase">X</p>
                    </Link>

                    <Link href="https://www.linkedin.com/in/agbaje-israel" target="_blank">
                        {/* <Icon icon="ri:linkedin-fill" className="text-white" width="40" height="40" /> */}
                        <p className="text-white text-2xl md:text-3xl font-normal uppercase">Linkedin</p>
                    </Link>
                </div>
            </div>
        </div>

        <div className="">
            <p className=" text-[130px] md:text-[230px] lg:text-[450px] 2xl:text-[750px] text-[#1f1f1f] font-bold overflow-hidden">ISREALITY</p>
        </div>
    </div>
  )
}
