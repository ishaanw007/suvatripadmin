import React, { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';

function Contactform() {
  const { state, dispatch } = useFormContext();

  const initialFormData = {
    name: '',
    contactNo: '',
    country: '',
    city: '',
    areaCode: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'This field is required';
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handelSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Contact Components data', formData);
      dispatch({ type: 'SET_CONTACT_DETAILS', payload: formData });
        navigate('basic');
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  return (
    <div>
      <div style={{ fontFamily: `'Poppins', sans-serif` }} className=' w-full md:w-[1000px]  h-screen md:h-[550px] mt-5 overflow-x-hidden overflow-y-auto'>
        <div className='w-full h-auto  md:h-[500px] rounded-lg tracking-wider'>
          <div className='px-2 md:px-5 py-2 mb-1 border-b-[1px] border-slate-300'>
            <h3 className='text-[30px] font-[500] my-2'>Contact Details</h3>
            <p className='text-[20px] font-[400]'>Add Your contact information</p>
          </div>

          <div className='px-2 md:px-5 py-3'>
            <div className='row'>
              <div className='col'>
                <p className='text-slate-500 my-1'>Name</p>
                <input
                  type='text'
                  value={state.contactDetails.name}
                  placeholder='Enter Your name'
                  className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
                {formErrors.name && <p className='text-red-500'>{formErrors.name}</p>}
              </div>
              <div className='col'>
                <p className='text-slate-500 my-1'>Contact No</p>
                <input
                  type='number'
                  value={state.contactDetails.contactNo}
                  placeholder='Enter Your number'
                  className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                  onChange={(e) => handleInputChange('contactNo', e.target.value)}
                />
                {formErrors.contactNo && <p className='text-red-500'>{formErrors.contactNo}</p>}
              </div>
            </div>
            <div className='row my-4'>
              <div className='col'>
                <p className='text-slate-500 my-1'>Country</p>
                <input
                  type='text'
                  value={state.contactDetails.country}
                  placeholder='Enter Your Country'
                  className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
                {formErrors.country && <p className='text-red-500'>{formErrors.country}</p>}
              </div>
              <div className='col'>
                <p className='text-slate-500 my-1'>City</p>
                <input
                  type='text'
                  value={state.contactDetails.city}
                  placeholder='Enter Your City'
                  className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
                {formErrors.city && <p className='text-red-500'>{formErrors.city}</p>}
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='text-slate-500 my-1'>Area Code</p>
                <input
                  type='text'
                  value={state.contactDetails.areaCode}
                  placeholder='Enter Your pincode'
                  className='w-full md:w-[350px] py-[5px] px-1 rounded-md border-[1px] border-slate-400 outline-none'
                  onChange={(e) => handleInputChange('areaCode', e.target.value)}
                />
                {formErrors.areaCode && <p className='text-red-500'>{formErrors.areaCode}</p>}
              </div>
            </div>
          </div>
          <div className='mt-[2px]' onClick={handelSubmit}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
