import React from 'react'
import Button from '../Button'

function Transport() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5'>
            <div className='border-b-[1px] border-slate-300 py-3'>
                <h3 className='text-[35px] mb-1 font-[600] text-slate-800 tracking-wider'>Transportation</h3>
                <p className='text-[18px] py-1 font-[500] text-slate-600 tracking-wider'>Add transport information wheather you provide pickup or not</p>
            </div>
            <div className='py-2'>
                <p className='text-[14px] font-[600] my-2 text-slate-600 uppercase'>Do you provide pickup service to guest ? </p>
                <input type="radio" id="yes" name="IsProvidePickUpService" value="yes" />
                <label for="yes" className='mx-1 my-1 text-slate-500'>Yes</label><br />
                <input type="radio" id="No" name="IsProvidePickUpService" value="No" />
                <label for="No" className='mx-1 my-1 text-slate-500' >No</label><br />
            </div>
            <div className='py-2'>
                <h2 className='text-[20px] text-slate-600 font-[700]'>Specify Condition</h2>
            </div>
            <div>
                <p className='text-[14px] font-[600] my-2 text-slate-600 uppercase'>Is it free or payable ? </p>
                <input type="radio" id="Free" name="IsCharge" value="Free" />
                <label for="Free" className='mx-1 my-1 text-slate-500'>Free</label><br />
                <input type="radio" id="Payable" name="IsCharge" value="Payable" />
                <label for="Payable" className='mx-1 my-1 text-slate-500' >Payable</label><br />
            </div>
            <div className='py-2'>
                <p className='text-[14px] font-[600] my-2 text-slate-600 uppercase'>How much would you charge for a pick-up for your guest ?</p>
                <input type="text" className='w-full md:w-[300px] border-[1px] border-slate-400 outline-none px-1 py-1 rounded-md' />
            </div>



            <div className='mt-3'>
                <Button />
            </div>


        </div>
    )
}

export default Transport
