import React, { Fragment } from "react";
import notfound from "../../assets/images/notfound.png";
const NoItemsFound = () => {
  return (
    <Fragment>
      <div className="w-full h-full items-center ">
        <div className="h-max text-center w-max mx-auto my-auto pt-10 mb-10">
          <div className="h-max text-center w-max mx-auto my-auto ">
            <img
              src={notfound}
              alt="not found"
              className="w-[100px] mt-10 mb-10 mx-auto "
            />

            <h1 className="text-black font-semibold mb-3 mt-5 text-2xl">
              We couldn't find any matches !
            </h1>
            <h1 className="text-gray-600 font-normal text-sm ">
              Please check the spelling or try searching something else.
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoItemsFound;
