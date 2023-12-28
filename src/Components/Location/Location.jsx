import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Map from './Map';
import { useFormContext } from '../../context/contextStore';
import Autosuggest from 'react-autosuggest';

function Location() {
  const { state, dispatch } = useFormContext();
  const [address, setAddress] = useState('')
  const [latitude, setLatitude] = useState('')
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
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Function to fetch city suggestions based on input
  const fetchCitySuggestions = async (value) => {
    const cities = [
      "Tokyo, Japan", "Delhi, India", "Shanghai, China", "Mumbai, India", "Beijing, China",
      "Dhaka, Bangladesh", "Karachi, Pakistan", "Istanbul, Turkey", "Seoul, South Korea", "Jakarta, Indonesia",
      "Moscow, Russia", "Istanbul, Turkey", "London, United Kingdom", "Paris, France", "Madrid, Spain",
      "Berlin, Germany", "Rome, Italy", "Kiev, Ukraine", "Vienna, Austria", "Amsterdam, Netherlands",
      "New York City, United States", "Los Angeles, United States", "Mexico City, Mexico", "Toronto, Canada",
      "Chicago, United States", "Houston, United States", "Havana, Cuba", "Santo Domingo, Dominican Republic",
      "Guatemala City, Guatemala", "Panama City, Panama",
      "São Paulo, Brazil", "Buenos Aires, Argentina", "Rio de Janeiro, Brazil", "Bogotá, Colombia", "Lima, Peru",
      "Santiago, Chile", "Caracas, Venezuela", "Asunción, Paraguay", "Quito, Ecuador", "Montevideo, Uruguay",
      "Cairo, Egypt", "Lagos, Nigeria", "Kinshasa, Democratic Republic of the Congo", "Johannesburg, South Africa",
      "Nairobi, Kenya", "Casablanca, Morocco", "Accra, Ghana", "Addis Ababa, Ethiopia", "Dar es Salaam, Tanzania",
      "Cape Town, South Africa",
      "Sydney, Australia", "Melbourne, Australia", "Brisbane, Australia", "Auckland, New Zealand", "Perth, Australia",
      "Adelaide, Australia", "Wellington, New Zealand", "Christchurch, New Zealand", "Suva, Fiji", "Port Moresby, Papua New Guinea"
    ];
    const filteredCities = cities.filter(
      (city) => city.toLowerCase().startsWith(value.toLowerCase())
    );
    setCitySuggestions(filteredCities);
  };

  const fetchCountrySuggestions = async (value) => {
    const countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
      "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
      "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde",
      "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
      "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
      "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", 'Eswatini (fmr. "Swaziland")', "Ethiopia",
      "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
      "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
      "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
      "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
      "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
      "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
      "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
      "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru",
      "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
      "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
      "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
      "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
      "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay",
      "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    const filteredCountries = countries.filter(
      (country) => country.toLowerCase().startsWith(value.toLowerCase())
    );

    console.log(filteredCountries);
    setCountrySuggestions(filteredCountries);
  };

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
    if (Object.keys(state.basicDetails).length !== 0) {
      setFormData(state.basicDetails)
    }
  }, [state.basicDetails])

  // Handle form submission
  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Object from Basic Components', formData);

      dispatch({ type: 'SET_LATITUDE', payload: latitude });
      dispatch({ type: 'SET_LONGITUDE', payload: longitude });
      dispatch({ type: 'SET_ADDRESS', payload: address });
      dispatch({ type: 'SET_COUNTRY', payload: address });
      dispatch({ type: 'SET_CITY', payload: address });
      navigate('/contact/description');
    } else {
      console.log('Form submission aborted due to validation errors');
    }
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    if (!address || !latitude || !longitude || !selectedCity || !selectedCountry) {
      errors.map = 'This field is required';
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
          <p className="text-[20px] font-[400] my-2 text-slate-500">Country</p>
          <Autosuggest
            suggestions={countrySuggestions}
            onSuggestionsFetchRequested={({ value }) => fetchCountrySuggestions(value)}
            onSuggestionsClearRequested={() => setCountrySuggestions([])}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={countryInputProps}
            onSuggestionSelected={onCountrySuggestionSelected}
          />
          {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
        </div>
        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">City</p>
          <Autosuggest
            suggestions={citySuggestions}
            onSuggestionsFetchRequested={({ value }) => fetchCitySuggestions(value)}
            onSuggestionsClearRequested={() => setCitySuggestions([])}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={cityInputProps}
            onSuggestionSelected={onCitySuggestionSelected}
          />
          {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
        </div>
        <div className="my-2">
          <p className="text-[20px] font-[400] my-2 text-slate-500">Address</p>
          <input
            type="text"
            name="propertyName"
            placeholder="Enter your property name"
            value={formData.address}
            onChange={handleChange}
            className="w-full md:w-[400px] py-2 px-1 rounded-md outline-none border-[1px] border-slate-400"
          />
          {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
        </div>
        <div>
          <div className="px-2 md:px-5 py-2 border-b-[1px] border-slate-300">
            <div className="my-2">
              <p className="text-[20px] font-[400] my-2 text-slate-500">Location</p>
              <Map setAddress={setAddress} setLatitude={setLatitude} setLongitude={setLongitude} />
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

export default Location
