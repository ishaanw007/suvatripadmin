import React from 'react'
import Logo from '../../Assets/img/logo.png'
import Sidebar from '../Sidebar'
import Doc from './Doc'

function Document() {
    return (
        <div>
            <div className='px-5 py-1'>
                <img src={Logo} alt="logo-png" />
            </div>
            <div className='flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start px-1 md:px-5'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Doc />
                </div>
            </div>

        </div>
    )
}

export default Document
