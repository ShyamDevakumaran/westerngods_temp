import React, { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../CartItem/CartItem";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrencyInINR, siteLink, whatsappNum } from "../../utils/Utils";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const BagRef = useRef(null);

  const handleClickOutsideBag = (event) => {
    if (BagRef.current && !BagRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutsideBag);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideBag);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideBag);
    };
  }, [isOpen]);

  const message =
    `Hi there, I want to enquire/order about the products\n\n` +
    cart
      ?.map(
        (product, index) =>
          `${index + 1}. ${product?.title} \n\n` +
          `*Description:* ${product?.product_description}\n` +
          `*Price:* ${formatCurrencyInINR(product?.cost_price)} x ${product?.amount}\n\n` +
          `To see this item, click:\n ${siteLink}/product/${
            product?.name
          }&${product?.id}/\n\n`
      )
      .join("") +
    `\nTotal cost : ${formatCurrencyInINR(total)}`;

  const whatsappLink = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      ref={BagRef}
      className={`${
        isOpen ? "right-0" : "-right-full"
      } "w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw]
       xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[5px]"`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[480px] md:h-[480px] lg:h-[370px] overflow-y-auto overflow-x-hidden border-b">
        {cart?.map((item) => {
          return <CartItem item={item} key={item.id} closeCart={handleClose} />;
        })}
      </div>
      <div className="flex flex-col gap-y-2  mt-2">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span>
            {formatCurrencyInINR(total)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-0 bg-red-500 text-white w-8 h-8  flex justify-center items-center text-md"
          >
            <FiTrash2 />
          </div>
        </div>
        {/* <a
          href={"/"}
          className="bg-gray-200 flex p-2 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </a> */}
        {cart?.length > 0 ? (
          <p
            // href={whatsappLink}
            onClick={() => {
              // navigate({
              //   pathname: `/bag`,
              // });
              window.open(whatsappLink, "_blank");
              handleClose();
            }}
            className="cursor-pointer bg-gray-900 flex p-2 justify-center items-center text-white w-full font-medium"
          >
            Checkout
          </p>
        ) : (
          <p
            // onClick={() => {
            //   navigate({
            //     pathname: `/bag`,
            //   });
            //   handleClose();
            // }}
            className="cursor-not-allowed bg-gray-500 flex p-2 justify-center items-center text-white w-full font-medium"
          >
            Add items to checkout
          </p>
        )}
        {/* <p
          onClick={() => {
            navigate({
              pathname: `/bag`,
            });
            handleClose();
          }}
          className="cursor-pointer bg-gray-900 flex p-2 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </p> */}
      </div>
    </div>
  );
};

export default Sidebar;
