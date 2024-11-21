import React from 'react'

const Gallery = () => {
    return (
        <div className=" text-center font-basefont">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:m-20 m-10">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688025668.png" alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029344.png" alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029370.png" alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029384.png" alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029394.png" alt="Gallery image" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://pagedone.io/asset/uploads/1688029408.png" alt="Gallery image" />
                </div>
            </div>
        </div>
    )
}

export default Gallery