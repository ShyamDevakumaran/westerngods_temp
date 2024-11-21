import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import NoWishlist from "./NoWishlist";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WishListProducts from "../../components/Product/WishListProducts";
import { getWishlistProducts } from "../../redux/thunks/wishlist";
import EmptyWishlist from "./EmptyWishlist";
import Login from "../Login/Login";

const Wishlist = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { wishlistItems, isLoading: loading } = useSelector(
    (state) => state.wishlistReducer
  );

  useEffect(() => {
    secureLocalStorage?.getItem("pref")?.token &&
      dispatch(getWishlistProducts());
  }, [dispatch]);

  return (
    <>
      {secureLocalStorage?.getItem("pref")?.token ? (
        wishlistItems?.length != 0 ? (
          <>
            <section className="mt-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 font-medium font-basefont lg:grid-cols-4 xl:grid-cols-4 lg:mx-10 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                  {wishlistItems?.length > 0 &&
                    wishlistItems?.map((product, idx) => {
                      return (
                        <WishListProducts
                          wishlistID={product?.id}
                          product={product?.product}
                          dispatchFunc={getWishlistProducts()}
                          key={idx}
                        />
                      );
                    })}
                </div>
              </div>
            </section>
          </>
        ) : (
          <EmptyWishlist />
        )
      ) : (
        <Login />
      )}
    </>
  );
};

export default Wishlist;
