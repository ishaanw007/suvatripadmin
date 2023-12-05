import React from 'react'
import Arrow from './arrow.png'


function WhyList() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='flex flex-col md:flex-row justify-between md:justify-around items-center bg-[#fff] p-1 md:p-8 gap-0 md:gap-10'>
            <div className='w-full md:w-[400px]  h-auto md:h-[540px] px-10 md:px-5 py-5'>
                <h3 className='text-[32px] font-[600]'>Why list your hotel on the <span className='text-[#ff5f63]'>Suvtarip</span></h3>
                <button className='bg-[#ff474b] flex mt-4 items-center px-6 py-4 text-[14px] uppercase font-[600] shadow-xl text-slate-50 rounded-xl hover:shadow-inner'>List Your Property <img src={Arrow} alt="arrow" className='ml-4' /></button>
            </div>
            <div className='w-full md:w-[800px]  h-auto'>
                <div className='px-10 py-3'>
                    <p className='border-b-[1px] border-[#ff898c] pb-4 text-[20px]'>Our partners' bussiness boom when they listed on our platform, here's why ? </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-0 md:gap-10 px-1 py-5 md:px-10'>
                    <div className='w-[300px] h-auto border-slate-300 border-[1px] my-2 md:my-0 hover:shadow-md cursor-pointer'>
                        <div className='px-3 py-2'>
                            <h1 className='text-[55px] font-[700] text-[#00a97e]'>2k</h1>
                        </div>
                        <div className='px-3'>
                            <h3 className='text-[30px] font-[600]'>Property listed</h3>
                            <p className='text-[15px] font-[400] py-1'>from hotel to outdoor lodge, we offer it at all!! </p>
                        </div>
                    </div>
                    <div className='w-[300px] h-auto  border-slate-300 border-[1px] my-2 md:my-0 hover:shadow-md cursor-pointer'>
                        <div className='px-3 py-2'>
                            <h1 className='text-[55px] font-[700] text-[#ff5f63]'>1M</h1>
                        </div>
                        <div className='px-3'>
                            <h3 className='text-[30px] font-[600]'>Some visitors</h3>
                            <p className='text-[15px] font-[400] py-1'>We offer our partner to tailored guest traffic! </p>
                        </div>
                    </div>
                    <div className='w-[300px] h-auto border-slate-300 border-[1px] my-2 md:my-0 hover:shadow-md cursor-pointer'>
                        <div className='px-3 py-2'>
                            <h1 className='text-[55px] font-[700] text-[#ff5f63]'>30k</h1>
                        </div>
                        <div className='px-3'>
                            <h3 className='text-[30px] font-[600]'>Reservation Booked</h3>
                            <p className='text-[16px] font-[400] py-1'>Hotel guest enjoy How easy to book! </p>
                        </div>
                    </div>
                    <div className='w-[300px] h-auto border-slate-300 border-[1px] my-2 md:my-0 hover:shadow-md cursor-pointer'>
                        <div className='px-3 py-2'>
                            <h1 className='text-[55px] font-[700] text-[#00a97e]'>99%</h1>
                        </div>
                        <div className='px-3'>
                            <h3 className='text-[22px] font-[600]'>Coustomer Satisfiaction</h3>
                            <p className='text-[15px] font-[400] py-1'>We offer both client and partner top-level support! </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WhyList
