import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/banner1.jpg";
import { toastfunc, toastsuccess } from "../../components/toast-style/toast-style";
import secureLocalStorage from "react-secure-storage";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/thunks/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = secureLocalStorage.getItem("pref")?.token;

  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { isLoading: loading } = useSelector((state) => state.authReducer);

  const saveData = async () => {
    // e.preventDefault();
    console.log(email);
    const adddata = {
      email,
    };
    sessionStorage.setItem("email", email);
    if (email.includes("gmail.com")) {
      // await dispatch(loginUser(adddata, navigate));
      try {
        await dispatch(loginUser(adddata)).unwrap();
        toastsuccess("OTP sent successfully");
        navigate(`${process.env.PUBLIC_URL}/otp`);
      } catch (error) {
        console.log(error);
      }
      // }  {
      //   toastsuccess("OTP sent successfully");
      //   navigate(`${process.env.PUBLIC_URL}/otp`);
    }
  };

  useEffect(() => {
    if (location.state?.email) {
      location.state?.email && setEmail(location.state.email);
    }
  }, [location?.state?.email]);

  useEffect(() => {
    if (!!token) {
      navigate(
        {
          pathname: `${process.env.PUBLIC_URL}/`,
        },
        {
          replace: true,
        }
      );
    }
  }, [token, navigate]);

  // useEffect(() => {
  //   let emailid = location.state?.email;
  //   if (location.state?.email) {
  //     const adddata = {
  //       email: emailid,
  //     };
  //     sessionStorage.setItem("email", emailid);
  //     dispatch(authUserLoginAction(adddata, navigate));
  //   } else {
  //     return;
  //   }
  // }, [location?.state?.email, dispatch, navigate]);

  return (
    <>
      {/* <section className="bg-gray-50 ">
        <div className="relative  bg-white font-basefont">
          <img
            className="opacity-35 w-full h-96 lg:h-full"
            src={img1}
            alt="Background"
          />

          <div className="text-black absolute inset-0 flex flex-col items-center justify-center lg:p-10">
            <div className="flex min-h-full   flex-col justify-center px-6 py-12 lg:px-8">
              {loading ? (
                <>
                  <h2>Sending OTP..</h2>
                </>
              ) : (
                <>
                  <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mb-3 text-center text-2xl font-medium font-testfont leading-9 tracking-tight text-gray-900">
                      Login
                    </h2>
                    <h4 className="font-basefont text-center text-gray-800 px-8 ">
                      Enter your email to login
                    </h4>
                  </div>

                  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                      <div>
                        <div className="">
                          <input
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,
                                message: "Invalid Email id",
                              },
                            })}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            placeholder="Email Address"
                            className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                          />
                          {errors.email && (
                            <span className="text-red-500">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      
                      </div>

                      <div>
                        <button
                          onClick={handleSubmit(saveData)}
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-buttoncolor
                      px-3 py-2.5 text-lg font-testfont 
                     leading-6 text-white shadow-sm "
                        >
                          Sign in
                        </button>
                      </div>
                    </form>

                    <p className="mt-7 text-center text-md text-gray-500">
                      Don't have an account?
                      <a
                        href="/account/register"
                        className="font-semibold leading-6 hover:underline text-black hover:text-gray-800"
                      >
                        &nbsp; Sign up
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section> */}
      <div className="bg-gray-50 font-basefont">
        <div className=" flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="mb-3 text-center text-2xl font-medium font-basefont leading-9 tracking-tight text-gray-900">
                Login
              </h2>
              <h4 className="font-basefont text-center text-gray-800 px-8 ">
                Enter your email to login
              </h4>
              <form className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email Address</label>
                  <div className="relative flex items-center">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,
                          message: "Invalid Email id",
                        },
                      })}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      placeholder="Email Address"
                      className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                    />
                    {errors?.email && (
                      toastfunc("email is required")
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <button onClick={handleSubmit(saveData)} type="button"
                    className="w-full py-3 px-4 text-sm  rounded-lg border border-basecolor  bg-lbluecolor rounded-md text-black 
                   hover:bg-basecolor hover:text-white">
                    {loading ? "Siging in.." : "Sign In"}
                  </button>
                </div>
                <p className="text-black text-sm !mt-8 text-center">Don't have an account? <a href="/account/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Sign Up</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
