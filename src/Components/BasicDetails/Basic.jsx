import React from 'react'
import Button from '../Button'

function Basic() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='py-3 md:py-5'>
            <div className='w-full  md:w-[1000px] mt-4 tracking-wider  h-screen md:h-[550px] overflow-x-hidden overflow-y-auto'>
                <div className='px-2 md:px-5 py-2 border-b-[1px] border-slate-300'>
                    <h2 className='text-[30px] font-[600]'>Basic details</h2>
                    <p className='text-[18px] font-[4000] my-1 text-slate-500'>The basic add your property name, adresss, Facilities and more </p>
                </div>
                <div className='px-2 md:px-5 py-2 border-b-[1px] border-slate-300'>
                    <div>
                        <p className='text-[20px] font-[400] my-2 text-slate-500'>Property Name</p>
                        <input type="text" placeholder='Enter your property name' className='w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400' />
                    </div>
                    <div className='my-2'>
                        <p className='text-[20px] font-[400] my-2 text-slate-500'>Property type</p>
                        <div class="input-group w-full md:w-[400px]">
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className='text-[20px] font-[400] my-2 text-slate-500'> Number of Units</p>
                        <div class="input-group w-full md:w-[400px]">
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className='text-[20px] font-[400] my-2 text-slate-500'>Currency</p>
                        <div class="input-group w-full md:w-[400px]">
                            <select class="form-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='px-2 md:px-0'>
                    <p className='text-[20px] font-[400] my-2 text-slate-500'>Does the property Work with the channel manager ?</p>
                    <input type="radio" id="yes" name="fav_language" value="yes" />
                    <label for="html" className='mx-1'>Yes</label><br />
                    <input type="radio" id="no" name="fav_language" value="no" />
                    <label for="css" className='mx-1' >No</label><br />
                </div>

            </div>
            <div className='mt-2'>
                <Button />
            </div>
        </div>
    )
}

export default Basic
