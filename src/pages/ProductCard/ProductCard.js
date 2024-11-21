import React from 'react';
import img1 from "../../assets/images/3.jpg";
import img2 from "../../assets/images/4.jpg";
import img3 from "../../assets/images/5.jpg";


const ProductCard = ({ title, imageSrc, altText }) => {
    return (
        <div 
            className="relative bg-cover bg-center rounded-md shadow-md h-44 font-basefont flex items-center justify-start"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            {/* Overlay for darkening the background */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

            {/* Text and Button Container */}
            <div className="relative z-10 text-left pl-3">
                <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
                <button className="bg-white hover:bg-gray-200 text-black py-2 px-6 border border-gray-300 rounded-lg shadow-md flex items-center">
                    Shop Now
                    <span className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

const ProductSection = () => {
    const products = [
        {
            title: 'Cold Pressed Oils',
            imageSrc: img1,
            altText: 'Cold Pressed Oils'
        },
        {
            title: 'Spices',
            imageSrc: img2,
            altText: 'Spices'
        },
        {
            title: 'Dry Fruits',
            imageSrc: img3,
            altText: 'Dry Fruits'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    imageSrc={product.imageSrc}
                    altText={product.altText}
                />
            ))}
        </div>
    );
};

export default ProductSection;
