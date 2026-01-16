import Link from "next/link";
import { Icon } from '@iconify/react';

interface BtnProps {
  name: string;
  link: any;
}

// export default function Btn({name}: { name: string }) {
export default function Btn({ name, link }: BtnProps) {
  return (
    <Link href={link} className="flex flex-row bg-black px-6 py-4 rounded-full items-center gap-3 justify-center">
        <p className="text-white text-lg md:text-xl uppercase">{name}</p>
        <div className="bg-white p-2 rounded-full"><Icon className="text-black rotate-45 hover:rotate-90" icon="prime:arrow-up" width="20" height="20" /></div>
    </Link>
  )
}