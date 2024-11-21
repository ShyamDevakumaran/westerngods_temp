import React from 'react'
import img1 from '../../assets/images/3.jpg';
import img2 from '../../assets/images/4.jpg';
const HomePageCollection = () => {
  return (
    <div className="p-5 mx-auto font-basefont">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  m-5">
        <div className=' flex justify-center items-center flex-col'>
        <img className="h-auto w-full" src={img1}></img>
        <p className='text-base p-2'>Cold pressed</p>
        <p className='text-lg font-semibold py-2'>Cold Pressed Coconut oil</p>
        <a href="/collection/1" className='mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor transition-transform  ease-in-out  transform duration-500 hover:scale-100 '>shop now</a>
        </div>

        <div className='flex justify-center items-center flex-col'>
        <img className="h-auto w-full " src={img2}></img>
        <p className='text-base p-2'>Cold pressed</p>
        <p className='text-lg font-semibold py-2'>Cold Pressed Coconut oil</p>
        <a href="/collection/1" className='mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor transition-transform  ease-in-out  transform duration-500 hover:scale-100 '>shop now</a>
        </div>
      </div>
    </div>
  );
}

export default HomePageCollection