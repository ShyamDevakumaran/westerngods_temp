import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import Product from "../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHomeItemsImage } from "../redux/thunks/product";
import {
  BottomtoTop,
  Gallery,
  NewsLetterAmazon,
  WhyWesternGods,
} from "../components/Component";
import WhatsApp from "../components/ProductEnquiry/WhatsApp";
import HomePageCollection from "../components/Collections/HomePageCollection";
import BannerPage from "../components/Banner/BannerPage";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { homeItemsList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getHomeItemsImage());
  }, [dispatch]);
  return (
    <div>
      <Banner />
      <WhyWesternGods />
      <section>
        <div className=" mx-auto ">
          <div className="bg-white py-1 mb-10">
            <div className=" mx-auto  sm:px-6 lg:px-8 ">
              <div className=" mx-auto text-center">
                <p className="text-2xl font-semibold font-basefont text-gray-800 mb-4">
                  Explore our collection of Oils.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 font-basefont lg:grid-cols-4 xl:grid-cols-4 lg:mx-5 gap-3 max-w-sm mx-5 md:max-w-none md:mx-0">
            {homeItemsList?.map((product) => {
              return (
                <Product
                  product={product}
                  dispatchFunc={getHomeItemsImage()}
                  key={product.id}
                />
              );
            })}
          </div>
          <div className="text-center justify-center mt-5 mb-10">
            <p
              onClick={() => {
                navigate({
                  pathname: `${process.env.PUBLIC_URL}/all_products/`,
                });
              }}
              className="cursor-pointer inline-flex text-center uppercase items-center
              justify-center px-5 py-3 mr-3 before:ease relative h-12 w-40 border border-basecolor
              border  bg-lbluecolor rounded-md text-black 
              hover:bg-basecolor hover:text-white"
            >
              <span relative="relative z-10">VIEW ALL</span>
            </p>
          </div>
        </div>
      </section>
      <Gallery />
      {/* <ProductCard /> */}
      <NewsLetterAmazon />
      <HomePageCollection />
      <BannerPage />
      <BottomtoTop />
      <WhatsApp />
    </div>
  );
};

export default Homepage;
