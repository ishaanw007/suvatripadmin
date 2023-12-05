import React from 'react'
import Logo from './logo.png'
import Sidebar from './Sidebar'
import Park from './Park'

function Parking() {
    return (
        <div>
            <div className='px-5 py-1'>
                <img src={Logo} alt="logo-png" />
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start px-2 md:px-5'>
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Park />
                </div>
            </div>

        </div>
    )
}

export default Parking
