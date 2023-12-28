import React, { useEffect } from 'react'
import Logo from '../../Assets/img/logo.png'
import Sidebar from '../Sidebar'
import { Outlet, Link } from 'react-router-dom'
import NestedRoutes from '../NestedRoutes'
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("registration")==='true') {
            navigate('/success');
        }
        if(!localStorage.getItem("token")) {
            navigate('/');
        }
    }, [])

    return (

        <div>
            <div className='px-5 py-1'>
                <Link to='/'> <img src={Logo} alt="logo_here" /></Link>
            </div>
            <div className='flex flex-col md:flex-row  justify-around items-center md:items-start px-1 md:px-4'>
                <div className='w-full md:w-[300px]'>
                    <Sidebar />
                </div>
                <div>
                    <Outlet />
                    <NestedRoutes />
                    {/* <Contactform /> */}
                </div>
            </div>




        </div>
    )
}

export default Contact
