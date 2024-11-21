import React from "react";
import "../../styles/OurStory.css"; // For custom styles
import img1 from '../../assets/images/ourstory.jpg';

const OurStory = () => {
    return (
        <>
            {/* Banner Section with Text Overlay */}
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${img1})` }} // Use existing image
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full font-basefont">
                    <h1 className="text-4xl font-bold text-white">Get to Know About Us!</h1>
                    <p className="text-2xl text-white mt-2">Our Values & Culture</p>
                </div>
            </div>

            {/* Centered Text Section */}
            <div className="flex flex-col justify-center items-center py-12 bg-white">
                <div className="max-w-3xl text-center px-4 font-basefont">
                    <h1 className="text-3xl font-bold text-gray-800">Western Gods</h1>
                    <p className="text-black mt-4 font-basefont">
                        <strong>WESTERN GODS</strong> is structured by two Engineering Graduates as
                        a Farmers based Organization in Coimbatore. We both are Childhood
                        friends from an Agricultural family where we produce oil for our
                        household needs from our own farm ingredients...
                    </p>
                </div>
            </div>
        </>
    );
};

export default OurStory;
