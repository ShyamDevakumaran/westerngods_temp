import React, { useState, useContext, useEffect, useRef } from "react";
import {
  IoMdArrowBack,
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdClose,
} from "react-icons/io";
import { SideMenuContext } from "../../contexts/SideMenuContext";
import { useNavigate } from "react-router-dom";

// Menubar Component
const Menubar = () => {
  const navigate = useNavigate();
  const { isMenuOpen, handleClose } = useContext(SideMenuContext);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const MenuRef = useRef(null);
  const subMenuRef = useRef(null);

  const menuList = [
    {
      menu: "Shop",
      // submenu: [
      //   {
      //     categoty: "Sarees & Blouses",
      //     items: [
      //       { name: "Sarees", path: "" },
      //       { name: "Blouses", path: "" },
      //       { name: "Cholis", path: "" },
      //     ],
      //   },
      //   {
      //     categoty: "Kurtis",
      //     items: [
      //       { name: "Anarkali", path: "" },
      //       { name: "A-Line", path: "" },
      //       { name: "Straight Cut", path: "" },
      //     ],
      //   },
      //   {
      //     categoty: "Anarkalis & Salwars",
      //     items: [
      //       { name: "Anarkalis", path: "" },
      //       { name: "Salwars", path: "" },
      //       { name: "Dupattas", path: "" },
      //     ],
      //   },
      // ],
    },
    {
      menu: "About",
    },
    // Add more top-level items as needed
  ];

  const handleMenuClick = (index) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(null);
      setActiveSubMenuIndex(null); // Close submenu if the same menu is clicked
    } else {
      setActiveMenuIndex(index);
      setActiveSubMenuIndex(null); // Close any open submenu
    }
  };

  const handleClickOutsideBag = (event) => {
    if (
      MenuRef.current &&
      !MenuRef.current.contains(event.target) &&
      subMenuRef.current &&
      !subMenuRef.current.contains(event.target)
    ) {
      closeMenus();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideBag);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideBag);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideBag);
    };
  }, [isMenuOpen]);

  const handleSubMenuClick = (index) => {
    if (activeSubMenuIndex === index) {
      setActiveSubMenuIndex(null); // Close submenu if the same item is clicked
    } else {
      setActiveSubMenuIndex(index); // Open the selected submenu
    }
  };

  const closeMenus = () => {
    handleClose();
    setActiveMenuIndex(null);
    setActiveSubMenuIndex(null);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex">
      <div
        ref={MenuRef}
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed top-0 h-full shadow-2xl bg-white border-r border-gray-300 w-full md:w-[25vw] lg:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-6`}
      >
        <div className="flex items-center justify-between py-6 ">
          <div className="uppercase text-base font-Viesharafont self-center ml-5">
            Menu
          </div>
          <div onClick={closeMenus} className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdClose className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-full overflow-y-auto overflow-x-hidden">
          {!isMobile || activeMenuIndex === null ? (
            <ul>
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 font-Viesharafont relative"
                >
                  <div
                    className="flex justify-between items-center px-4 py-4 cursor-pointer"
                    onClick={() => {
                      if (menu?.submenu) {
                        handleMenuClick(index);
                      }
                    }}
                  >
                    <div className="text-xl hover:text-[#696b79]">
                      {menu.menu}
                    </div>
                    {menu?.submenu && (
                      <button className="focus:outline-none">
                        {activeMenuIndex === index ? (
                          <IoMdArrowDropdown />
                        ) : (
                          <IoMdArrowDropright />
                        )}
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="relative md:p-4">
              <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-base font-Viesharafont self-center ml-5">
                  {menuList[activeMenuIndex].menu}
                </div>
                <div onClick={() => setActiveMenuIndex(null)} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                  <IoMdArrowBack className="text-2xl" />
                </div>
              </div>
              <ul>
                {menuList[activeMenuIndex]?.submenu &&
                  menuList[activeMenuIndex]?.submenu.map((child, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative border-b border-gray-300"
                    >
                      <div
                        className="flex justify-between items-center px-4 py-4 cursor-pointer"
                        onClick={() => handleSubMenuClick(subIndex)}
                      >
                        <div className="text-lg ">{child.categoty}</div>
                        {child?.items?.length > 0 && (
                          <button className="focus:outline-none ml-2">
                            {activeSubMenuIndex === subIndex ? (
                              <IoMdArrowDropdown />
                            ) : (
                              <IoMdArrowDropright />
                            )}
                          </button>
                        )}
                      </div>
                      {activeSubMenuIndex === subIndex && child.items && (
                        <ul className="pl-4">
                          {child.items.map((item, itemIndex) => (
                            <li
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(
                                  {
                                    pathname: `${process.env.PUBLIC_URL}${item.path}`,
                                  },
                                  {
                                    state: {
                                      id: item.id,
                                    },
                                  }
                                );
                                closeMenus();
                              }}
                              key={itemIndex}
                              className="text-gray-800 py-2 text-lg"
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <div className="flex px-4 py-3 border-b border-gray-300">
            <a href="/account/login" className="text-xl font-Viesharafont">
              Login
            </a>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div
          ref={subMenuRef}
          className={`${
            activeMenuIndex !== null
              ? "left-[calc(25vw)] lg:left-[calc(30vw)]"
              : "-left-full"
          } fixed top-0 bg-white shadow-lg border border-gray-300 w-full md:w-[35vw] h-full z-30 transition-all duration-300`}
        >
          {activeMenuIndex !== null && (
            <div className="relative ">
              <div className="flex items-center justify-between py-6 border-b">
                <div className="uppercase text-base font-Viesharafont self-center ml-5">
                  {menuList[activeMenuIndex]?.menu}
                </div>
                <div
                  onClick={() => setActiveMenuIndex(null)}
                  className="cursor-pointer w-8 h-8 flex justify-center items-center"
                >
                  <IoMdArrowBack className="text-2xl" />
                </div>
              </div>
              <div>
                <ul>
                  {menuList[activeMenuIndex]?.submenu &&
                    menuList[activeMenuIndex]?.submenu.map((child, subIndex) => (
                      <li
                        key={subIndex}
                        className="relative border-b border-gray-300"
                      >
                        <div
                          className="flex justify-between items-center px-4 py-4 cursor-pointer"
                          onClick={() => {
                            if (child?.items) {
                              handleSubMenuClick(subIndex);
                            }
                          }}
                        >
                          <div className="text-lg">{child.categoty}</div>
                          {child?.items && (
                            <button className="focus:outline-none ml-2">
                              {activeSubMenuIndex === subIndex ? (
                                <IoMdArrowDropdown />
                              ) : (
                                <IoMdArrowDropright />
                              )}
                            </button>
                          )}
                        </div>
                        {activeSubMenuIndex === subIndex && child.items && (
                          <ul className="pl-4">
                            {child.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(
                                    {
                                      pathname: `${process.env.PUBLIC_URL}${item.path}`,
                                    },
                                    {
                                      state: {
                                        id: item.id,
                                      },
                                    }
                                  );
                                  closeMenus();
                                }}
                                className="text-gray-800 py-2 text-lg"
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menubar;
