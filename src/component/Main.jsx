import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

function Main() {

      useEffect(() => {
          AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
          });
        }, []);

  return (
     <main className='flex flex-row max-w-[1000px] mx-auto w-full mt-20'>
                
          <div >   
                <div >
                    <h1 className='text-7xl font-extrabold'>YOUR FEET <br /> DESERVE <br /> <span className='text-blue-700'>THE BEST</span> </h1>
                </div>
                <div className='text-neutral-800 text-xs mt-7'>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div  className=' mt-3 '>
                    <button className=' text-white rounded-lg py-1 px-5 mr-7 bg-red-600 font-semibold '> Shop Now   </button>
                    <button className=' text-neutral-800  rounded-lg py-1 px-5  border border-neutral-900 '>Category   </button>
                </div>
                <div className='mt-3'>
                    <p className=' text-sm text-neutral-600'>Also Avilable On </p>
                    <div className="flex gap-2 mt-2 ">
                    <img className='h-10 w-10' src="src/assets/image.png" alt="" />
                    <img className='h-10 w-10' src="src/assets/image.png" alt="" />
     
                    </div>
                                        
                </div>      
          </div>
          <div >
                    <img className='w-auto h-auto' src="src/assets/img.png" alt="" />
         </div>
     </main>
  );
}

export default Main;
