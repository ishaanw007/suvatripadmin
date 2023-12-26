import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';

function Basic() {
  const { state, dispatch } = useFormContext();
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'Hotel',
    starRating: 'N/A',
    currency: 'NPR',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  useEffect(() => {
    if(Object.keys(state.basicDetails).length !== 0) {
      setFormData(state.basicDetails)
    }
  }, [state.basicDetails])

  // Handle form submission
  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Object from Basic Components', formData);
       
      navigate('/contact/description');
      dispatch({ type: 'SET_BASIC_DETAILS', payload: formData });
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  // Validate the form
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

  return (
    <div style={{ fontFamily: `'Poppins', sans-serif` }} className="py-3 md:py-5">
      <div className="w-full md:w-[1000px] mt-4 tracking-wider h-screen md:h-[550px] overflow-x-hidden overflow-y-auto">
        <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
          <h2 className="text-[30px] font-[600]">Basic details</h2>
          <p className="text-[18px] font-[4000] my-1 text-slate-500">
            The basic add your property name, address, Facilities, and more{" "}
          </p>
        </div>
        <div>
          <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
            <div>
              <p className="text-[20px] font-[400] my-2 text-slate-500">Property Name</p>
              <input
                type="text"
                name="propertyName"
                placeholder="Enter your property name"
                value={formData.propertyName}
                onChange={handleChange}
                className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
              />
              {formErrors.propertyName && <p className="text-red-500">{formErrors.propertyName}</p>}
            </div>
            {/* Property Type */}
            <div className="my-2">
              <p className="text-[20px] font-[400] my-2 text-slate-500">Property type</p>
              <div className="input-group w-full md:w-[400px]">
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  style={{
                    padding: "10px", // Added padding for options
                  }}
                >
                  <option selected disabled hidden>
                    Choose Property Type
                  </option>
                  <option selected>Hotel</option>
                  <option value="Resort">Resort</option>
                  <option value="Guesthouse / bed and breakfast">
                    Guesthouse / bed and breakfast
                  </option>
                  <option value="Motel">Motel</option>
                  <option value="Entire apartment">Entire apartment</option>
                  <option value="Service apartment">Serviced apartment</option>
                  <option value="Home stay">Home stay</option>
                  <option value="Inn">Inn</option>
                  <option value="Resort Villa">Resort Villa</option>
                  <option value="Ryokan">Ryokan</option>
                  <option value="Entire House">Entire House</option>
                  <option value="Capsule hotel">Capsule hotel</option>
                  <option value="Holiday Park/caravan park">
                    Holiday Park/caravan park
                  </option>
                  <option value="Love Hotel">Love Hotel</option>
                  <option value="Entire villa">Entire villa</option>
                  <option value="Entire villa">Lodge</option>
                  <option value="Entire bungalow">Entire bungalow</option>
                  <option value="Tent">Tent</option>
                  <option value="Farm Stay">Farm Stay</option>
                  {/* Add other property types */}
                </select>
                </div>
              {formErrors.propertyType && <p className="text-red-500">{formErrors.propertyType}</p>}
            </div>
            {/* Rating Div */}
            <div className="my-2 tracking-wider cursor-pointer">
            <div className="my-2 tracking-wider cursor-pointer">
              <p className="text-[20px] font-[400] my-2 text-slate-500">
                What is the star rating of your hotel?
              </p>
              <div>
                <input
                  type="radio"
                  id="N/A"
                  className="my-1"
                  name="starRating"
                  value="N/A"
                  checked={formData.starRating === "N/A"}
                  onChange={handleChange}
                />
                <label htmlFor="N/A" className="m-1">
                  N/A
                </label>
                <br />
                {[1, 2, 3, 4, 5].map((rating) => (
                  <React.Fragment key={rating}>
                    <input
                      type="radio"
                      id={rating}
                      className="my-1"
                      name="starRating"
                      value={rating.toString()}
                      checked={formData.starRating === rating.toString()}
                      onChange={handleChange}
                      style={{
                        backgroundColor:
                          formData.starRating === rating.toString() || false
                            ? "#FF5F63"
                            : "transparent",
                      }}
                    />
                    <label htmlFor={rating} className="m-1">
                      {rating} star
                      {[...Array(rating)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="inline"
                          style={{
                            color:
                              formData.starRating === rating.toString()
                                ? "#FFD700"
                                : "#E4E5E7",
                          }}
                        />
                      ))}
                    </label>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>

         
            <div className="my-2">
              <p className="text-[20px] font-[400] my-2 text-slate-500">Currency</p>
              <div className="input-group w-full md:w-[400px]">
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option selected>NPR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              {formErrors.currency && <p className="text-red-500">{formErrors.currency}</p>}
            </div>
          </div>
          </div>
          {/* New Question about the channel manager */}
          {/* <div className="px-2 md:px-0">
            <p className="text-[20px] font-[400] my-2 text-slate-500">
              Does the property work with the channel manager?
            </p>
            <input
              type="radio"
              id="yes"
              name="propertyWorks"
              value="yes"
              checked={formData.propertyWorks === "yes"}
              onChange={handleChange}
            />
            <label
              htmlFor="yes"
              className={`mx-1 ${
                formData.propertyWorks === "yes" ? "selected" : ""
              }`}
            >
              Yes
            </label>
            <br />
            <input
              type="radio"
              id="no"
              name="propertyWorks"
              value="no"
              checked={formData.propertyWorks === "no"}
              onChange={handleChange}
            />
            <label
              htmlFor="no"
              className={`mx-1 ${
                formData.propertyWorks === "no" ? "selected" : ""
              }`}
            >
              No
            </label>
            <br />
          </div> */}
        </div>
      </div>
     
        <div className="mt-2" onClick={handleSubmit}>
          <Button />
        </div>
      
    </div>


  );
}

export default Basic
