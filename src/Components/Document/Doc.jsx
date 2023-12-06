import React from 'react'
import DocumnetImg from '../../Assets/img/Document.png'
import Button from '../Button'

function Doc() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5'>
            <div className='border-b-[1px] border-slate-300 py-2'>
                <h3 className='text-[35px] tracking-wider font-[600] text-slate-800'>Document</h3>
                <p className='text-[18px] tracking-wider font-[400] text-slate-600 py-2'>Add your contact information</p>
            </div>
            <div className='border-b-[1px] border-slate-300 py-1'>
                <p className='text-[16px] font-[600] my-2 text-slate-700 uppercase pt-1'>Attach Document</p>
                <input type="radio" id="pan" name="document" value="Pan" />
                <label for="html" className='mx-1 my-1 text-slate-500'>Pan</label><br />
                <input type="radio" id="card" name="document" value="card" />
                <label for="css" className='mx-1 my-1 text-slate-500' >Card</label><br />
            </div>
            <div className='py-4'>
                <div className='w-full border-[1px] border-dashed py-5 rounded-lg bg-[#fff7f7] border-[#ff5f63]'>
                    <div className='w-full md:w-[300px] mx-auto'>
                        <label htmlFor="documnet">
                            <img src={DocumnetImg} alt="doc_img" className='w-[40px] mx-auto' />
                            <p className='text-sm mt-2 font-[600]'><span className='text-[#ff5f63] underline'>Click to upload</span> or Drag and drop document</p>
                            <p className='text-center text-sm text-slate-600'>maximum size 30 MB</p>
                            <input type="file" name="document" id="documnet" className='w-[0px]' />
                        </label>
                    </div>
                </div>
            </div>


            <div className='mt-3'>
                <Button />
            </div>

        </div>
    )
}

export default Doc
