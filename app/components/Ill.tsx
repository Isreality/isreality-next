import fs from 'fs';
import path from 'path';
import Image from 'next/image';

async function getImagePaths() {
  const imagesDir = path.join(process.cwd(), 'public', 'img', 'ill');
  const filenames = fs.readdirSync(imagesDir);
  return filenames.map(name => `/img/ill/${name}`);
}

export default async function Ill() { 
  const imagePaths = await getImagePaths(); 

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {imagePaths.map((src) => (
             <img key={src} src={src} className="image w-full h-full md:h-96 lg:h-72 2xl:h-150 object-cover cursor-pointer" alt={`Image ${src}`} />
         ))}
    </div>
  );
}



