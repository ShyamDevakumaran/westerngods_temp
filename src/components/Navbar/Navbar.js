/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { AiOutlineQuestionCircle } from "react-icons/ai";
// const Navbar = () => {
//   return (
//     <nav className="bg-white font-basefont  w-full top-0  ">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-5 lg:px-10 px-5">
//         <a href="/" className="flex text-black items-center text-2xl font-semibold">
//           Western Gods
//         </a>

//         <div className="flex text-black flex  items-center underline gap-5 text-base">

//           <div className="hidden md:block">

//           </div>
//           <a className="text-lg cursor-pointer" href="/login">
//             <svg
//               className="cursor-pointer"
//               aria-hidden="true"
//               fill="none"
//               focusable="false"
//               width="24"
//               class="header__nav-icon icon icon-account"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               ></path>
//               <path
//                 d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 stroke-miterlimit="10"
//               ></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { SidebarContext } from "../../contexts/SidebarContext";
import { SideMenuContext } from "../../contexts/SideMenuContext";
import { Link, useNavigate } from "react-router-dom";

import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdClose,
} from "react-icons/io";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
// import { logoutUserAction } from "../../Redux/Action/Auth";
import logo from "../../assets/logo/logo.jpg";
import { GoHeart } from "react-icons/go";
import { RiCoupon2Line } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineContactSupport } from "react-icons/md";
import { logoutUser } from "../../redux/thunks/auth";
import { BiLogOut } from "react-icons/bi";
import { toastfunc } from "../toast-style/toast-style";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(SideMenuContext);
  const [isHoverBag, setHoverBag] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [userName, SetUserName] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [isMobUserOpen, setMobUserOpen] = useState(false);
  const [isMobBagOpen, setMobBagOpen] = useState(false);
  const [isShopOpen, setShopOpen] = useState(false);
  const [isSearchContent, setIsSearchContent] = useState(false);

  const target = useRef(null);
  const trigger = useRef(null);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const navigate1 = useNavigate();

  useEffect(() => {
    SetUserName(secureLocalStorage.getItem("pref")?.name);
    SetUserEmail(secureLocalStorage.getItem("pref")?.email);
  }, []);

  const handleSignout = async () => {
    localStorage.clear();
    await dispatch(logoutUser());
    toastfunc("Logged Out Successfully");
    navigate1({ pathname: `${process.env.PUBLIC_URL}/` });
    window.location.reload();
  };

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setMobUserOpen((prev) => !prev);
  };

  const handleBagClick = () => {
    setMobBagOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeSearchBar = () => {
    setIsSearchBarOpen(false);
    setIsSearchContent(false);
  };
  return (
    <div className="mx-auto border-b border-gray-200  ">
      <nav className="p-3 top-0 left-0  ">
        <div className="flex justify-between m-1">
          <div className="flex md:hidden block">
            <button
              onClick={handleToggleSearchBar}
              className="inline-flex items-center p-4 lg:px-10 px-6 text-sm text-gray-500 "
            >
              <span className="sr-only">Toggle</span>
              <svg
                className="w-6 h-6 block"
                aria-hidden="true"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap   cursor-pointer justify-center items-center">
            <a
              onClick={() =>
                navigate1({
                  pathname: `${process.env.PUBLIC_URL}/`,
                })
              }
              className="flex items-center cursor-pointer  "
            >
              <img src={logo} className="h-8 mr-5 " alt="logo" />
              {/* <span className="self-center  text-2xl text-black font-basefont font-normal whitespace-nowrap dark:text-white">
                Western Gods
              </span> */}
            </a>
          </div>

          <div className="flex font-basefont md:block hidden ">
            <ul className="flex space-x-4 items-center justify-center text-xl p-2">
              <li
                className="cursor-pointer flex items-center relative text-black"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                Shop{" "}
                <span className="p-1">
                  {" "}
                  <IoMdArrowDropdown />{" "}
                </span>
                {isShopOpen ? (
                  <div className="flex flex-col absolute left-0 z-20 top-10 -mt-3 bg-white border border-[#f5f5f6] rounded-sm shadow-lg w-[200px] p-4">
                    <ul className="flex flex-col space-y-3 items-left text-left  text-[17px]">
                      <li className="text-black hover:font-semibold hover:text-bluecolor ">
                        <a href="/all_products">Cold Pressed Oils</a>
                      </li>
                      <li
                        href="/all_products"
                        className="text-black hover:font-semibold hover:text-bluecolor "
                      >
                        <a href="/all_products">Spices</a>
                      </li>
                      <li
                        href="/all_products"
                        className="text-black hover:font-semibold hover:text-bluecolor "
                      >
                        <a href="/all_products">Honey</a>
                      </li>
                      <li
                        href="/all_products"
                        className="text-black hover:font-semibold hover:text-bluecolor "
                      >
                        <a href="/all_products">Dry Fruits</a>
                      </li>
                      <li
                        href="/all_products"
                        className="text-black hover:font-semibold hover:text-bluecolor "
                      >
                        <a href="/all_products"> Organic Sugar</a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>

              <li className="cursor-pointer text-black hover:font-semibold hover:text-bluecolor  ">
                <a href="/all_products">Combo</a>
              </li>
              <li className="cursor-pointer text-black hover:font-semibold hover:text-bluecolor ">
                <a href="/our-story">Our Story</a>
              </li>
              <li className="cursor-pointer text-black hover:font-semibold hover:text-bluecolor">
                <a href="/b2b">B2B</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-2  rtl:space-x-reverse px-0 py-1 md:gap-2 relative ">
            <div>
              <div
                className="relative cursor-pointer md:block hidden"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
                onClick={handleClick}
              >
                <svg
                  className="cursor-pointer"
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  width="24"
                  class="header__nav-icon icon icon-account"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
                {isProfileOpen || isMobUserOpen ? (
                  <div className="bg-white border border-[#f5f5f6] rounded-sm absolute z-20 pt-1 p-3 w-[250px] shadow-lg right-0">
                    {!secureLocalStorage?.getItem("pref")?.token ? (
                      <>
                        <div>
                          <p className="p-2 py-6 text-sm ">
                            <span className="text-[#3e4152] font-bold">
                              Welcome
                            </span>{" "}
                            <br />
                            To access account and manage orders
                          </p>
                          <div>
                            <p
                              onClick={() =>
                                navigate(
                                  `${process.env.PUBLIC_URL}/account/login`
                                )
                              }
                              className="flex -mt-2 py-1  text-center border border-gray-200 rounded-sm
                          justify-center items-center cursor-pointer font-basefont text-black   hover:border-basecolor hover:text-basecolor  "
                            >
                              LOGIN / SIGNUP
                            </p>
                          </div>
                        </div>
                        <hr className="mt-4" />
                      </>
                    ) : (
                      <>
                        <div
                          onClick={() =>
                            navigate(`${process.env.PUBLIC_URL}/profile`)
                          }
                        >
                          <p className="p-2 py-6 text-sm ">
                            <span className="text-[#3e4152] font-bold">
                              {userName}
                            </span>{" "}
                            <br />
                            {userEmail}
                          </p>
                        </div>
                        <hr />
                      </>
                    )}

                    <ul className=" p-1 py-3 space-y-1">
                      <li className="">
                        <a
                          onClick={(e) => {
                            navigate(`${process.env.PUBLIC_URL}/my/orders`);
                            e.preventDefault();
                          }}
                          className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                        >
                          <span className="text-md mt-1">
                            <HiOutlineShoppingBag />
                          </span>{" "}
                          &nbsp;&nbsp;Orders
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            navigate(
                              {
                                pathname: `${process.env.PUBLIC_URL}/wishlist`,
                              },
                              {
                                state: {
                                  text: "Login to add items in your Wishlist.",
                                },
                              }
                            );
                            e.preventDefault();
                          }}
                          // href="/my/orders "
                          className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                        >
                          <span className="text-md mt-1">
                            <GoHeart />
                          </span>{" "}
                          &nbsp;&nbsp;Wishlist
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            navigate(`${process.env.PUBLIC_URL}/contact-us`);
                            e.preventDefault();
                          }}
                          className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                        >
                          <span className="text-md mt-1">
                            <MdOutlineContactSupport />
                          </span>{" "}
                          &nbsp;&nbsp;Contact us
                        </a>
                      </li>
                    </ul>
                    <hr className="" />
                    <ul className=" p-1 py-3 space-y-1">
                      <li className="">
                        <a
                          onClick={(e) => {
                            navigate(`${process.env.PUBLIC_URL}/coupons`);
                            e.preventDefault();
                          }}
                          className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                        >
                          <span className="text-md mt-1">
                            <RiCoupon2Line />
                          </span>{" "}
                          &nbsp;&nbsp;Coupons
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          onClick={(e) => {
                            navigate(
                              `${process.env.PUBLIC_URL}/account/saved-address`
                            );
                            e.preventDefault();
                          }}
                          className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                        >
                          <span className="text-md mt-1">
                            <FaRegAddressCard />
                          </span>{" "}
                          &nbsp;&nbsp;Saved Address
                        </a>
                      </li>
                      {secureLocalStorage.getItem("pref")?.token && (
                        <>
                          <li className="mb-3">
                            <a
                              onClick={() => handleSignout()}
                              className="text-black hover:font-semibold hover:text-bluecolor flex font-normal text-md "
                            >
                              <span className="text-md mt-1">
                                <BiLogOut />
                              </span>{" "}
                              &nbsp;&nbsp;Logout
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className=" mt-1 md:block hidden">
                <div className="relative">
                  <button onClick={() => setIsSearchBarOpen(true)}>
                    <svg
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      width="24"
                      class="header__nav-icon icon icon-search"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M15.857 15.858 21 21.001"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" flex relative gap-4 text-black hover:text-black cursor-pointer"
            >
              <div
                onMouseEnter={() => setHoverBag(true)}
                onMouseLeave={() => setHoverBag(false)}
                onClick={handleBagClick}
                className="relative"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  width="24"
                  class="header__nav-icon icon icon-cart"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isSearchBarOpen ? (
        <div className="bg-white shadow-lg font-basefont flex md:px-16  items-center py-5 w-full gap-4 h-50">
          <div className="flex items-center w-full px-4">
            <button>
              {" "}
              <svg
                className="w-5 h-5  flex text-gray-00 hover:text-black"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>

            <input
              type="text p-2"
              onKeyUp={() => setIsSearchContent(true)}
              placeholder="Search"
              className="flex-grow p-2 mx-4 border border-gray-300 rounded-lg"
            ></input>

            <button onClick={closeSearchBar}>
              <IoMdClose className="text-2xl" />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {isSearchContent ? (
        <div className="bg-white h-60 flex justify-center items-center px-5">
          <p className="text-center text-justify">
            No results could be found. Please try again with a different query.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
