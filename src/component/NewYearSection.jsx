import {  ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import React, { useRef } from 'react';


function NewYearSection() {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const NewYearitem = [
        {
            url: "src/assets/Shose/men-s-shoes-leather-boots-autumn-fashion-white_308547-41.jpg",
            brand: "Nike Air Max 270",
            gender: "This For Man "
            , prize: "$561"

        },
        {
            url: "src/assets/Shose/men-s-shoes-leather-boots-autumn-fashion-white_308547-41.jpg",
            brand: "Adidas Ultraboost 22",
            gender: "This For Man "
            , prize: "$561"
        },
        {
            url: "src/assets/Shose/shoes.jpg",
            brand: "Puma RS-X3",
            gender: "This For Man "
            , prize: "$561"
        },
        {
            url: "src/assets/Shose/men-shoes.jpg",
            brand: "Reebok Club C 85",
            gender: "This For Man "
            , prize: "$561"
        },
       
    ]


    return (

        <>

            <div className=" flex justify-between text-2xl mt-20  mb-4">
                <div className='ml-4'>
                    <h1>This Section The Neew Year  Section </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                        <a className='cursor-pointer' href="">
                            <p className=" text-[16px] hover:text-neutral-600">Shop</p>
                        </a>
                    </div>
                    <div className='flex gap-3'>
                        <div 
                        onClick={scrollLeft}
                        className="rightarrow h-10 w-10 rounded-full hover:bg-neutral-400 duration-300 flex items-center justify-center">
                            <ChevronLeftIcon className='text-neutral-500 hover:text-neutral-700' size={15} color="black" />
                        </div>
                        <div 
                        onClick={scrollRight}
                        className="leftarrow h-10 w-10 rounded-full hover:bg-neutral-400 duration-300 flex items-center justify-center">
                            <ChevronRightIcon className='text-neutral-500 hover:text-neutral-700' size={24} color="black" />
                        </div>
                    </div>
                </div>
            </div>


            <div 
            ref={scrollContainerRef}
            className=" overflow-x-auto  h-auto whitespace-nowrap scrollbar-hide bg-gray-100 py-4 px-6">
                <div className="h-[400px] flex gap-6">
                    {NewYearitem.map((item, index) => (
                        <div
                            key={index}
                            className="  flex-shrink-0 h-96 w-96 rounded-lg  shadow-lg bg-white"
                        >
                            <div className=' h-[300px] w-full object-cover' >
                                <img
                                    src={item.url}
                                    alt={`Image ${index + 1}`}
                                    className=""
                                />
                            </div>

                            <p className=" text-left text-xl font-semibold  text-gray-900 font-bold">
                                {item.brand}
                            </p>
                            <p className='text-neutral-600'>
                                {item.gender}
                            </p>
                            <p className=' font-semibold'>
                                MRP: {item.prize}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NewYearSection;
