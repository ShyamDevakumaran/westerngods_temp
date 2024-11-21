import React, { useState, useEffect } from "react";
import img2 from "../../assets/images/3.jpg";
const BannerPage = () => {
  const [isMobile, setIsmobile] = useState(false);

  const mobileResponsive = () => {
    setIsmobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Check on initial render
    mobileResponsive();

    // Add a resize event listener
    window.addEventListener("resize", mobileResponsive);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", mobileResponsive);
    };
  }, []);

  return (
    <div className="mx-auto p-5 relative font-basefont h-full">
      <div className="flex p-5  justify-center items-center">
        <img className="relative h-auto w-full object-cover" src={img2}></img>
        <div
          className="hidden absolute top-50 left-20 
        sm:left-1/8 md:left-10 lg:left-20 sm:block lg:absolute"
        >
          <div className="h-60 w-full bg-white max-w-3xl p-5 rounded-md bg-white ">
            <h4 className="py-3 font-semibold text-lg sm:text-xl md:text-2xl">
              Delivering freshness & flavour since 1977
            </h4>
            <p className="py-3 text-sm sm:text-base">
              Made with the highest quality organically grown sesame seeds of
              Tamil Nadu, Sastha Sesame oil is one of the Best selling Product
              of Enna chekku since 1977.
            </p>
            <a
              href="/"
              className="mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md   hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor transition-transform  ease-in-out  transform duration-500 hover:scale-100 "
            >
              shop now
            </a>
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="h-full w-full bg-white p-5 rounded-md flex justify-center items-center flex-col">
          <h4 className="py-3 font-semibold text-lg sm:text-xl md:text-2xl">
            Delivering freshness & flavour since 1977
          </h4>
          <p className="py-3 text-lg sm:text-base">
            Made with the highest quality organically grown sesame seeds of
            Tamil Nadu, Sastha Sesame oil is one of the Best selling Products of
            Enna Chekku since 1977.
          </p>
          <a
            href="/"
            className="mt-3 h-12 w-40 flex justify-center uppercase items-center rounded-md hover:bg-basecolor hover:text-white border border-basecolor bg-lbluecolor transition-transform ease-in-out transform duration-500 hover:scale-100"
          >
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
};

export default BannerPage;
