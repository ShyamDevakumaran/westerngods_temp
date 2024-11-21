import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import NoOrders from "./NoOrders";
import { useDispatch } from "react-redux";
import EmptyOrders from "./EmptyOrders";

const Orders = () => {
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
  return (
    <div>
      {!secureLocalStorage.getItem("pref")?.token ? (
        <NoOrders />
      ) : (
        <>
          <EmptyOrders />
        </>
      )}
    </div>
  );
};

export default Orders;
