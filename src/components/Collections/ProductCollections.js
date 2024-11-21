import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import oilcan from '../../assets/images/oils_can.jpeg'
import oilbottle from '../../assets/images/bottle.jpeg'
import oilPacket from '../../assets/images/oil_packet.png'
import food from '../../assets/images/dosa.jpeg'
import food1 from '../../assets/images/foods.jpeg'


const ProductCollections = () => {
  const [imageSrc,SetImageSrc]=useState(oilPacket);
  const [imageSrc2,SetImageSrc2]=useState(oilcan);
  const [imageSrc3,SetImageSrc3]=useState(oilbottle);

  return (

    <div>
      <div className="mt-5">
        <div className="flex space-x-8 p-5 md:justify-start justify-center">
        
          <div className="mr-32 md:block hidden">

          <h2 className="text-xl font-bold">
            Cold Pressed Oils
          </h2>
          
          <div className="flex flex-col">
          <h3 className="mt-5 pl-3 text-lg font-semibold"> Sort by</h3>
          <ul className="py-2 pl-3 leading-loose text-base">
            <li className="flex space-x-2"> <span className="self-center pr-5 "><FaRegCircle className="hover:text-blue-500 hover:bg-gray-100 rounded-full "/></span> Price,Low to High</li>
            <li className="flex space-x-5"> <span className="self-center pr-5"><FaRegCircle className="hover:text-blue-500 hover:bg-gray-100 rounded-full"/></span> Price,High to Low</li>
            <li className="flex space-x-2"> <span className="self-center pr-5"><FaRegCircle className="hover:text-blue-500 hover:bg-gray-100  rounded-full"/></span>Best Selling</li>
          </ul>
          </div>
          
          </div>
          <div className="grid md:grid-cols-3  space-y-5 grid-cols-1 gap-2 md:gap-5">
            <div  className=" flex justify-center items-center flex-col">
            <img  className=" h-64 w-60 bg-gray-100 rounded-lg transition-opacity duration-700 ease-in-out" src={imageSrc}
            
            onMouseEnter={()=>SetImageSrc(food)}
            onMouseLeave={()=>SetImageSrc(oilPacket)}>
            </img>
            <p className="mt-5 p-2 text-wrap">Cold Pressed  Coconut oil Pouch</p>
            <p className="p-2">From Rs.999</p>

            <a className="mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor transition-transform  ease-in-out  transform duration-500 hover:scale-100 ">View all</a>
            </div>
            <div>
            <div  className=" flex justify-center items-center flex-col">

            <div className="relative h-64 w-60">
            <img  className=" absolute inset-0 w-full h-full object-cover transition delay-150 duration-300 ease-in-out ..." src={imageSrc2}
            
            onMouseEnter={()=>SetImageSrc2(food)}
            onMouseLeave={()=>SetImageSrc2(oilcan)}>
            </img>
            </div>
            <p className="mt-5 p-2 text-wrap">Cold Pressed  Coconut oil Can</p>
            <p className="p-2">From Rs.999</p>

            <a className="mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor">View all</a>
            </div>
            </div>
            <div>
            
            <div  className=" flex justify-center items-center flex-col">
            <img  className="h-64 w-60 bg-gray-100 rounded-lg" src={imageSrc3}
            
            onMouseEnter={()=>SetImageSrc3(food)}
            onMouseLeave={()=>SetImageSrc3(oilbottle)}>
            </img>
            <p className="mt-5 p-2 text-wrap">Cold Pressed  Coconut oil Bottle</p>
            <p className="p-2">From Rs.999</p>

            <a className="mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor">View all</a>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollections;
