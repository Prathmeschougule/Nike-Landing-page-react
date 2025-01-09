
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';


function Herosection() {

  

    useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: true,     // Whether animation should happen only once
      });
    }, []);


  return (
   
      <div data-aos="zoom-out">
          <div className='text-center'>
                <p className='font-semibold'> Nike Bar </p> 
              <h1 className='text-6xl font-extrabold mt-4' >GET COMFTABLAE  WITH <br /> WINING </h1>
              <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum odio, quo nulla,</p>
              <button className=' hover:bg-neutral-600 mt-3 text-center rounded-full py-2 px-3 bg-black text-white font-semibold
                '>Shop Bars</button>
          </div>
       
    </div>
  
  );
}

export default Herosection;


