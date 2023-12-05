import React from 'react'
import Button from './Button'

function Payment() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5'>
            <div className='border-b-[1px] border-slate-300 pt-1 pb-2'>
                <h3 className='text-[30px] font-[600] text-slate-800 tracking-wider leading-10'>Payment policy</h3>
                <p className='text-[18px] font-[400] text-slate-500 tracking-wider pb-1'>Add your contact information</p>
            </div>
            {/* Payment Option */}
            <div className='border-b-[1px] border-slate-300 py-3'>
                <h4 className='text-[22px] font-bold text-slate-800 tracking-wider'>Payment</h4>
                <div className='pt-1'>
                    <p className='text-[14px] font-[600] my-2 text-slate-600 uppercase'>Payment Accept through</p>
                    <input type="radio" id="Only card" name="PaymentOption" value="Only card" />
                    <label for="Only card" className='mx-1 text-slate-500'>Only card</label><br />
                    <input type="radio" id="Pay at hotel" name="PaymentOption" value="Pay at hotel" />
                    <label for="Pay at hotel" className='mx-1 text-slate-500' >Pay at hotel</label><br />
                    <input type="radio" id="Both" name="PaymentOption" value="Both" />
                    <label for="Both" className='mx-1 text-slate-500' >Both</label><br />
                </div>
            </div>
            {/* Canclelation Option */}
            <div className='border-b-[1px] border-slate-300 py-3'>
                <h4 className='text-[22px] font-bold text-slate-800 tracking-wider'>Cancelattion Policy</h4>
                <div className=''>
                    <p className='text-[14px] font-[600] my-2 text-slate-600 uppercase'>Is there is period when the guest can cancle free of charge ?</p>
                    <input type="radio" id="Yes" name="cancleOption" value="Yes" />
                    <label for="Yes" className='mx-1 text-slate-500'>Yes</label><br />
                    <input type="radio" id="No" name="cancleOption" value="No" />
                    <label for="No" className='mx-1 text-slate-500' >No</label><br />
                </div>
            </div>
            {/* Specific condition */}
            <div className='pt-3'>
                <p className='text-[16px] font-[700] text-slate-800 tracking-wider'>Specific condition</p>
                <p className='text-[14px] font-[600] my-2 text-slate-600'>How Long  before the arrival can guest cancle free of charge</p>
                <div class="input-group w-full md:w-[400px]">
                    <select class="form-select" id="inputGroupSelect02">
                        <option selected>Until two days before arrival</option>
                        <option value="three days">Until three days before arrival</option>
                        <option value="four days">Until four days before arrival</option>
                        <option value="five days">Until five days before arrival</option>
                    </select>
                </div>
            </div>


            <div className='mt-4'>
                <Button />
            </div>

        </div>
    )
}

export default Payment
