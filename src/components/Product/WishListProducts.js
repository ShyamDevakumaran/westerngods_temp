import React, { useContext, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { formatCurrencyInINR } from "../../utils/Utils";
import { useDispatch } from "react-redux";
import { MdClear } from "react-icons/md";
import { toastsuccess } from "../../components/toast-style/toast-style";
import { deleteProductFromWishlist } from "../../redux/thunks/wishlist";

const WishListProducts = ({ product, dispatchFunc, wishlistID }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sizeModal, SetSizeModal] = useState(false);
  const [selectsize, setselectsize] = useState();
  const [cartProduct, SetCartProduct] = useState();
  const { addToCart } = useContext(CartContext);
  const { id, image, name, selling_price, description } = product;

  const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];

  const deleteWishlist = async (id, deletetoast) => {
    try {
      await dispatch(deleteProductFromWishlist(id)).unwrap();
      setTimeout(() => {
        dispatch(dispatchFunc);
      }, 600);
      if (deletetoast == true) {
        toastsuccess("Item removed from wishlist.");
      } else {
        toastsuccess("Item moved to bag.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectSize = (size) => {
    setselectsize(size);
  };

  const handleAddToCart = (product, id) => {
    SetCartProduct(product);
    SetSizeModal(true);
  };

  const cartAdd = () => {
    addToCart(cartProduct, cartProduct?.id, selectsize, false);
    deleteWishlist(wishlistID, false);
    setselectsize();
    SetCartProduct();
    SetSizeModal(false);
  };

  const closeSizeModal = () => {
    setselectsize();
    SetCartProduct();
    SetSizeModal(false);
  };

  return (
    <div className="mb-7">
      <div className="border border-[#e4e4e4] h-[400px] mb-4 relative overflow-hidden group transition">
        <div className="w-full md:h-full h-64 flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full cursor-pointer object-cover hover:scale-105 transition-all duration-500"
              onClick={() => {
                navigate(
                  {
                    pathname: `${process.env.PUBLIC_URL}/product/${id}/`,
                  },
                  {
                    state: {
                      id: id,
                    },
                  }
                );
              }}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => handleAddToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-10 h-10 rounded bg-gray-900">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <button onClick={() => deleteWishlist(wishlistID, true)}>
            <div className="flex justify-center items-center text-black hover:bg-white hover:rounded hover:text-black w-10 h-10 ">
              <MdClear className="text-3xl " />
            </div>
          </button>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        {/* <div className="text-xl uppercase font-mfont text-black font-bold mb-1">{category}</div> */}
        <p
          onClick={() => {
            navigate(
              {
                pathname: `${process.env.PUBLIC_URL}/product/${id}/`,
              },
              {
                state: {
                  id: id,
                },
              }
            );
          }}
          className="hover:text-blue-500"
        >
          <h2 className=" font-testfont font-normal mb-1">{name}</h2>
        </p>
        {/* <div className="text-md font-mfont text-black font-bold mb-1">
        {description}
      </div> */}
        <h2 className=" font-testfont font-normal text-sm text-black">
          {formatCurrencyInINR(product?.cost_price)}
        </h2>
      </div>
      <>
        {sizeModal && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded shadow-lg h-auto w-96 ">
              <button
                className="absolute top-2 right-2  text-black p-2 h-10 w-8 flex items-center justify-center w-10"
                onClick={() => closeSizeModal()}
              >
                X{" "}
              </button>
              <div className="flex gap-x-4 py-1  border-gray-200 w-full ">
                <div className="w-full min-h-[150px] flex items-center gap-x-4">
                  <span className="cursor-pointer">
                    <img
                      className="max-w-[80px]"
                      src={cartProduct?.image}
                      alt="preview"
                    />
                  </span>
                  <div className="w-full flex flex-col">
                    <div className="flex justify-between ">
                      <p className=" text-sm mb-3 uppercase font-medium  text-gray-900">
                        {cartProduct?.name}
                      </p>
                    </div>
                    <p className=" text-sm mb-2 font-normal  text-gray-900">
                      {cartProduct?.product_description}
                    </p>
                    <p className=" text-sm mb-1 font-medium font-testfont  text-gray-900">
                      {formatCurrencyInINR(cartProduct?.cost_price)}
                    </p>
                    <p className="border-b bg-gray-200 mt-2 mb-1"></p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <p className=" text-md font-medium  font-testfont text-gray-900">
                  Select Size
                </p>
                <div className="flex gap-5 mt-2">
                  {sizes?.map((size) => (
                    <button
                      onClick={() => handleSelectSize(size)}
                      className={`rounded-full  flex border border-gray-900 text-black hover:bg-gray-900 hover:text-white p-2 ${
                        selectsize === size
                          ? "bg-gray-900  text-white  border-0"
                          : "hover:bg-gray-900 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => cartAdd()}
                  disabled={selectsize == undefined}
                  className="bg-gray-800 uppercase mt-5 w-full  rounded-md py-2 px-4 text-white  hover:bg-gray-600"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default WishListProducts;
