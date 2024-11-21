import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { toastfunc, toastsuccess } from "../mm-toast-style/toast-style";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { formatCurrencyInINR } from "../../utils/Utils";
import { IoMdHeartEmpty } from "react-icons/io";
import { Loader } from "../Component";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
} from "../../redux/thunks/wishlist";
import { getHomeItemsImage } from "../../redux/thunks/product";

const Product = ({ product, dispatchFunc }) => {
  const [sizeModal, SetSizeModal] = useState(false);
  const [selectsize, setselectsize] = useState();
  const [cartProduct, SetCartProduct] = useState();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [wishlist, setwishlist] = useState(false);
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.addWishlist);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const addWishlist = async () => {
    const adddata = {
      item_id: id,
    };

    try {
      await dispatch(addProductToWishlist(adddata)).unwrap();
      setTimeout(() => {
        dispatch(getHomeItemsImage());
      }, 600);
      toastsuccess("Item added to wishlist.");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWishlist = async (id) => {
    try {
      await dispatch(deleteProductFromWishlist(id)).unwrap();
      setTimeout(() => {
        dispatch(getHomeItemsImage());
      }, 600);
      toastsuccess("Item removed from wishlist.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (secureLocalStorage.getItem("pref")?.token) {
      setwishlist(true);
    }
  }, []);

  const handleAddToCart = (product, id) => {
    SetCartProduct(product);
  };

  const cartAdd = (product, productId) => {
    // if (selectsize == undefined) {
    //   toastfunc("select size");
    // } else {
    addToCart(product, productId);
    SetCartProduct();
    SetSizeModal(false);
    // }
  };

  // destructure product
  const { id, image, name, cost_price, description, is_in_wishlist } = product;

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className="mb-7">
        <div className="border border-[#e4e4e4] lg:h-[300px] h-[200px]  mb-4 relative overflow-hidden group transition">
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
                      pathname: `${process.env.PUBLIC_URL}/product/${name}&${id}/`,
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
          <div className="absolute top-1 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {wishlist == true ? (
              is_in_wishlist == true ? (
                <button onClick={() => deleteWishlist(product?.wishlist_id)}>
                  <div className="flex justify-center items-center text-white w-12 h-12 ">
                    <IoMdHeartEmpty
                      className="text-3xl "
                      color="red"
                      fill="red"
                    />
                  </div>
                </button>
              ) : (
                <button onClick={() => addWishlist()}>
                  <div className="flex justify-center items-center text-white w-12 h-12 ">
                    <IoMdHeartEmpty className="text-3xl text-white" />
                  </div>
                </button>
              )
            ) : (
              <button
                onClick={() =>
                  navigate(
                    {
                      pathname: `${process.env.PUBLIC_URL}/wishlist`,
                    },
                    {
                      state: {
                        text: "Login to add items in your Wishlist.",
                      },
                    }
                  )
                }
              >
                <div className="flex justify-center items-center text-white w-12 h-12 ">
                  <IoMdHeartEmpty className="text-3xl text-white" />
                </div>
              </button>
            )}

            <button onClick={() => cartAdd(product, id)}>
              <div className="flex justify-center items-center text-white w-10 h-10 rounded bg-gray-900">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            {/* <button onClick={() => addWishlist()}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-white">
              {wishlist == true ? (
                <BsHeartFill className="text-3xl text-gray-900" />
              ) : (
                <BsHeartFill className="text-3xl text-red-700" />
              )}
            </div>
          </button> */}
          </div>
        </div>
        {/* category, title & price */}
        <div>
          {/* <div className="text-xl uppercase font-mfont text-black font-bold mb-1">{category}</div> */}
          <p
            onClick={() => {
              navigate(
                {
                  pathname: `${process.env.PUBLIC_URL}/product/${name}&${id}/`,
                },
                {
                  state: {
                    id: id,
                  },
                }
              );
            }}
            className="hover:text-blue-500 cursor-pointer"
          >
            <h2 className=" font-testfont font-normal mb-1 cursor-pointer">
              {name}
            </h2>
          </p>
          {/* <div className="text-md font-mfont text-black font-bold mb-1">
          {description}
        </div> */}
          <h2 className="cursor-pointer font-testfont font-normal text-sm text-black">
            {formatCurrencyInINR(cost_price)}
          </h2>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Product;
