import React from 'react'
import ViewImg from './ViewImages.png'


function Header() {
    return (
        <header>
            <div style={{ backgroundImage: `url(${ViewImg})`, fontFamily: `'Josefin Sans', sans-serif` }} className='w-full h-[700px] tracking-wide bg-center py-60 md:py-40 px-2 md:px-16'>
                <div className='w-full md:w-[600px] h-auto'>
                    <h2 className='text-[30px] md:text-[65px] text-[#fff] font-[700]'>Listing Your <span className='text-[#ff5f63]'>Hotel</span> Made Easy</h2>
                    <p className='text-[20px] md:text-[30px] font-[600] text-slate-200'>Register your property is 100% free and take less then 15 minutes</p>
                </div>

            </div>

        </header>
    )
}

export default Header
