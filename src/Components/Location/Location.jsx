import React, { useState, useEffect, useRef } from 'react';
import Button from '../Button';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import MapComponent from './Map';
import { useFormContext } from '../../context/contextStore';
import AutocompleteCountry from './AutocompleteCountry';
import AutocompleteCity from './AutocompleteCity';

function Location() {
  const { state, dispatch } = useFormContext();
  const [address, setAddress] = useState('')
  const [latitude, setLatitude] = useState()

  const [longitude, setLongitude] = useState('')
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: 'Hotel',
    starRating: 'N/A',
    currency: 'NPR',
  });
  const [cityValue, setCityValue] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [authToken, setAuthToken] = useState('');
  const navigate = useNavigate();
  const [stateValue, setStateValue] = useState('');
  const [pinCode, setPinCode] = useState('');

  const cityInputProps = {
    value: cityValue,
    onChange: (_, { newValue }) => {
      setCityValue(newValue);
      setSelectedCity('');
    },
  };

  const onCitySuggestionSelected = (_, { suggestion }) => {
    setCityValue(suggestion);
    setSelectedCity(suggestion);
  };


  const countryInputProps = {
    value: countryValue,
    onChange: (_, { newValue }) => {
      setCountryValue(newValue);
      setSelectedCountry('');
    },
  };

  const onCountrySuggestionSelected = (_, { suggestion }) => {
    setCountryValue(suggestion);
    setSelectedCountry(suggestion);
  };

  useEffect(() => {
    setLatitude(state.latitude);
    setLongitude(state.longitude);
    setAddress(state.address);
    setSelectedCity(state.city);
    setSelectedCountry(state.country);
    setStateValue(state.state);
    setPinCode(state.pinCode);
  }, [state.address, state.city, state.country, state.latitude, state.longitude, state.state, state.pinCode]);
  // Handle form submission
  const handleSubmit = () => {
    console.log(latitude, longitude, 'testt');
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Object from Basic Components', latitude, longitude, address, selectedCity, selectedCountry, stateValue, pinCode);

      dispatch({ type: 'SET_LATITUDE', payload: latitude });
      dispatch({ type: 'SET_LONGITUDE', payload: longitude });
      dispatch({ type: 'SET_ADDRESS', payload: address });
      dispatch({ type: 'SET_COUNTRY', payload: selectedCountry });
      dispatch({ type: 'SET_CITY', payload: selectedCity });
      dispatch({ type: 'SET_STATE', payload: stateValue });
      dispatch({ type: 'SET_PIN_CODE', payload: pinCode });

      navigate('/contact/description');
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};

    if (!latitude && !longitude) {
      errors.map = 'This field is required';
    }
    if (!address) {
      errors.address = 'This field is required';
    }
    if (!selectedCity) {
      errors.city = 'This field is required';
    }
    if (!selectedCountry) {
      errors.country = 'This field is required';
    }
    if (!pinCode) {
      errors.pinCode = 'Pin Code is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div style={{ fontFamily: `'Poppins', sans-serif` }} className="py-3 md:py-5">
      <div className="w-full md:w-[1000px] mt-4 tracking-wider h-screen md:h-[550px] overflow-x-hidden overflow-y-auto">
        <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
          <h2 className="text-[30px] font-[600]">Location</h2>
          <p className="text-[18px] font-[4000] my-1 text-slate-500">
            Add location details for your property{" "}
          </p>
        </div>
        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">Address</p>
          <input
            type="text"
            name="address"
            placeholder="Enter your property address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
          />
          {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
        </div>

        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">City</p>
          {/* <Autosuggest
            suggestions={citySuggestions}
            onSuggestionsFetchRequested={({ value }) => fetchCitySuggestions(value)}
            onSuggestionsClearRequested={() => setCitySuggestions([])}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={cityInputProps}
            onSuggestionSelected={onCitySuggestionSelected}
          /> */}
          <AutocompleteCity setCityValue={setCityValue} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          {formErrors.city && <p className="text-red-500">{formErrors.city}</p>}
        </div>

        {/* <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">State</p>
          <input
            type="text"
            name="state"
            placeholder="Enter your State"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
          />
          {formErrors.state && <p className="text-red-500">{formErrors.state}</p>}
        </div> */}

        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">Country</p>
          {/* <Autosuggest
            suggestions={countrySuggestions}
            onSuggestionsFetchRequested={({ value }) => fetchCountrySuggestions(value)}
            onSuggestionsClearRequested={() => setCountrySuggestions([])}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={countryInputProps}
            onSuggestionSelected={onCountrySuggestionSelected}
          /> */}
          <AutocompleteCountry setCountryValue={setCountryValue} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          {formErrors.country && <p className="text-red-500">{formErrors.country}</p>}
        </div>

        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">Pin Code</p>
          <input
            type="text"
            name="pinCode"
            placeholder="Enter your Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
          />
          {formErrors.pinCode && <p className="text-red-500">{formErrors.pinCode}</p>}
        </div>



        <div>
          <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
            <div className="my-2">
              <p className="text-[20px] font-[400] my-2 text-slate-500">Location</p>
              <MapComponent setLatitude={setLatitude} setLongitude={setLongitude} />
              {formErrors.map && <p className="text-red-500">{formErrors.map}</p>}
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

export default Location;