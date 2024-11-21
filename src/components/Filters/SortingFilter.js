import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Accordian from "../../components/Accordian/Accordian";

const SortingFilter = ({rate,setrate}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.getAll("size");
    const brand = searchParams.getAll("brand");
    const price = searchParams.getAll("price");
    const sort = searchParams.getAll("sort");
    const [sortModalHeight, setSortModalHeight] = useState("0px");
    setrate(rate)
    // const handleChange = (e) => {
    //     if (e.target.value !== sort[0])
    //         setSearchParams({ size, brand, price, sort: [e.target.value] });
    //     else setSearchParams({ size, brand, price, sort: [] });
    // };

    return (
        <>
            <button onClick={() => {
                if (sortModalHeight === "0px") {
                    setSortModalHeight("100px");
                } else setSortModalHeight("0px");
            }}
                type="button"
                className="flex w-full items-center justify-center rounded-lg border 
                border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900
                 hover:bg-gray-100 hover:text-primary-700 font-testfont ">
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                </svg>
                {sort[0]
                    ? sort[0] === "asc"
                        ? ""
                        : ""
                    : ""}
                Price Sort
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
                <Accordian
                    style={{ top: "38px", right: "0px", minWidth: "200px" }}
                    height={sortModalHeight}
                >
                    <div className="flex flex-col ">
                        <div className="w-full mb-3">
                            <label htmlFor="lowTohigh" className="flex  text-center gap-4  text-black cursor-pointer">
                                <input
                                    className="cursor-pointer "
                                    value={1}
                                    onChange={(e)=>setrate(e.target.value)}
                                    id="lowTohigh"
                                    type="checkbox"
                                    name="sorting_filter"
                                    checked={rate==1}
                                />
                                <p className="text-md font-testfont font-medium">Low-to High</p>
                            </label>
                        </div>
                        <div className="w-full">
                            <label htmlFor="highTolow" className="flex text-center gap-4 text-black cursor-pointer">
                                <input
                                    value={2}
                                    className="cursor-pointer "
                                    onChange={(e)=>setrate(e.target.value)}
                                    id="highTolow"
                                    type="checkbox"
                                    name="sorting_filter"
                                    checked={rate==2}
                                />
                                <p className="text-md font-testfont font-medium">High-to-low</p>
                            </label>
                        </div>
                    </div>
                </Accordian>
            </button>

        </>
    );
};

export default SortingFilter;
