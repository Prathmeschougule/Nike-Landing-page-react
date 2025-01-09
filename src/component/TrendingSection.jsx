import React from 'react';

function TrendingSection() {

  const imageItems = [
    {
      url: "src/assets/istockphoto-1258111640-1024x1024.jpg", 
      description: "This is the first trending image."
    },
    {
      url: "src/assets/gabriel-alenius-xfWsiueRkNo-unsplash.jpg",
      description: "Sneaker Sensation: Must-Have Kicks"
    },
    {
      url: "src/assets/istockphoto-1258111640-1024x1024.jpg",
      description: "Elevate Your Style with Trendy Heels."
    },
    {
      url: "src/assets/jakob-owens-7tMKyuV-9yo-unsplash.jpg",
      description: "Running into Comfort: Top Picks"
    },
    {
      url: "src/assets/jakob-owens-A4579vLezz8-unsplash (1).jpg",
      description: "Classic Loafers, Modern Edge"
    },
    {
      url: "src/assets/jakob-owens-A4579vLezz8-unsplash.jpg",
      description: "Bold Boots for Every Adventure."
    },
    {
      url: "src/assets/jakob-owens-A4579vLezz8-unsplash.jpg",
      description: "Slide into Summer: Trending Sandals."
    },
    {
      url: "https://via.placeholder.com/300",
      description: "Athletic Performance, Stylish Design."
    },
    {
      url: "https://via.placeholder.com/300",
      description: "Placeholder description for image 9."
    }
  ];

  return (
    <div className=' mt-20 max-w-[1200px] mx-auto w-full '>
      <div className='ml-4'>
          <h1 className="text-2xl   mb-4">Trending</h1>
      </div>
      
      <div className=" overflow-x-auto whitespace-nowrap scrollbar-hide bg-gray-100 py-4 px-6">
        <div className="h-[500px] flex gap-6">
          {imageItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-96 w-96 rounded-lg  shadow-lg bg-white"
            >
              <img
                src={item.url}
                alt={`Image ${index + 1}`}
                className=" h-[450px] w-full object-cover"
              />
              <p className=" mt-5 mb-5 text-left text-xl font-semibold p-2 text-gray-900 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
