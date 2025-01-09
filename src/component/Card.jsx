import React from 'react'
import Aos from 'aos'
import { useState } from 'react'
function Card() {

    useState(()=>{
        Aos.init({
                duration:1200,
                once: true,
        });
    },[])
    return (
        <>
        <div data-aos="fade-down" className='mt-20'>
                <h1 className=' text-center text-5xl  font-extrabold text-neutral-800'>
                    THAT IS THE OFFER
                </h1>
                <h1 className=' text-center text-5xl text-blue-600 font-extrabold text-neutral-800'>
                GET COMFTABLAE WITH
                WINING
                </h1>
                <p className='text-center m-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum odio, quo nulla,</p>

        </div>

        <div className=" mt-20 card text-bg-dark">
            <img className='h-52' src="src/assets/Shose/depositphotos_188885346-stock-photo-sport-shoes-art-design-banner.jpg"  alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title text-4xl">Offer Only This Time</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
        </>
    )
}

export default Card
