import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import img2 from '../../assets/images/contact.jpg';
import { createContactDetails } from "../../redux/thunks/master";
import { toastfunc, toastsuccess } from "../../components/toast-style/toast-style";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        reset,
    } = useForm();
    const dispatch = useDispatch();
    const {  isLoading: issubmitting, } = useSelector((state) => state.masterReducer);

    const [email, setemail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const saveData = async () => {
        const adddata = {
            email,
            name,
            phone,
            message,
        };
        try {
            console.log(adddata);
            await dispatch(createContactDetails(adddata)).unwrap();
            toastsuccess("Contact Details saved successfully");
            setemail("");
            setPhone("");
            setName("");
            setMessage("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${img2})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full font-basefont">
                    <h2 className="text-3xl font-bold text-white">Contact Us</h2>
                    <p className="lg:text-lg text-white mt-2 text-center text-sm">
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-10">
                <h2 className=" font-basefont justify-self-center text-center text-2xl">
                    Get in touch with us
                </h2>
                <div className="mx-15 ">
                    <form
                        className="mt-5 p-5 flex  flex-col  justify-center items-center"
                    >
                        <div className="grid grid-cols-2 gap-x-10 gap-y-3 w-full max-w-md">
                            <div className="col-span-2  font-basefont ">
                                <label className="p-2 block ">Name</label>
                                <input
                                    {...register("name", {
                                        required: "Name is required",
                                        maxLength: {
                                            value: 200,
                                            message: "Maximum length is 200",
                                        },
                                    })}
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="text-body-color border-basecolor focus:border-basecolor w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                />
                                {errors?.name && (
                                    toastfunc("Name is required")
                                )}
                            </div>



                            <div className="font-basefont  col-span-2">
                                <label className="p-2 block">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,
                                            message: "Invalid Email id",
                                        },
                                        maxLength: {
                                            value: 200,
                                            message: "Maximum length is 200",
                                        },
                                    })}
                                    className="text-body-color border-basecolor focus:border-basecolor w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    name="email"
                                />
                                {errors?.email && (
                                    toastfunc("Email is required")
                                )}
                            </div>

                            <div className="col-span-2 font-basefont">
                                <label className="p-2 block ">Phone Number</label>
                                <input
                                    {...register("phone", {
                                        required: "phone is required",
                                        maxLength: {
                                            value: 10,
                                            message: "Maximum length is 10",
                                        },
                                    })}
                                    type="tel"
                                    placeholder="Your phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name="phone"
                                    className="text-body-color border-basecolor focus:border-basecolor w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                />
                                {errors?.phone && (
                                    toastfunc("Phone is required")
                                )}
                            </div>

                            <div className="col-span-2 font-basefont">
                                <label className="p-2 block ">Message</label>
                                <textarea
                                    {...register("message", {
                                        required: "message is required",
                                        maxLength: {
                                            value: 200,
                                            message: "Maximum length is 200",
                                        },
                                    })}
                                    className="text-body-color border-basecolor focus:border-basecolor w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                                    name="message"
                                    placeholder="How can we help you?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                {errors?.message && (
                                    toastfunc("Message is required")
                                )}
                            </div>

                            <div className="mt-2 font-basefont">
                                <button
                                    onClick={handleSubmit(saveData)}
                                    disabled={issubmitting}
                                    className="cursor-pointer inline-flex text-center uppercase items-center
                                    justify-center px-5 py-3 mr-3 before:ease relative h-12 w-40 border border-basecolor
                                    border  bg-lbluecolor rounded-md text-black 
                                    hover:bg-basecolor hover:text-white"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
