import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <>
            <div className='bg-[url(../src/assets/image/png/header-bg.png)] relative bg-cover bg-no-repeat bg-center min-h-screen'>
                <div className="absolute inset-0 bg-black opacity-57"></div>
                <Nav />
                <div className="container relative max-w-[1320px] mx-auto">
                    <div className=''>
                        <h1 className='fw-bold text-[64px] leading-[150%] text-white max-w-[1044px]'>Sed tortor in quisque morbi scelerisque etiam eu.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

