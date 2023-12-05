import React from 'react'
import Button from './Button'

function Contactform() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='pt-5'>
            <div className='w-full h-auto  md:h-[500px] rounded-lg tracking-wider'>
                <div className='px-2 md:px-5 py-2 mb-1 border-b-[1px] border-slate-300'>
                    <h3 className='text-[30px] font-[500] my-2'>Contact</h3>
                    <p className='text-[20px] font-[400]'>Add Your contact information</p>
                </div>
                <div className='px-2 md:px-5 py-3'>
                    <div className="row">
                        <div className="col">
                            <p className='uppercase my-1'>Property Name</p>
                            <input type="text" placeholder='Enter Your name' className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none' />
                        </div>
                        <div className="col">
                            <p className='uppercase my-1'>Contact No</p>
                            <input type="text" placeholder='Enter Your number' className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none' />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <p className='uppercase my-1'>Country</p>
                            <input type="text" placeholder='Enter Your Country' className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none' />
                        </div>
                        <div className="col" >
                            <p className='uppercase my-1'>City</p>
                            <input type="text" placeholder='Enter Your City' className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <p className='uppercase my-1'>Area Code</p>
                            <input type="text" placeholder='Enter Your pincode' className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5'>
                <Button />
            </div>
        </div>
    )
}

export default Contactform
