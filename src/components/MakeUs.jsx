import React from 'react'
import make from '../assets/image/png/makeus-img.png';
import makeLine from '../assets/image/svg/make-line.svg'

const MakeUs = () => {
    return (
        <>
            <div className="min-h-screen pt-[137px]">
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-1/2">
                            <img className='w-full min-h-[583px]' src={make} alt="make-img" />
                        </div>
                        <div className="w-1/2">
                            <img src={makeLine} alt="make-line" />
                            <h2 className='font-bold text-[48px] leading-[100%]'>What make us special ?</h2>
                            <p className='max-w-[633px] font-normal text-[16px] opacity-70 font-family-primary pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakeUs
