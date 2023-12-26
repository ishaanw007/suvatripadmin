import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Description() {
  const { state, dispatch } = useFormContext();
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'Hotel',
    starRating: 'N/A',
    currency: 'NPR',
  });
  const [formErrors, setFormErrors] = useState({});
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  useEffect(() => {
    if(state.description !== '') {
      setEditorHtml(state.description)
    }
  }, [state.description])

  // Handle form submission
  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {

      navigate('/contact/property-photos');
      dispatch({ type: 'SET_DESCRIPTION', payload: editorHtml });
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    if(!editorHtml) {
      errors.description = "This field is required"
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div style={{ fontFamily: `'Poppins', sans-serif` }} className="py-3 md:py-5">
      <div className="w-full md:w-[1000px] mt-4 tracking-wider h-screen md:h-[550px] overflow-x-hidden overflow-y-auto">
        <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
          <h2 className="text-[30px] font-[600]">Property Description</h2>
          <p className="text-[18px] font-[4000] my-1 text-slate-500">
            Add a description of your property{" "}
          </p>
        </div>
        <div>
          <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
            <div className='mt-4'>
              <ReactQuill
                theme="snow" // you can use different themes like 'snow', 'bubble', etc.
                value={editorHtml}
                onChange={handleEditorChange}
              />
            </div>
            {formErrors.description && <p className="text-red-500 mt-2">{formErrors.description}</p>}
          </div>
        </div>
      </div>

      <div className="mt-2" onClick={handleSubmit}>
        <Button />
      </div>

    </div>


  );
}

export default Description
