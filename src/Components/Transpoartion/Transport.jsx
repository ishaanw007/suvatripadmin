import React, { useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';
function Transport() {
  const { state, dispatch } = useFormContext();
  const [providePickUpService, setProvidePickUpService] = useState('');
  const [chargeType, setChargeType] = useState('');
  const [pickupCharge, setPickupCharge] = useState('');
  const [warning, setWarning] = useState(''); // State to track the warning message
  const navigate = useNavigate();
  const handleProvidePickUpServiceChange = (event) => {
    setProvidePickUpService(event.target.value);
  };

  const handleChargeTypeChange = (event) => {
    setChargeType(event.target.value);
  };

  const handlePickupChargeChange = (event) => {
    setPickupCharge(event.target.value);
  };

  const handleSaveChanges = () => {
    // Check if any required field is empty
    if (!providePickUpService || !chargeType || (chargeType === 'Payable' && !pickupCharge)) {
      setWarning('Please fill in all fields before proceeding.');
      return; // Do not proceed to the next page
    }

    // Create an object with the selected values
    const pickupServiceData = {
      providePickUpService: providePickUpService,
      chargeType: chargeType,
      pickupCharge: pickupCharge,
    };

    dispatch({ type: 'SET_TRANSPORTATION', payload: pickupServiceData });
    setWarning(''); // Clear the warning if all fields are filled
    // Log the pickup service data or perform other actions with it
    navigate('/contact/document')
    console.log('Pickup Service Data:', pickupServiceData);
  };
    return (
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="w-full md:w-[1000px] pt-5"
      >
        <div className="border-b-[1px] border-slate-300 py-3">
          <h3 className="text-[35px] mb-1 font-[600] text-slate-800 tracking-wider">
            Transportation
          </h3>
          <p className="text-[18px] py-1 font-[500] text-slate-600 tracking-wider">
            Add transport information wheather you provide pickup or not
          </p>
        </div>
        {/* Provide service */}
        <div className="py-2">
          <p className="text-[14px] font-[600] my-2 text-slate-600 uppercase">
            Do you provide pickup service to guests?
          </p>
          <input
            type="radio"
            id="yes"
            name="providePickUpService"
            value="yes"
            checked={providePickUpService === "yes"}
            onChange={handleProvidePickUpServiceChange}
          />
          <label htmlFor="yes" className="mx-1 my-1 text-slate-500">
            Yes
          </label>
          <br />
          <input
            type="radio"
            id="No"
            name="providePickUpService"
            value="No"
            checked={providePickUpService === "No"}
            onChange={handleProvidePickUpServiceChange}
          />
          <label htmlFor="No" className="mx-1 my-1 text-slate-500">
            No
          </label>
          <br />
        </div>

        {/* Specify Condition Section */}
        <div className="py-2">
          <h2 className="text-[20px] text-slate-600 font-[700]">
            Specify Condition
          </h2>
        </div>

        {/* Is it free or payable Section */}
        <div>
          <p className="text-[14px] font-[600] my-2 text-slate-600 uppercase">
            Is it free or payable?
          </p>
          <input
            type="radio"
            id="Free"
            name="chargeType"
            value="Free"
            checked={chargeType === "Free"}
            onChange={handleChargeTypeChange}
          />
          <label htmlFor="Free" className="mx-1 my-1 text-slate-500">
            Free
          </label>
          <br />
          <input
            type="radio"
            id="Payable"
            name="chargeType"
            value="Payable"
            checked={chargeType === "Payable"}
            onChange={handleChargeTypeChange}
          />
          <label htmlFor="Payable" className="mx-1 my-1 text-slate-500">
            Payable
          </label>
          <br />
        </div>

        {/* How much would you charge for a pick-up for your guest? Section */}
        {chargeType==="Payable" && <div className="py-2">
          <p className="text-[14px] font-[600] my-2 text-slate-600 uppercase">
            How much would you charge for a pick-up for your guest?
          </p>
          <input
            type="text"
            className="w-full md:w-[300px] border-[1px] border-slate-400 outline-none px-1 py-1 rounded-md"
            value={pickupCharge}
            onChange={handlePickupChargeChange}
          />
        </div>}
     
          {/* Warning Message */}

          {warning && (
            <div className="text-red-500 text-sm font-bold">{warning}</div>
          )}
          {/* Save Changes Button */}
          <div className="mt-3" onClick={handleSaveChanges}>
            <Button />
          </div>
        
      </div>
    );
}

export default Transport
