import React from 'react'

function Sidebar() {
    return (
        <div className='hidden md:block'>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} class="container text-center p-5">
                <div class="col w-[150px]">
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Contact Details
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Basic
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Photos
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Facilities
                    </div>
                    <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Room Setup
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Rate Plan
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Hotel Rules
                    </div>
                    <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Paymemt Policy
                    </div>
                    <div class="col my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Parking
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Transporation
                    </div>
                    <div class="col  my-2 py-2 rounded-md hover:bg-[#ff5f63] cursor-pointer ease-in-out duration-200">
                        Documentaion
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
