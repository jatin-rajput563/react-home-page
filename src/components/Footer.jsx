import React from 'react'
import logo from '../assets/image/svg/logo.svg';
import instagram from '../assets/image/svg/instagram.svg'
import facebook from '../assets/image/svg/facebook.svg'
import twiter from '../assets/image/svg/twiter.svg'
import img1 from '../assets/image/png/gallery-img-1.png'
import img2 from '../assets/image/png/gallery-img-2.png'
import img3 from '../assets/image/png/gallery-img-3.png'
import img4 from '../assets/image/png/gallery-img-4.png'
import img5 from '../assets/image/png/gallery-img-5.png'

const Footer = () => {
    return (
        <>
            <div className='min-h-screen bg-black pt-[81px]'>
                <div className="container max-w-[1320px] mx-auto">
                    <div className="flex flex-row flex-wrap -mx-3">
                        <div className="w-6/12">
                            <div className="flex items-center gap-3.5">
                                <a href="#"><img src={logo} alt="nav-logo" className='max-w-[50px] sm:max-w-[98px]' /></a>
                                <a className='font-family-primary font-bold text-4xl leading-[135%] text-[#2C49FE] mb-0' href='#'>Events<span className='text-[#01C8FF]'>Free</span></a>
                            </div>
                            <p className='m-0 max-w-[346px] font-normal text-[14px] font-family-primary pt-[36px] text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c </p>
                            <div className='flex gap-[15.33px] pt-[23px]'>
                                <a href="https://www.instagram.com/" target='blank'><img src={instagram} alt="intsagram-svg" /></a>
                                <a href="https://www.facebook.com/" target='blank'><img src={facebook} alt="facebook-svg" /></a>
                                <a href="https://x.com/" target='blank'><img src={twiter} alt="twiter-svg" /></a>
                            </div>
                        </div>
                        <div className="w-6/12">
                            <div className="flex flex-wrap flex-row -mx-3 w-full">
                                <div className="w-3/12">
                                    <ul className='list-none flex flex-col gap-3'>
                                        <li>
                                            <p className='font-bold text-[14px] text-white font-family-primary'>SERVICES</p>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">About</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">News</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">ullamcorper</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-3/12">
                                    <ul className='list-none flex flex-col gap-3'>
                                        <li>
                                            <p className='font-bold text-[14px] text-white font-family-primary'>EVENTS</p>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">ullamcorper</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">ullamcorper</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">ullamcorper</a>
                                        </li>
                                        <li>
                                            <a className='font-normal text-[12px] text-white font-family-primary' href="#">ullamcorper</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-6/12">
                                    <p className='font-bold text-[14px] text-white font-family-primary'>GALLERY</p>
                                    <div className='flex gap-[18px]'>
                                        <img src={img1} alt="gallery-img" />
                                        <img src={img2} alt="gallery-img" />
                                        <img src={img3} alt="gallery-img" />
                                    </div>
                                    <div className='flex mt-[13px] gap-[18px]'>
                                        <img src={img4} alt="gallery-img" />
                                        <img src={img5} alt="gallery-img" />
                                        <div className='w-[90px] h-[62px] bg-[#18205C] justify-center items-center flex'>
                                            <p className='m-0 font-bold text-[12px] leading-[150%] text-white font-family-primary max-w-[43px] text-center'>Show More</p>
                                        </div>
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

export default Footer
