import React from 'react'
import Logo from '../../Assets/img/logo.png'
import RectangleImg from '../../Assets/img/Rectangle.png'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className="container flex flex-col md:flex-row justify-between m-0 p-0">
            {/* Sign-up form */}
            <div className='w-full md:w-[750px] h-screen'>
                <div>
                    {/* Uppermost part */}
                    <div className='flex flex-row justify-between items-center px-3 md:px-10 py-3 md:py-8'>
                        <img src={Logo} alt="logo_here" />
                        <Link to={"/login"}>
                            <p className='text-capitalize underline cursor-pointer'>login</p>
                        </Link>
                    </div>
                    {/* For Sign-up Part */}
                    <div className='mx-[0] my-5 md:mx-auto w-full md:w-[500px] px-3 md:px-0'>
                        <h2 className='text-[#000] fs-3  fw-medium lh-lg'>Sign-up to manage Your Property</h2>
                        <p className='fs-6 lh-lg'>Welcome to SuvaTrip, please enter the deatils to continuee</p>
                        <div className='w-full'>
                            <p className='lh-lg my-2 fw-medium fs-6 text-capitalize'>UserName:-</p>
                            <input type="text" className='w-full py-2 border-2 outline-none px-1 rounded-md mb-1' id='userInput' placeholder='Enter the Username' />
                            <p className='lh-lg fs-6 text-capitalize underline'><a href="./index.html">have trouble sign-up</a></p>
                            <button type="button" className='bg-[#ff5f63] py-2 hover:opacity-60  w-full rounded-md my-4 font-[600] text-slate-100'>Continue</button>
                            <p className='text-[16px] lh-lg'>By signing in or creating an account, You agree with our <span className='text-[#ff5f63]'>terms and condition</span> or <span className='text-[#ff5f63]'>privacy policy</span> </p>
                            <p className='text-[16px] lh-lg'>Question about property or the extranet? checkout <span className='text-[#ff5f63]'>partner help</span> or ask another partner in the <span className='text-[#ff5f63]'>partner community</span> </p>
                        </div>
                        <div className='w-full'>
                            <button type="button" className='btn btn-primary container lh-lg my-5 text-uppercase text-dark'>Join Our Partner Program</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sign-up images */}
            <div className='w-full md:w-[750px] hidden md:block h-screen'>
                <img src={RectangleImg} alt="Rec_error" className='w-full h-full' />

            </div>

        </div >
    )
}

export default SignUp
