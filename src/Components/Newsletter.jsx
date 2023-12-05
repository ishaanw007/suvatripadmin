import React from 'react'
import plane from './plane.png'
import AppStore from './App Store.png'
import GooglePlay from './Google Play.png'


function Newsletter() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='p-5 bg-[#fff]'>
            <div className='w-full md:w-[1000px] bg-[#ffebeb] mx-auto px-2 md:px-16 py-3 md:py-10 rounded-lg'>
                <div className='text-center'>
                    <h3 className='text-[25px] md:text-[35px] p-2 font-[400] md:font-[600]'>Want to Stay informed?</h3>
                    <p className='py-1 px-2 md:px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores cupiditate dolore iste ab consequuntur rerum non facilis necessitatibus. Dolorem!</p>
                </div>
                <div className='my-3 p-5'>
                    <div className='w-full md:w-[500px] mx-auto bg-[#fff] flex flex-row items-center p-1 rounded-md'>
                        <div className='w-[85%] md:w-[90%] h-12'>
                            <input type="email" placeholder='Enter Your Email' className='w-full h-full px-2 border-none outline-none' />

                        </div>
                        <div className='bg-[#ff7295] w-[15%] md:w-[10%] rounded-full h-10 md:h-12 ml-2'>
                            <img src={plane} alt="plane-Img" className='mx-auto w-6 h-6 mt-2 md:mt-3' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center p-5'>
                    <div className='mx-2'>
                        <img src={AppStore} alt="AppStore" />
                    </div>
                    <div className='mx-2'>
                        <img src={GooglePlay} alt="GoglePlay" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
