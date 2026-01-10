// import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';
// import Ankra from "../img/Ankra.png";

export default function Footer() {
  return (
    <div className="bg-black h-140 overflow-hidden gap-0">
        <div className="pt-16 pb-0 px-4 md:px-8 lg:px-24">
            <div className="flex flex-row justify-between">
                <div className="">
                    <p className="text-white text-left text-sm md:text-2xl font-normal ">© 2025, ISRAEL AGBAJE (ISREALITY)</p>
                </div>

                <div className="flex flex-row gap-5 items-center">
                    <Link href="https://www.github.com/Isreality">
                        <Icon icon="qlementine-icons:github-24" className="text-white" width="40" height="40" />
                    </Link>

                    <Link href="https://www.behance.net/agbajeisrael">
                        <Icon icon="cib:behance" className="text-white" width="40" height="40" />
                    </Link>

                    <Link href="https://www.x.com/Agbaje_Israel01">
                        <Icon icon="prime:twitter" className="text-white" width="35" height="35" />
                    </Link>

                    <Link href="https://www.linkedin.com/in/agbajeisrael">
                        <Icon icon="ri:linkedin-fill" className="text-white" width="40" height="40" />
                    </Link>
                </div>
            </div>
        </div>

        <div className="">
            <p className="text-[450px] text-[#1f1f1f] font-bold overflow-hidden">ISREALITY</p>
        </div>
    </div>
  )
}
