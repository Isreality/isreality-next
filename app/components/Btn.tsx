import Link from "next/link";
import { Icon } from '@iconify/react';

interface BtnProps {
  name: string;
  link: any;
}

// export default function Btn({name}: { name: string }) {
export default function Btn({ name, link }: BtnProps) {
  return (
    <Link href={link} className="flex flex-row bg-black px-6 py-3 md:px-6 md:py-4 rounded-full items-center gap-2 md:gap-3 justify-center">
        <p className="text-white text-lg md:text-2xl uppercase">{name}</p>
        <div className="bg-white p-1 md:p-2 rounded-full"><Icon className="text-black w-4 h-4 md:w-6 md:h-6 rotate-45 hover:rotate-90" icon="prime:arrow-up"  /></div>
    </Link>
  )
}