import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../../contexts/CartContext";
import { formatCurrencyInINR } from "../../utils/Utils";

const CartItem = ({ item, closeCart }) => {
  const navigate = useNavigate();
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <span
          className="cursor-pointer"
          onClick={() => {
            navigate(
              {
                pathname: `${process.env.PUBLIC_URL}/product/${title}&${id}/`,
              },
              {
                state: {
                  id: id,
                },
              }
            );
            closeCart();
          }}
        >
          <img className="max-w-[80px]" src={image} alt="preview" />
        </span>
        <div className="w-full flex flex-col">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <p
              onClick={() => {
                navigate(
                  {
                    pathname: `${process.env.PUBLIC_URL}/product/${title}&${id}/`,
                  },
                  {
                    state: {
                      id: id,
                    },
                  }
                );
                closeCart();
              }}
              className="cursor-pointer text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </p>

            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id, item?.selectedSize)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>

          <div className=" flex mt-2 space-x-12">
            {/* <div className="mb-2">
              <span className="font-semibold">Size : </span>{" "}
              <span className="font-semibold">{item?.selectedSize}</span>
            </div> */}
            <div className="flex gap-2 flex-1  items-center">
              <button
                onClick={() => decreaseAmount(id, item?.selectedSize)}
                className="border-none h-5 w-5"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="none" fillRule="evenodd" stroke="#330">
                    <circle cx="8" cy="8" r="7.5"></circle>
                    <path stroke-linecap="square" d="M4.706 8h6.588"></path>
                  </g>
                </svg>
              </button>
              <span className="h-full flex justify-center items-center">
                {amount}
              </span>
              <button
                onClick={() => increaseAmount(id, item?.selectedSize, true)}
                className="border-none h-5 w-5"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g fill="none" fillRule="evenodd" stroke="#330">
                    <circle cx="8" cy="8" r="7.5"></circle>
                    <path
                      stroke-linecap="square"
                      d="M4.706 8h6.588M8 4.706v6.588"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex  h-[36px] text-sm">
            {/* quantity */}

            {/* <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="h-full flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id, { toast: true })}
                className="h-full flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div> */}
            {/* item price */}
            <div className="flex flex-1 mt-2 ">
              <span className="font-semibold">
                {formatCurrencyInINR(item?.cost_price)}
              </span>
            </div>
            {/* final price */}
            <div className="flex flex-2 justify-end items-center text-primary font-medium">
              {/* {`${amount} x ${formatCurrencyInINR(
                item?.cost_price
              )} = ${formatCurrencyInINR(item?.cost_price * amount)}`} */}
              {`${formatCurrencyInINR(item?.cost_price * amount)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
