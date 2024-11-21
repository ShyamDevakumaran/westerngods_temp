import React from 'react'
import img1 from "../../assets/why/img1.avif"
import img2 from "../../assets/why/img2.avif"
import img3 from "../../assets/why/img3.avif"
import img4 from "../../assets/why/img4.avif"
import img5 from "../../assets/why/img5.avif"

const WhyWesternGods = () => {
    return (
        <div>
            <div className="py-12 bg-white text-center font-basefont">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Why choose Western Gods?</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full  flex items-center justify-center">
                            <img src={img1} alt="Natural" className="w-48 h-48" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full  flex items-center justify-center">
                            <img src={img2} alt="Farm to bottle" className="w-48 h-48" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full  flex items-center justify-center">
                            <img src={img3} alt="Cold pressed" className="w-48 h-48" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full  flex items-center justify-center">
                            <img src={img4} alt="Purity" className="w-48 h-48" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full  flex items-center justify-center">
                            <img src={img5} alt="Nutrition" className="w-48 h-48" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyWesternGods