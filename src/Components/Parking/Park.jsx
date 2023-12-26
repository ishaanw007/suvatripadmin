import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';

function Park() {
  const { state, dispatch } = useFormContext();
  const [isParkingAvailable, setIsParkingAvailable] = useState(state.parking.isParkingAvailable || '');
  const [parkingCost, setParkingCost] = useState(state.parking.parkingCost || '');
  const [costType, setCostType] = useState(state.parking.costType || 'Per day');
  const [isParkingReserved, setIsParkingReserved] = useState(state.parking.isParkingReserved || '');
  const [parkingLocation, setParkingLocation] = useState(state.parking.parkingLocation || '');
  const [warning, setWarning] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // You can add more specific initialization logic here
    // For example, if the context data is not available, you can fetch it or set default values
    // Just make sure to handle the async nature of data fetching if needed
  }, []);

  const handleIsParkingAvailableChange = (event) => {
    setIsParkingAvailable(event.target.value);
  };

  const handleParkingCostChange = (event) => {
    setParkingCost(event.target.value);
  };

  const handleCostTypeChange = (event) => {
    const selectedCostType = event.target.innerText;
    setCostType(selectedCostType);

    // Dynamically set parking cost based on the selected cost type
    if (selectedCostType === 'Per day') {
      setParkingCost('100');
    } else if (selectedCostType === 'Per week') {
      setParkingCost('500');
    } else if (selectedCostType === 'Per Month') {
      setParkingCost('1000');
    }
  };

  const handleIsParkingReservedChange = (event) => {
    setIsParkingReserved(event.target.value);
  };

  const handleParkingLocationChange = (event) => {
    setParkingLocation(event.target.value);
  };

  const handleSaveChanges = () => {
    if (!isParkingAvailable || (!isParkingAvailable.includes('no') && !parkingCost) || !parkingLocation) {
      setWarning('Please fill in all fields before proceeding.');
      return;
    }

    const parkingData = {
      isParkingAvailable: isParkingAvailable,
      parkingCost: parkingCost,
      costType: costType,
      isParkingReserved: isParkingReserved,
      parkingLocation: parkingLocation,
    };

    dispatch({ type: 'SET_PARKING', payload: parkingData });
    setWarning('');
    navigate('/contact/transportation');
    console.log('This is the data from the parking components:', parkingData);
  };

    return (
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="w-full md:w-[1000px] pt-5"
      >
        {/* Start parking Heading */}
        <div className="border-b-[1px] border-slate-300 py-2">
          <h3 className="text-[30px] font-700 tracking-wider text-slate-800 pb-1">
            Parking
          </h3>
          <p className="text-[18px] font-500 tracking-wider text-slate-600 pb-1">
            Tell about the Parking situation at your hotel
          </p>
        </div>

        {/* Is Parking available */}
        <div>
          <p className="text-[18px] font-[600] my-2 text-slate-700">
            Is Parking available at your hotel ?
          </p>
          <input
            type="radio"
            id="yesFree"
            name="isParkingAvailable"
            value="yesFree"
            checked={isParkingAvailable === "yesFree"}
            onChange={handleIsParkingAvailableChange}
          />
          <label htmlFor="yesFree" className="mx-1 my-1 text-slate-500">
            Yes, Free
          </label>
          <br />
          <input
            type="radio"
            id="yesPaid"
            name="isParkingAvailable"
            value="yesPaid"
            checked={isParkingAvailable === "yesPaid"}
            onChange={handleIsParkingAvailableChange}
          />
          <label htmlFor="yesPaid" className="mx-1 my-1 text-slate-500">
            Yes, Paid
          </label>
          <br />
          <input
            type="radio"
            id="no"
            name="isParkingAvailable"
            value="no"
            checked={isParkingAvailable === "no"}
            onChange={handleIsParkingAvailableChange}
          />
          <label htmlFor="no" className="mx-1 my-1 text-slate-500">
            No
          </label>
          <br />
        </div>

        {/* Parking Cost Section */}
        {isParkingAvailable === "yesPaid" && (
          <div className="border-b-[1px] border-slate-300 py-2">
            <p className="text-[18px] text-slate-800 font-[600] mb-1">
              How much does the Parking cost
            </p>
            <div className="input-group w-full md:w-[400px]">
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                value={parkingCost}
                onChange={handleParkingCostChange}
              />
              <>
                <button
                  className="btn btn-outline-secondary dropdown-toggle mx-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {costType}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li onClick={handleCostTypeChange} className="dropdown-item">
                    Per day
                  </li>
                  <li onClick={handleCostTypeChange} className="dropdown-item">
                    Per week
                  </li>
                  <li onClick={handleCostTypeChange} className="dropdown-item">
                    Per Month
                  </li>
                </ul>
              </>
            </div>
          </div>
        )}

        {/* Parking Location Section */}
        <div>
          <p className="text-[18px] font-[500] my-2 text-slate-800">
            Where is the parking located ?{" "}
          </p>
          <input
            type="radio"
            id="On Site"
            name="parkingLocation"
            value="On Site"
            checked={parkingLocation === "On Site"}
            onChange={handleParkingLocationChange}
          />
          <label htmlFor="On Site" className="mx-1 text-slate-500">
            On Site
          </label>
          <br />
          <input
            type="radio"
            id="Remote"
            name="parkingLocation"
            value="Remote"
            checked={parkingLocation === "Remote"}
            onChange={handleParkingLocationChange}
          />
          <label htmlFor="Remote" className="mx-1 my-[2px] text-slate-500">
            Remote
          </label>
          <br />
        </div>
        {warning && (
        <div className="text-red-500 mt-2">
          {warning}
        </div>
      )}
        {/* Bottom-Button */}
       
          <div className="mt-3" onClick={handleSaveChanges}>
            <Button />
          </div>

      </div>
    );
}

export default Park
