import React from 'react'

const CustomButton = ({ btn, btnClass }) => {
    return (
        <>
            <button className={`font-family-primary font-semibold leading-[150%] text-white border-0 bg-[#2C49FE] py-[11px] px-[28px] rounded-3xl cursor-pointer transition-all duration-200 ease-linear hover:bg-[white] hover:text-[#2C49FE] ${btnClass}`}>{btn}</button>
        </>
    )
}

export default CustomButton