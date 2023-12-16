import React from 'react'
import Logo from '../../Assets/img/logo.png'
import Sidebar from '../Sidebar'
import SightSeeingPicture from './SightSeeingPicture'


function SightSeeingPhotos() {
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
                    <SightSeeingPicture />
                </div>
            </div>

        </div>
    )
}

export default SightSeeingPhotos
