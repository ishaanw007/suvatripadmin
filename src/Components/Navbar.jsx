import React from 'react'
import logo from './logo.png'
import Arrow from './arrow.png'

function Navbar() {
    return (
        <nav style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='bg-[#fff] w-full h-24 px-2 md:px-20 flex flex-row justify-between items-center' >
            <div className='ml-0 md:ml-12'>
                <img src={logo} alt="logo" />
            </div>
            <div className=' flex flex-row items-center'>
                <button className='bg-[#ff474b] flex items-center px-1 md:px-6 py-2 md:py-4 text-[8px] md:text-[14px] uppercase font-[200] md:font-[600] shadow-xl text-slate-50 rounded-xl hover:shadow-inner'>List Your Property <img src={Arrow} alt="arrow" className='ml-0 md:ml-4' /></button>
                <button className='uppercase  bg-[#fff] px-2 md:px-6 py-2 md:py-4 ml-2 font-[300] md:font-[600] rounded-xl shadow-xl border-[1px] border-slate-200 hover:shadow-inner'>Sign In</button>
            </div>
        </nav >
    )
}

export default Navbar
