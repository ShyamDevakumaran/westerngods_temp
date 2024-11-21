import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/banner1.jpg";
import { toastfunc, toastsuccess } from "../../components/toast-style/toast-style";
import secureLocalStorage from "react-secure-storage";
import { useForm } from "react-hook-form";
import { signupUser } from "../../redux/thunks/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setemail] = useState();

  const token = secureLocalStorage.getItem("pref")?.token;

  useEffect(() => {
    if (token) {
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

  const saveData = async () => {
    // e.preventDefault();
    const adddata = {
      firstname: firstName,
      lastname: lastName,
      email: email,
    };
    try {
      await dispatch(signupUser(adddata)).unwrap();
      toastsuccess("Account created successfully");
      navigate(
        {
          pathname: `${process.env.PUBLIC_URL}/account/login`,
        },
        {
          state: {
            email: email,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <section className="bg-gray-50 ">
        <div className="relative  bg-white font-basefont">
          <img
            className="opacity-35 w-full h-[598px] lg:h-full"
            src={img1}
            alt="Background"
          />
          <div className="text-black absolute inset-0 flex flex-col items-center justify-center lg:p-10">
            <div className="flex min-h-full   flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mb-3 text-center text-2xl font-medium font-testfont leading-9 tracking-tight text-gray-900">
                  Register
                </h2>
                <h4 className="font-basefont text-center text-gray-800 px-8 ">
                  Enter your details to register.
                </h4>
              </div>

              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                  <div>
                    <div>
                      <div className="">
                        <input
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          placeholder="First Name"
                          className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                        />
                        {errors.firstName && (
                          <span className="text-red-500">
                            {errors.firstName.message}
                          </span>
                        )}
                      </div>
                      <div className="mt-5">
                        <input
                          {...register("lastName", {
                            required: "Last Name is required",
                          })}
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          type="text"
                          placeholder="Last Name"
                          className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                        />
                        {errors.lastName && (
                          <span className="text-red-500">
                            {errors.lastName.message}
                          </span>
                        )}
                      </div>
                      <div className="mt-5">
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
                          onChange={(e) => setemail(e.target.value)}
                          type="email"
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
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit(saveData)}
                      className="flex w-full justify-center rounded-md bg-buttoncolor
                      px-3 py-2.5 text-lg font-testfont 
                     leading-6 text-white shadow-sm "
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                <p className="mt-7 text-center text-md text-gray-500">
                  Already have an account?
                  <a
                    href="/account/login"
                    className="font-semibold leading-6 hover:underline text-black hover:text-gray-800"
                  >
                    &nbsp; Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="bg-gray-50 font-basefont">
        <div className=" flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="mb-3 text-center text-2xl font-medium font-basefont leading-9 tracking-tight text-gray-900">
                Register
              </h2>
              <h4 className="font-basefont text-center text-gray-800 px-8 ">
                Enter your details to register.
              </h4>
              <form className="mt-8 space-y-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                  <div className="relative flex items-center">
                    <input
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      placeholder="First Name"
                      className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                    />
                    {errors?.firstName && (
                      toastfunc("First name is required")
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
                  <div className="relative flex items-center">
                    <input
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                      className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                    />
                    {errors?.lastName && (
                      toastfunc("Last name is required")
                    )}
                  </div>
                </div>
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
                      onChange={(e) => setemail(e.target.value)}
                      type="email"
                      placeholder="Email Address"
                      className="block font-testfont w-full rounded-md border py-3 text-black border-gray-300 "
                    />
                    {errors?.email && (
                      toastfunc("Email is required")
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <button onClick={handleSubmit(saveData)} type="button"
                    className="w-full py-3 px-4 text-sm  rounded-lg border border-basecolor  bg-lbluecolor rounded-md text-black 
                   hover:bg-basecolor hover:text-white">
                    Sign In
                  </button>
                </div>
                <p className="text-black text-sm !mt-8 text-center">Already have an account? <a href="/account/login" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Sign In</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
