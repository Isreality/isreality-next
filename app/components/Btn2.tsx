import Link from "next/link";
import { Icon } from '@iconify/react';

interface BtnProps {
  name: string;
  link: any;
}

export default function Btn({ name, link }: BtnProps) {
  return (
    // <div className="bg-primary hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white text-xs md:text-base font-medium">{name}</div>
    <Link href={link} className="flex flex-row bg-white hover:bg-[#fafafa] border border-black px-6 py-3 md:px-6 md:py-4 rounded-full items-center gap-2 md:gap-3">
        <p className="text-black text-lg md:text-2xl uppercase">{name}</p>
            <div className="bg-black p-1 md:p-2 rounded-full"><Icon className="text-white w-4 h-4 md:w-6 md:h-6 rotate-45 hover:rotate-90" icon="prime:arrow-up" /></div>
    </Link>
  )
}