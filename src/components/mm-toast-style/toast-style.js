import styled from "styled-components";

// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";

export const ToastStyle = styled.div`
  .Toastify__toast-container--top-right {
    top: 0em;
    right: 0em;
  }
  .Toastify__toast--error {
    border: 1px solid #eb5757;
    border-radius: 10px !important;
    background: #fae1e2 !important;
    width: auto;
    scale: 0.75;
    margin-bottom: -0.75vw;
  }
  .Toastify__toast--success {
    border: 1px solid transparent;
    border-radius: 10px !important;
    background: #eef7ff !important;
    width: auto;
    scale: 0.75;
    margin-bottom: -0.75vw;
    color: #002379 !important;
  }
  // .Toastify__toast--error::after {
  //   // content: url("../assets/images/svg/closeToast.svg"); // Your svg Path
  //   position: absolute;
  //   color: #333333;
  //   font-size: 15px;
  //   font-weight: 700;
  //   left: 265px;
  //   padding-top: 14px !important;
  // }
  // .Toastify__toast--error::before {
  //   // content: url("../assets/images/svg/errorToast.svg"); // Your svg Path
  //   position: relative;
  //   z-index: 100000;
  //   left: 12px;
  //   top: 6px;
  // }
`;

export const toastfunc = (message) => {
  toast.error(message, {
    position: "top-right",
    theme: "light",
    autoClose: 1750,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastsuccess = (message) => {
  toast.success(message);
};
