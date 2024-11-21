import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../assets/images/banner1.jpg";
import { useNavigate } from "react-router-dom";
import { otpVerify } from "../../redux/thunks/auth";
import {
  toastfunc,
  toastsuccess,
} from "../../components/toast-style/toast-style";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const email = sessionStorage.getItem("email");
  const { isLoading: loading } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (email) {
      return;
    } else {
      navigate(`${process.env.PUBLIC_URL}/account/login`);
    }
  }, [email, navigate]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const adddata = {
      otp,
      email,
    };
    try {
      await dispatch(otpVerify(adddata)).unwrap();
      // toastfunc("OTP Verified Successfully");
      sessionStorage.removeItem("email");
    } catch (error) {
      console.log(error);
    }
    //  await dispatch(otpVerify(adddata, navigate));
    //  if (store.getState().authOtpVerify.hasOwnProperty("error") == false) {
    //     toastsuccess("OTP Verified Successfully");
    //    sessionStorage.removeItem("email");
    //  }
  };

  return (
    //  <section className="bg-gray-50 ">
    //    <div className="relative  bg-white font-basefont">
    //      <img
    //        className="opacity-35 w-full h-96 lg:h-full"
    //        src={img1}
    //        alt="Background"
    //      />
    //      <div className="text-black absolute inset-0 flex flex-col items-center justify-center lg:p-10">
    //        <div class="flex min-h-full   flex-col justify-center px-6 py-12 lg:px-8">
    //          <div class="sm:mx-auto sm:w-full sm:max-w-md">
    //            <h2 class="mb-3 text-center text-2xl font-medium font-testfont leading-9 tracking-tight text-gray-900">
    //              Verify OTP
    //            </h2>
    //            <h4 className="font-basefont text-center text-gray-800 px-8 ">
    //              Enter your OTP received in your Email
    //            </h4>
    //          </div>

    //          <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    //            <form class="space-y-6" onSubmit={handleOtpSubmit}>
    //              <div>
    //                <div class="">
    //                  <input
    //                    type="text"
    //                    id="otp"
    //                    value={otp}
    //                    onChange={(e) => setOtp(e.target.value)}
    //                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
    //                    placeholder="Enter your OTP"
    //                    required
    //                  />
    //                </div>
    //              </div>

    //              <div>
    //                <button
    //                  type="submit"
    //                  class="flex w-full justify-center rounded-md bg-buttoncolor
    //                   px-3 py-2.5 text-sm font-semibold
    //                  leading-6 text-white shadow-sm "
    //                >
    //                  Verify OTP
    //                </button>
    //              </div>
    //            </form>
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  </section>
    <div className="bg-gray-50 font-basefont">
      <div className=" flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="mb-3 text-center text-2xl font-medium font-basefont leading-9 tracking-tight text-gray-900">
              Verify OTP
            </h2>
            <h4 className="font-basefont text-center text-gray-800 px-8 ">
              Enter your OTP received in your Email
            </h4>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleOtpSubmit}>
                <div>
                  <div className="">
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your OTP"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm  rounded-lg border border-basecolor  bg-lbluecolor rounded-md text-black 
                   hover:bg-basecolor hover:text-white"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
