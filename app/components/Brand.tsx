// src/pages/index.tsx (or app/page.tsx)
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Define the type for an image file
interface ImageProps {
  src: string;
  alt: string;
  // You might add width/height if known
}

// Define the props for the page component
interface GalleryProps {
  imagePaths: string[];
}

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public', 'img', 'brand');
  const filenames = fs.readdirSync(imagesDir);

//   const imagePaths = filenames.map(name => '/img/brand');
  const imagePaths = filenames.map(name => `/img/${name}`);

  return {
    props: {
      imagePaths,
    },
  };
}

const ImageGallery: React.FC<GalleryProps> = ({ imagePaths }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {imagePaths.map((src) => (
          <div key={src} style={{ width: '200px', height: 'auto' }}>
            {/* 
              Use next/image for optimization. 
              You may need to define width and height or use 'fill' with a parent container.
              For simplicity with many arbitrary images, using a fixed container with fill is effective.
            */}
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}> 
                <Image 
                    src={src} 
                    alt={`Image ${src}`} 
                    fill // Fills the parent div (which has the paddingBottom trick for aspect ratio)
                    style={{ objectFit: 'cover' }} // Ensures the image covers the container nicely
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

// const images = require.context('../img/brand', true);
// const imageList = images.keys().map(image => images(image));

// export default function Brand() {
//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">          
//         {imageList.map((image, index) => (
//             <img key={index} src={image} className="image w-full sm:h-96 lg:h-72 object-cover cursor-pointer" alt="im" />
//         ))}

//     </div> 
//   )
// }