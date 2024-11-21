import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/banner1.jpg";

const NoWishlist = () => {
  const location = useLocation();
  const text = location?.state?.text;
  const redirect = useNavigate();

  function re() {
    redirect("/account/login");
  }
  return (
    <Fragment>
      <div className="relative  bg-white font-basefont">
        <img
          className="opacity-35 w-full h-[598px] lg:h-full"
          src={img1}
          alt="Background"
        />
        <div className="text-black absolute inset-0 flex flex-col items-center justify-center p-10">
          <div className="w-full h-full items-center ">
            <div className="h-max text-center w-max mx-auto my-auto pt-[10%]">
              <h5 className="text-center text-lg font-semibold mb-2">
                PLEASE LOG IN
              </h5>
              <h5 className="text-center text-lg font-normal lg:mt-3 mt-3 mb-3">
                {text}
              </h5>

              <button
                className="py-2 px-8 mt-5 font-normal text-[20px]
             text-[#09243C] border border-[#09243C] rounded-md"
                onClick={re}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoWishlist;
