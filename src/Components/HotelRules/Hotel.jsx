import React from 'react'
import Button from '../Button'

function Hotel() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5 '>
            <div className='border-b-[1px] border-slate-300'>
                <h3 className='text-slate-700 text-[30px] font-[500] leading-10 tracking-wider'>Hotel Rules</h3>
                <p className='pt-1 pb-3 tracking-wider text-[20px] font-[400] text-slate-500'>Add your hotel rules</p>
            </div>
            <div>
                <div className='py-3 tracking-wider'>
                    <p className='text-slate-600 text-sm uppercase'>What are your check-in and check-out time</p>
                </div>
                {/* Check-In start */}
                <div className='container'>
                    <p className='text-[18px] font-[500] text-slate-700'>Check-In</p>
                    <div className='row border-b-[1px] border-slate-300 pb-4'>
                        <div className='col'>
                            <p className='text-[18px] font-[400] my-2 text-slate-500'>From</p>
                            <div class="input-group w-full md:w-[400px]">
                                <select class="form-select" id="inputGroupSelect02">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <p className='text-[18px] font-[400] my-2 text-slate-500'>Untill</p>
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
                </div>
                {/* Check-out start */}
                <div className='container'>
                    <p className='pt-3 text-[18px] font-[500] text-slate-700'>Check-Out</p>
                    <div className='row border-b-[1px] border-slate-300 pb-3'>
                        <div className='col'>
                            <p className='text-[18px] font-[400] my-2 text-slate-500'>From</p>
                            <div class="input-group w-full md:w-[400px]">
                                <select class="form-select" id="inputGroupSelect02">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <p className='text-[18px] font-[400] my-2 text-slate-500'>Untill</p>
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

                </div>


                {/* Allow Children start */}
                <div className='px-2 md:px-0 py-2 border-b-[1px] border-slate-300'>
                    <p className='text-[18px] font-[400] my-2 text-slate-500'>Do You Allow children ?</p>
                    <input type="radio" id="yes" name="fav_language" value="yes" />
                    <label for="html" className='mx-1'>Yes</label><br />
                    <input type="radio" id="no" name="fav_language" value="no" />
                    <label for="css" className='mx-1' >No</label><br />
                </div>
            </div>
            <div className='mt-3'>
                <Button />
            </div>


        </div>
    )
}

export default Hotel
