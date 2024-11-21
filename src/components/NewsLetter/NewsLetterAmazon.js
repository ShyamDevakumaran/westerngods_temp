import React from 'react'
import amazon from "../../assets/images/amazon.avif"

const NewsLetterAmazon = () => {
    return (
        <div>
            <div className="bg-black text-center py-10">
                <p className="text-white text-lg font-semibold mb-4">Also available in</p>
                <img src={amazon} alt="Amazon" className="mx-auto h-8" />
            </div>
        </div>
    )
}

export default NewsLetterAmazon