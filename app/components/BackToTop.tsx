// import Link from "next/link";
// import { useState } from "react";
// import { Icon } from '@iconify/react';


// export default function Btn() {
//     const [visible, setVisible] = useState(false) 
    
//         const toggleVisible = () => { 
//             const scrolled = document.documentElement.scrollTop; 
//             if (scrolled > 300){ 
//             setVisible(true) 
//             }  
//             else if (scrolled <= 300){ 
//             setVisible(false) 
//             } 
//         }; 
        
//         const handleClick = () =>{
//             window.scroll({
//                 top:0,
//                 behavior: "smooth"
//             })
//         }

//         window.addEventListener('scroll', toggleVisible);

//   return (
//     <div>
//         <Icon onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-black rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-black border-white hover:border-black hover:border-2" icon="prime:arrow-up"  />
//     </div>
//   )
// }