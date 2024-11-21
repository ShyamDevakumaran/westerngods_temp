import React from "react"

export const IconPlus = ({ ...props }) => {
    return (
        <div className=" inline-flex justify-center items-center gap-2 ">
            <span className="absolute -start-full transition-all group-hover:start-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H20M12 4V20" stroke="#fff" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {props.children}
            </span>
        </div>
    )
}