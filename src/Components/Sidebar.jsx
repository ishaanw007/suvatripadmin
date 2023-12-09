import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {


    return (
        <div className='hidden md:block h-[550px]  mt-5'>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} class="container text-center px-5">
                <div class="col w-[150px] text-left">
                    <Link to="/contact/">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Contact Details
                        </div>
                    </Link>
                    <Link to='/contact/basic'>
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Basic
                        </div>
                    </Link>

                    <Link to="basic/photos">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Photos
                        </div>
                    </Link>
                    <Link to="basic/photos/facility">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Facilities
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup">
                        <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Room Setup
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Rate Plan
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate/hotel-rules">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Hotel Rules
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment">
                        <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Payment Policy
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park">
                        <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Parking
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park/transportation">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Transporation
                        </div>
                    </Link>
                    <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park/transportation/document">
                        <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                            Documentaion
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
