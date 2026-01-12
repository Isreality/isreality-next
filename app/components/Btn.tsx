import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Btn({name}: { name: string }) {
  return (
    // <div className="bg-primary hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white text-xs md:text-base font-medium">{name}</div>
    <Link href='/' className="flex flex-row bg-black px-6 py-4 rounded-full items-center gap-3 justify-center">
        <p className="text-white text-xl uppercase">{name}</p>
        <div className="bg-white p-2 rounded-full"><Icon className="text-black rotate-45 hover:rotate-90" icon="prime:arrow-up" width="20" height="20" /></div>
    </Link>
  )
}