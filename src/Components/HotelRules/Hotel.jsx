import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';

function Hotel() {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

  // Initialize state with previously entered values or default values
  const [checkIn, setCheckIn] = useState({
    from: (state.hotelRules.checkInData && state.hotelRules.checkInData.from) || '00:00',
    until: (state.hotelRules.checkInData && state.hotelRules.checkInData.until) || '00:00',
  });
  const [checkOut, setCheckOut] = useState({
    from: (state.hotelRules.checkOutData && state.hotelRules.checkOutData.from) || '06:00',
    until: (state.hotelRules.checkOutData && state.hotelRules.checkOutData.until) || '06:00',
  });
  const [allowChildren, setAllowChildren] = useState(state.hotelRules.allowChildren || '');
  const [warning, setWarning] = useState('');

  useEffect(() => {
    // You can add more specific initialization logic here
    // For example, if the context data is not available, you can fetch it or set default values
    // Just make sure to handle the async nature of data fetching if needed
  }, []);

  const handleAllowChildrenChange = (event) => {
    setAllowChildren(event.target.value);
  };

  const handleCheckInChange = (event) => {
    const { id, value } = event.target;
    setCheckIn((prevCheckIn) => ({ ...prevCheckIn, [id]: value }));
  };

  const handleCheckOutChange = (event) => {
    const { id, value } = event.target;
    setCheckOut((prevCheckOut) => ({ ...prevCheckOut, [id]: value }));
  };

  const handleSaveChanges = () => {
    if (!checkIn.from || !checkIn.until || !checkOut.from || !checkOut.until || !allowChildren) {
      setWarning('Please fill in all fields before proceeding.');
      return;
    }

    const formData = {
      allowChildren: allowChildren,
      checkInData: checkIn,
      checkOutData: checkOut,
      // Add other form fields here
    };

    console.log('This is the HotelRules data', formData);
    dispatch({ type: 'SET_HOTEL_RULES', payload: formData });
    setWarning('');
    navigate('/contact/payment');
  };


    return (
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="w-full md:w-[1000px] pt-5 "
      >
        <div className="border-b-[1px] border-slate-300">
          <h3 className="text-slate-700 text-[30px] font-[500] leading-10 tracking-wider">
            Hotel Rules
          </h3>
          <p className="pt-1 pb-3 tracking-wider text-[20px] font-[400] text-slate-500">
            Add your hotel rules
          </p>
        </div>
        <div>
          <div className="py-3 tracking-wider">
            <p className="text-slate-600 text-sm uppercase">
              What are your check-in and check-out time
            </p>
          </div>
          {/* Check-In start */}
          <div className="container">
            <p className="text-[18px] font-[500] text-slate-700">Check-In</p>
            <div className="row border-b-[1px] border-slate-300 pb-4">
              <div className="col">
                <p className="text-[18px] font-[400] my-2 text-slate-500">
                  From
                </p>
                <div className="input-group w-full md:w-[400px]">
                  <select
                    className="form-select"
                    id="from"
                    onChange={handleCheckInChange}
                    value={checkIn.from}
                  >
                    {/* Your options here */}
                    <option selected>00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <p className="text-[18px] font-[400] my-2 text-slate-500">
                  Untill
                </p>
                <div className="input-group w-full md:w-[400px]">
                  <select
                    className="form-select"
                    id="until"
                    onChange={handleCheckInChange}
                    value={checkIn.until}
                  >
                    {/* Your options here */}
                    <option selected>00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Check-out start */}
          <div className="container">
            <p className="pt-3 text-[18px] font-[500] text-slate-700">
              Check-Out
            </p>
            <div className="row border-b-[1px] border-slate-300 pb-3">
              <div className="col">
                <p className="text-[18px] font-[400] my-2 text-slate-500">
                  From
                </p>
                <div className="input-group w-full md:w-[400px]">
                  <select
                    className="form-select"
                    id="from"
                    onChange={handleCheckOutChange}
                    value={checkOut.from}
                  >
                    {/* Your options here */}
                    <option selected>06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                    <option value="24:00">24:00</option>
                    <option value="00:00">00:00</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <p className="text-[18px] font-[400] my-2 text-slate-500">
                  Untill
                </p>
                <div className="input-group w-full md:w-[400px]">
                  <select
                    className="form-select"
                    id="until"
                    onChange={handleCheckOutChange}
                    value={checkOut.until}
                  >
                    {/* Your options here */}
                    <option selected>06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                    <option value="24:00">24:00</option>
                    <option value="00:00">00:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Allow Children start */}
          <div className="px-2 md:px-0 py-2 border-b-[1px] border-slate-300">
            <p className="text-[18px] font-[400] my-2 text-slate-500">
              Do You Allow Children?
            </p>
            <input
              type="radio"
              id="yes"
              name="allowChildren"
              value="yes"
              checked={allowChildren === "yes"}
              onChange={handleAllowChildrenChange}
            />
            <label htmlFor="yes" className="mx-1">
              Yes
            </label>
            <br />
            <input
              type="radio"
              id="no"
              name="allowChildren"
              value="no"
              checked={allowChildren === "no"}
              onChange={handleAllowChildrenChange}
            />
            <label htmlFor="no" className="mx-1">
              No
            </label>
            <br />
          </div>
          {warning && (
        <div className="text-red-500 mt-2">
          {warning}
        </div>
      )}
        </div>
        
  
          <div className="mt-3" onClick={handleSaveChanges}>
            <Button />
          </div>

      </div>
    );
}

export default Hotel
