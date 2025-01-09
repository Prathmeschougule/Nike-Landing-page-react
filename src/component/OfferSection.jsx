import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';

function OfferSection() {

    useEffect(()=>{
       AOS.init({
               duration: 1200, // Animation duration in milliseconds
               once: true,     // Whether animation should happen only once
             });
    },[])

    return (
        <div  data-aos="flip-down" className='text-center mt-24'>
            <h1 className='font-medium '>New Styles On Sale: Up To 40% Off</h1>
            <p className='text-sm mt-1 font-semibold underline'>Shop All Our New Markdowns</p>
        </div>
    )
}

export default OfferSection
