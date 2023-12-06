import React from 'react'

function SmallCompo() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='flex flex-col md:flex-row justify-between bg-[#fff] items-center px-5 md:px-28 pt-10 md:pt-24 pb-10'>
            <div className='w-full md:w-[380px] h-auto md:h-[100px] px-1 md:px-5 py-2'>
                <h3 className='text-[30px] font-[700]'>7 Reasons why hotels use <span className='text-[#ff9b9d]'>SuvaTrip</span></h3>
            </div>
            <div className='w-full md:w-[700px] h-auto md:h-[100px] px-1 md:px-5 pt-6 pb-4 border-b-[2px] border-[#ff9b9d]'>
                <p>We constantly imporove our platform and service ensure that you can offer the best exprience to your customers</p>
            </div>

        </div>
    )
}

export default SmallCompo
