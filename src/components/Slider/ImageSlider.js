// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import { useDispatch, useSelector } from "react-redux";
// import { getOfferSlide } from "../../redux/thunks/master";
// import { useNavigate } from "react-router-dom";

// const ImageSlider = () => {
//   const dispatch = useDispatch();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const navigate = useNavigate();
//   const { offerList } = useSelector((state) => state.masterReducer);

//   useEffect(() => {
//     dispatch(getOfferSlide());
//   }, [dispatch]);

//   return (
//     <Slider {...settings}>
//       {/* {
//       OfferSlide.map((offer,index)=>(
//         <div className="text-center bg-[#f7f5f2]" dkey={offer.offer_slider_id}>
//         <span className="text-xs text-orange-500 lg:text-[14px] font-Viesharafont lg:text-orange-400">
//         dangerouslySetInnerHTML={{ __html: offer.offer_slider_content }}
//         </span>
//       </div>
//       ))
//     } */}

//       {offerList?.map((offer, index) => (
//         <div
//           key={offer.offer_slider_id}
//           className="text-center bg-[#f7f5f2]" >
//           <span className="text-xs text-orange-500 lg:text-[14px] font-Viesharafont lg:text-orange-400"
//             dangerouslySetInnerHTML={{ __html: offer.offer_slider_content }}>
//           </span>
//         </div>
//       ))}

//       {/* <div className="text-center bg-[#f7f5f2]">
//         <span className="text-xs text-orange-500 lg:text-[14px] font-Viesharafont lg:text-orange-400">
//           SUMMER SALE FLAT 70% + EXTRA 10% OFF ON ALL PREPAID ORDERS
//         </span>
//       </div>
//       <div className="text-center bg-[#f7f5f2]">
//         <span
//           className="text-xs text-orange-500 lg:text-[14px] uppercase
//       font-Viesharafont lg:text-orange-400"
//         >
//           Shop with confidence + Free Shipping AND Cash on Delivery
//         </span>
//       </div> */}
//     </Slider>
//   );
// };

// export default ImageSlider;


import React from 'react'

const ImageSlider = () => {
  return (
    <>
      <div className="text-center bg-basecolor py-2">
        <span className="text-xs text-white lg:text-[14px] font-basefont ">
          ORDERS ON WHAT'S APP <a href="https://wa.me/919443936250"
            target="_blank">+91 9566344051</a>
        </span>
      </div>
    </>
  )
}

export default ImageSlider