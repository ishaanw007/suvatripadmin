import React from 'react'
import Button from '../Button'

function Facility() {
    return (
        <div className='pt-5 tracking-wider'>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px]  p-2'>
                <div className='border-b-[1px] border-slate-300'>
                    <h3 className='text-[35px] font-[600] tracking-wider'>Faciliites</h3>
                    <p className='text-[20px] font-[500] mb-1  tracking-wider text-slate-700'>Check all that apply</p>
                </div>
                <div className='border-b-[1px] border-slate-300 pb-1'>
                    <p className='text-[20px] font-[400] my-1 text-slate-600'>Acomadation and Services</p>
                    <div className='px-3'>
                        <input type="radio" id="yes" name="fav_language" value="yes" />
                        <label for="html" className='text-[17px] my-[2px] mx-2'>Free parking</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Key card acess</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Daily housekepeing</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>No smoking rooms</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Lift</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Room services</label><br />
                    </div>
                </div>
                <div className='border-b-[1px] border-slate-300 pb-1'>
                    <p className='text-[22px] font-[400] my-1 text-slate-600'>Leisure & Recreation</p>
                    <div className='px-3'>
                        <input type="radio" id="yes" name="fav_language" value="Gardens" />
                        <label for="html" className='text-[17px] my-[2px] mx-2'>Garden</label><br />
                        <input type="radio" id="no" name="fav_language" value="Indore Swiming pool" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Indore Swiming pool</label><br />
                        <input type="radio" id="no" name="fav_language" value="no" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Outdoor Swiming pool</label><br />
                        <input type="radio" id="no" name="fav_language" value="Outdoor Swiming pool" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Fitness center</label><br />
                        <input type="radio" id="no" name="fav_language" value="Fitness center" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Spa</label><br />
                        <input type="radio" id="no" name="fav_language" value="Beach" />
                        <label for="css" className='text-[17px] my-[2px] mx-2'>Beach</label><br />
                    </div>

                </div>
            </div>
            <div className='mt-2'>
                <Button />
            </div>
        </div>
    )
}

export default Facility
