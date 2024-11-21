import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import NoItemsFound from "../NoItemsFound/NoItemsFound";
import { formatCurrencyInINR, siteLink, whatsappNum } from "../../utils/Utils";
import Loader from "../../components/Loader/Loader";
import ReactImageMagnify from "react-image-magnify";
import { IoMdHeartEmpty } from "react-icons/io";
import secureLocalStorage from "react-secure-storage";
import { toastsuccess } from "../toast-style/toast-style";
import { ProductFaq } from "../Component";
import { getHomeItemsImage, getProductById } from "../../redux/thunks/product";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
} from "../../redux/thunks/wishlist";
import { FaWhatsapp } from "react-icons/fa";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const productId = location?.state?.id;
  const [wishlist, setwishlist] = useState(false);
  const [paramId, setParamId] = useState(undefined);
  const [is_in_wishlist, setis_in_wishlist_data] = useState(false);
  const { addToCart } = useContext(CartContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const item_id = id?.split("&")[1];

  const addWishlist = async () => {
    const adddata = {
      item_id: item_id,
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

  const { homeItemsList } = useSelector((state) => state.productReducer);

  const params = id?.split("&");
  const { productInfo, isLoading: loading } = useSelector(
    (state) => state.productReducer
  );

  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    homeItemsList?.map((obj) => {
      obj.id == id && setis_in_wishlist_data(obj?.is_in_wishlist);
    });
  }, [homeItemsList, id]);

  useEffect(() => {
    setMainImage(productInfo?.image);
  }, [productInfo]);

  useEffect(() => {
    if (productId === undefined) {
      setParamId(id?.split("&")[1]);
    }
  }, [id, productId]);

  useEffect(() => {
    if (paramId === undefined) {
      productId && dispatch(getProductById({ id: productId }));
    } else {
      paramId && dispatch(getProductById({ id: paramId }));
    }
  }, [dispatch, productId, paramId]);

  // useEffect(() => {
  //   if (productId === undefined) {
  //     params[1] && dispatch(getProductById({ id: params[1] }));
  //   }
  // }, [dispatch, productId, id, params]);

  const changeMainImage = (src) => {
    setMainImage(src);
  };

  useEffect(() => {
    dispatch(getHomeItemsImage());
  }, [dispatch]);

  const enquireProduct = () => {
    const message =
      `Hi there, I want to enquire/order about the product\n\n` +
      `${productInfo?.name} \n\n` +
      `*Description:* ${productInfo?.product_description}\n` +
      `*Price:* ${formatCurrencyInINR(productInfo?.cost_price)}\n\n` +
      `To see this item, click:\n ${siteLink}/product/${
        productInfo?.name
      }&${productInfo?.id}/\n\n`;

    const whatsappLink = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : productId == undefined && productInfo == undefined ? (
        <NoItemsFound />
      ) : (
        <>
          <section className="pt-6 lg:pt-[40px] pb-12 lg:pb-[100px] lg:m-0 m-6 h-auto flex  items-center">
            <div className="container mx-auto">
              {/* Image and text wrapper */}
              <div className="flex flex-col lg:flex-row items-center">
                {/* Image and Thumbnails */}
                <div className="flex-1 relative flex flex-col items-center lg:items-center">
                  {/* Main Image with Overlay */}
                  <div className="max-w-full relative z-10 lg:max-w-lg">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: mainImage,
                        },
                        largeImage: {
                          src: mainImage,
                          width: 1200,
                          height: 1800,
                        },
                        enlargedImageContainerDimensions: {
                          width: "120%", // Optional: You can adjust this to change the size of the container
                          height: "100%",
                        },
                        enlargedImageContainerStyle: {
                          zIndex: 50,
                          position: "absolute",
                        },
                      }}
                    />
                  </div>

                  <div className="flex mt-4 space-x-2 overflow-x-auto justify-center">
                    {productInfo?.item_images?.map((image, idx) => (
                      <div className="flex-shrink-0" key={idx}>
                        <img
                          src={image.item_image}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-24 h-24 object-cover cursor-pointer"
                          onClick={() => changeMainImage(image?.item_image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1  lg:text-left mt-10 lg:mt-0 relative z-1">
                  <h1 className="text-[26px] font-basefont font-medium mb-5 max-w-[450px] mx-auto lg:mx-0">
                    {productInfo?.name}
                  </h1>
                  <h3 className="text-[26px] font-basefont font-medium mb-5 max-w-[450px] mx-auto lg:mx-0 text-black">
                    {productInfo?.brand}
                  </h3>
                  <div className="text-xl text-black font-normal mb-6">
                    {formatCurrencyInINR(productInfo?.price)}
                  </div>
                  <p className="text-sm font-basefont font-normal mb-3  text-black">
                    Tax included. Shipping calculated at checkout.
                  </p>
                  <div className="flex gap-6">
                    <button
                      onClick={() =>
                        // addToCart(productInfo, productInfo?.id, selectsize)
                        addToCart(productInfo, productInfo?.id)
                      }
                      className="bg-gray-800 mt-5 font-basefont   rounded-md lg:py-2 py-3 px-8 text-white mb-8 hover:bg-gray-600"
                    >
                      Add to Cart
                    </button>
                    {/* <button
                                            onClick={() =>
                                                addToCart(productInfo, productInfo?.id, selectsize)
                                            }
                                            className="mt-5 rounded-md lg:py-2 py-3 px-8 text-white mb-8 border font-basefont text-black  bg-lbluecolor rounded-md text-black 
                                            hover:bg-basecolor hover:text-white"
                                        >
                                            Share
                                        </button> */}
                    <button
                      onClick={() =>
                        // addToCart(productInfo, productInfo?.id, selectsize)
                        // addToCart(productInfo, productInfo?.id)
                        enquireProduct()
                      }
                      className="mt-5 rounded-md lg:py-2 py-3 px-8 mb-8
                                             border text-black bg-white font-basefont rounded-md 
                                             flex items-center gap-2 hover:bg-gray-200"
                    >
                      <FaWhatsapp className="text-green-500" />
                      Enquire
                    </button>
                  </div>

                  <h4 className="text-lg text-black font-basefont font-medium mb-3">
                    Product Description
                  </h4>
                  <p className="text-sm font-basefont mb-5 max-w-[550px] mx-auto lg:mx-0">
                    &#9679; {productInfo?.product_description}
                  </p>
                  {productInfo?.box_description != null && (
                    <>
                      <h4 className="text-lg text-black font-basefont font-medium mb-3">
                        What’s in the box
                      </h4>
                      <p className="text-sm font-basefont mb-5 max-w-[550px] mx-auto lg:mx-0">
                        &#9679; {productInfo?.box_description}
                      </p>
                    </>
                  )}
                  <h4 className="text-lg text-black font-basefont font-medium mb-3">
                    Disclaimer
                  </h4>
                  <p className="text-sm font-basefont mb-5 max-w-[550px] mx-auto lg:mx-0">
                    &#9679; Product color may slightly vary due to photographic
                    lighting sources and screen settings.
                  </p>
                  <div className="flex gap-2 text-lg font-bold font-basefont cursor-pointer">
                    <span className="mt-1 font-bold">
                      {wishlist == true ? (
                        is_in_wishlist == true ? (
                          <button
                            className="flex hover:text-basecolor"
                            onClick={() => deleteWishlist(item_id)}
                          >
                            <IoMdHeartEmpty
                              className="text-3xl hover:text-basecolor"
                              color="red"
                              fill="red"
                            />
                            <span>Added in Favorites</span>
                          </button>
                        ) : (
                          <button
                            className="flex hover:text-basecolor"
                            onClick={() => addWishlist()}
                          >
                            <IoMdHeartEmpty className="text-3xl text-black hover:text-basecolor" />
                            <span>Add to Favorites</span>
                          </button>
                        )
                      ) : (
                        <button
                          className="flex hover:text-basecolor"
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
                          <IoMdHeartEmpty className="text-3xl text-black hover:text-basecolor" />{" "}
                          <span>Add to Favorites</span>
                        </button>
                      )}
                    </span>
                  </div>
                  <hr className="h-px my-5 lg:w-[540px] w-full" />
                  <div className="flex lg:gap-3 items-center justify-center lg:justify-start">
                    <TbTruckDelivery size={30} />
                    <p className="text-md font-basefont mt-1">
                      Product will be delivered within 4 to 8 working days.
                    </p>
                  </div>
                  <hr className="h-px my-5 lg:w-[540px] w-full" />
                </div>
              </div>
            </div>
          </section>
          <ProductFaq />
        </>
      )}
    </>
  );
};

export default ProductDetails;

// import React from 'react'

// const ProductDetails = () => {
//   return (
//     <div>ProductDetails</div>
//   )
// }

// export default ProductDetails
