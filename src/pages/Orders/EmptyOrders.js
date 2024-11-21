import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import bag from "../../assets/images//bag.png"
const EmptyOrders = () => {
    const redirect = useNavigate();

    function reditectTo() {
        redirect("/all_products");
    }
    return (
        <Fragment>
            <div className="w-full h-full items-center ">
                <div className="h-max text-center w-max mx-auto my-auto mt-10 mb-10">
                    <img
                        className=" w-full h-[200px]  mb-5 justify-center"
                        src={bag}
                        alt="Background"
                    />
                    <h1 className="text-[#282c3f] font-semibold font1 text-[22px] mb-4">
                        No orders yet.
                    </h1>
                    <h1 className="text-[#a0a3a8] text-[14px] mb-4 ">
                        Go to store to place an order.
                    </h1>
                    <button
                        className="py-2 px-4 font1 font-bold text-[14px] text-[#09243C] border border-[#09243C] rounded-sm mt-4"
                        onClick={reditectTo}
                    >
                        ADD ITEMS
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default EmptyOrders;
