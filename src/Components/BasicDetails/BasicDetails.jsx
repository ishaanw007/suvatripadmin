import React from 'react'
import Logo from '../../Assets/img/logo.png'
import Sidebar from '../Sidebar.jsx'
import Basic from './Basic'

function BasicDetails() {
    return (
        <div>
            <div className='px-5 py-1'>
                <img src={Logo} alt="logo-png" />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start'>
                <div className='hideen md:block'>
                    <Sidebar />
                </div>
                <div>
                    <Basic />
                </div>
            </div>


        </div>
    )
}

export default BasicDetails
