import React from "react";
import "./Accordian.css";

const Accordian = ({ children, height = "0px", style }) => {

    return (
        <div
            style={{
                height: height,
                ...style,
            }}
            className="accordian px-[20px] lg:ml-0 lg:px-0"
        >
            {children}
        </div>
    );
};

export default Accordian;
