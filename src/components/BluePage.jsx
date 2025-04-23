import React from 'react';
// import participate from './assets/image/png/participate.svg'

const BluePage = () => {
    return (
        <>
            <div className="bg-[url(./assets/image/png/blue-bg.png)] bg-no-repeat bg-center bg-cover pt-[50px]">
                <div className="container mx-auto">
                    <h2 className='max-w-[708px] font-bold text-[48px] leading-[130%] text-center text-white mx-auto'>Lorem ipsum dolor sit amet, consectetur</h2>
                    <p className='max-w-[765px] font-bold text-[16px] leading-[100%] text-center text-white mx-auto m-0 pt-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec </p>
                    <div className="flex flex-wrap ">
                        <div className="w-1/4">
                            <div>
                                {/* <img src={participate} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BluePage
