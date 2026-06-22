// 'use client'

import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Card from "./Card"
import WorkCard from "./WorkCard"

async function getImagePaths() {
  const imagesDir = path.join(process.cwd(), 'public', 'img', 'brand');
  const filenames = fs.readdirSync(imagesDir);
  return filenames.map(name => `/img/brand/${name}`);
}

export default async function Brand() { 
  const imagePaths = await getImagePaths(); 

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-5">
        <Fade direction="up" triggerOnce cascade damping={0.1}>
            <WorkCard link={'https://www.behance.net/gallery/248111821/Ounje-Ibile'} header="Ounje Ibile" text="A Nigerian restaurant that brings authentic local dishes to everyone, cooked the original way and served with warmth." image="/img/brand_img.png"/>
        </Fade>

        <Fade direction="up" triggerOnce cascade damping={0.1}>
            <WorkCard link={'https://www.behance.net/gallery/249412591/AfriSmash'} header="Afri Smash" text="AfriSmash is a premier pan-African tennis tournament bringing together the continent's most talented players to compete, inspire, and celebrate the spirit of African tennis. " image="/img/af billboard.png"/>
        </Fade>
      </div>
      

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {imagePaths.map((src) => (
              <img key={src} src={src} className="image w-full h-full md:h-96 lg:h-72 2xl:h-150 object-cover cursor-pointer" alt={`Image ${src}`} />
          ))}
      </div>
    </>
  );
}



