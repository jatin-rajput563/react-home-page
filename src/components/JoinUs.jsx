import React from 'react'
import JoinLine from '../assets/image/svg/JoinLine.svg'
import joinImg1 from '../assets/image/png/join-img-1.png'
import threeLine from '../assets/image/png/three-line-img.png'

const JoinUs = () => {
    return (
        <>
            <div className=" pt-[153px] max-md:pt-[50px]">
                <div className="container mx-auto max-w-[1320px]">
                    <div className="flex flex-wrap flex-row -mx-3">
                        <div className="w-full lg:w-1/2">
                            <img className='max-lg:flex max-lg:mx-auto' src={JoinLine} alt="JoinLine" />
                            <h2 className='max-w-[338px] font-bold text-[48px] leading-[137%] font-family-primary max-lg:text-center max-lg:mx-auto '>Explore our latest events</h2>
                            <p className='max-w-[543px] font-normal text-[16px] leading-[100%] font-family-primary opacity-70 pt-[12px] pb-[15px] font-family-primary max-lg:text-center max-lg:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
                            <a href="#" className='text-decoration-none font-bold text-[16px] font-family-primary max-lg:justify-center flex max-lg:items-center'>LEARN MORE</a>
                        </div>
                        <div className="w-full lg:w-1/2 max-lg:flex max-lg:mx-auto justify-center max-lg:mt-[20px]">
                            <div className='flex gap-[31px] max-[490px]:flex-col'>
                                <div className='pt-[10px] pl-[13px] pr-[11px] pb-[24px] shadow-lg'>
                                    <img src={joinImg1} alt="join-img-1" />
                                    <p className='font-normal text-[14px] leading-[100%] opacity-70 pt-[13px] font-family-primary m-0'>09/23/2021</p>
                                    <p className='font-medium text-[24px] leading-[100%] font-family-primary pb-[5px] m-0'>Lorem ipsum</p>
                                    <p className='max-w-[270px] font-normal text-[16px]  opacity-70 font-family-primary m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in </p>
                                </div>
                                <div className='pt-[10px] pl-[13px] pr-[11px] pb-[24px] shadow-lg'>
                                    <img src={joinImg1} alt="join-img-1" />
                                    <p className='font-normal text-[14px] leading-[100%] opacity-70 pt-[13px] font-family-primary m-0'>09/23/2021</p>
                                    <p className='font-medium text-[24px] leading-[100%] font-family-primary pb-[5px] m-0'>Lorem ipsum</p>
                                    <p className='max-w-[270px] font-normal text-[16px]  opacity-70 font-family-primary m-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[163px] max-md:pt-[50px]'>
                        <div className="flex flex-wrap flex-row -mx-3">
                            <div className="w-full lg:w-1/2">
                                <img className='w-full max-w-[536px] max-sm:max-w-[290px] max-lg:flex max-lg:mx-auto' src={threeLine} alt="three-line-img" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div>
                                    <img className='max-lg:flex max-lg:mx-auto max-lg:mt-[50px]' src={JoinLine} alt="join-line" />
                                    <p className='font-bold text-[48px] leading-[100%] m-0 py-[15px] max-lg:text-center max-lg:mx-auto'>Join Us !</p>
                                    <p className='font-normal text-[16px] leading-[100%] opacity-70 max-w-[543px] font-family-primary m-0 max-lg:text-center max-lg:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue </p>
                                    <p className='font-bold text-[35px] ont-family-primary m-0 py-[15px] font-family-primary max-lg:text-center max-lg:mx-auto'>Sign Up</p>
                                    <div className='flex flex-col gap-[16px] max-lg:mx-auto max-lg:justify-center max-lg:items-center max-w-[574px] mx-[12px] '>
                                        <div className='flex gap-[16px] w-full'>
                                            <input type="text" placeholder='First Name' className='border-1 w-full max-w-[279px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' />
                                            <input type="text" placeholder='First Name' className='border-1 w-full max-w-[279px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' />
                                        </div>
                                        <input type="email" placeholder='Email Address' className='border-1 w-full max-w-[574px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' />
                                        <div className='flex gap-[16px] w-full'>
                                            <input type="password" placeholder='Password' className='border-1 w-full max-w-[279px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' />
                                            <input type="Password" placeholder='Confirm Password' className='border-1 w-full max-w-[279px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' />
                                        </div>
                                        <textarea placeholder='About Me' className='border-1 w-full max-w-[574px] min-h-[124px] py-[10px] pl-[17px] rounded-[5px] border-[#00000066] font-normal text-[16px] max-sm:text-[13px] leading-[100%] font-family-primary' ></textarea>
                                        <button className='w-full py-[11px] bg-[#2C49FE] max-w-[574px] rounded-[23px] text-white font-medium text-[16px] leading-[150%] font-family-primary hover:bg-white hover:text-[#2C49FE] border-2 border-[#2C49FE] transition-all delay-[100]'>Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs
