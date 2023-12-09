import React, { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Contactform() {
    const initialFormData = {
        name: '',
        contactNo: '',
        country: '',
        city: '',
        areaCode: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };


    const handelSubmit = () => {
        // console.log(formData)
        console.log("Contact Componets data", formData)
        // Pass the contact data to the util component
        setFormData(initialFormData);

    }

    return (
        <div>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className=' w-full md:w-[1000px]  h-screen md:h-[550px] mt-5 overflow-x-hidden overflow-y-auto'>
                <div className='w-full h-auto  md:h-[500px] rounded-lg tracking-wider'>
                    <div className='px-2 md:px-5 py-2 mb-1 border-b-[1px] border-slate-300'>
                        <h3 className='text-[30px] font-[500] my-2'>Contact</h3>
                        <p className='text-[20px] font-[400]'>Add Your contact information</p>
                    </div>

                    <div className='px-2 md:px-5 py-3'>
                        <div className='row'>
                            <div className='col'>
                                <p className='uppercase my-1'>Name</p>
                                <input
                                    type='text'
                                    value={formData.name}
                                    placeholder='Enter Your name'
                                    className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                            </div>
                            <div className='col'>
                                <p className='uppercase my-1'>Contact No</p>
                                <input
                                    type='text'
                                    value={formData.contactNo}
                                    placeholder='Enter Your number'
                                    className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                                    onChange={(e) => handleInputChange('contactNo', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col'>
                                <p className='uppercase my-1'>Country</p>
                                <input
                                    type='text'
                                    value={formData.country}
                                    placeholder='Enter Your Country'
                                    className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                                    onChange={(e) => handleInputChange('country', e.target.value)}
                                />
                            </div>
                            <div className='col'>
                                <p className='uppercase my-1'>City</p>
                                <input
                                    type='text'
                                    value={formData.city}
                                    placeholder='Enter Your City'
                                    className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                                    onChange={(e) => handleInputChange('city', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p className='uppercase my-1'>Area Code</p>
                                <input
                                    type='text'
                                    value={formData.areaCode}
                                    placeholder='Enter Your pincode'
                                    className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                                    onChange={(e) => handleInputChange('areaCode', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="basic">
                <div className='mt-[2px]' onClick={handelSubmit}>
                    <Button />
                </div>
            </Link>
        </div>
    )
}

export default Contactform
