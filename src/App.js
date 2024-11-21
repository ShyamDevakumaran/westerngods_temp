import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  AllItems,
  B2B,
  Contact,
  Homepage,
  Orders,
  OurStory,
  PrivacyPolicy,
  ProductDetails,
  Profile,
  ShippingPolicy,
  TermsAndServices,
} from "./routes/Routes";
import PublicLayout from "./layout/PublicLayout";
import { Page404 } from "./components/Component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import EventBus from "./common/EventBus";
import { toastfunc } from "./components/toast-style/toast-style";
import { logoutUser } from "./redux/thunks/auth";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Otp from "./pages/Login/Otp";
import Register from "./pages/Login/Register";
import ProductCollections from "./components/Collections/ProductCollections";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser());
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    // EventBus.on("logout", () => {
    //   localStorage.clear();
    //   // Show Alert dialog as Login has expired
    //   Swal.fire({
    //     title: "Warning!",
    //     text: "Your Login Expired",
    //     icon: "warning",
    //     confirmButtonText: "Login",
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       logOut();
    //     }
    //   });
    // });

    EventBus?.on("logout", () => {
      // localStorage.clear();
      logOut();
    });

    EventBus?.on("error", (errdata) => {
      errdata?.map((item) => toastfunc(item));
    });

    //for unique and unique values already in use
    EventBus?.on("unique", (errdata) => {
      toastfunc(errdata);
    });
    //

    // clear Events
    return () => {
      EventBus.remove("error");
      EventBus.remove("unique");
    };
  }, [logOut]);
  return (
    <div className="overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PublicLayout />}>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              element={<Homepage />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/b2b`}
              element={<B2B />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/our-story`}
              element={<OurStory />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-us`}
              element={<Contact />}
            />

            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/otp" element={<Otp />}></Route>
            <Route path="/account/register" element={<Register />}></Route>
            {/* <Route path="/password" element={<Password />}></Route> */}

            <Route path="/all_products" element={<AllItems />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/my/orders" element={<Orders />}></Route>

            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route
              path="/terms-and-service"
              element={<TermsAndServices />}
            ></Route>
            <Route path="/shipping-policy" element={<ShippingPolicy />}></Route>
            <Route
              path="/collection/:name"
              element={<ProductCollections />}
            ></Route>
            <Route path="/collection/" element={<ProductCollections />}></Route>
          </Route>

          {/* Error 404 Page */}
          <Route path="*" element={<Page404 />} />
          {/* Error 404 Page */}
        </Routes>
      </BrowserRouter>
      {/* <ToastStyle>
        <ToastContainer />
      </ToastStyle> */}
    </div>
  );
}

export default App;
