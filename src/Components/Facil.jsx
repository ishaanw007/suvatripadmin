import React from 'react'
import Logo from './logo.png'
import Sidebar from './Sidebar'
import Facility from './Facility'


function Facil() {
    return (
        <div>
            <div className='px-5 py-1'>
                <img src={Logo} alt="logo-png" />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start px-1 md:px-5'>
                <div>
                    <Sidebar />
                </div>
                <div className='w-full md:w-auto'>
                    <Facility />
                </div>
            </div>

        </div>
    )
}

export default Facil
