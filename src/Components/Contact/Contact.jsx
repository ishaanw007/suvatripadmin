import React from 'react'
import Logo from '../../Assets/img/logo.png'
import Sidebar from '../Sidebar'
import Contactform from './Contactform'

function Contact() {
    return (
        <div>
            <div className='px-5 py-1'>
                <img src={Logo} alt="logo_here" />
            </div>
            <div className='flex flex-col md:flex-row  justify-around items-center md:items-start px-1 md:px-4'>
                <div className='w-full md:w-[300px]'>
                    <Sidebar />
                </div>
                <div className='w-full md:w-[1000px]'>
                    <Contactform />
                </div>
            </div>




        </div>
    )
}

export default Contact
