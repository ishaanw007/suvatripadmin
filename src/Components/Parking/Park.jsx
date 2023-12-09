import React, { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Park() {
    const [isParkingAvailable, setIsParkingAvailable] = useState('');
    const [parkingCost, setParkingCost] = useState('');
    const [costType, setCostType] = useState('Per day');
    const [isParkingReserved, setIsParkingReserved] = useState('');
    const [parkingLocation, setParkingLocation] = useState('');

    const handleIsParkingAvailableChange = (event) => {
        setIsParkingAvailable(event.target.value);
    };

    const handleParkingCostChange = (event) => {
        setParkingCost(event.target.value);
    };

    const handleCostTypeChange = (event) => {
        setCostType(event.target.innerText);
    };

    const handleIsParkingReservedChange = (event) => {
        setIsParkingReserved(event.target.value);
    };

    const handleParkingLocationChange = (event) => {
        setParkingLocation(event.target.value);
    };
    const handleSaveChanges = () => {
        // Create an object with the selected values
        const parkingData = {
            isParkingAvailable: isParkingAvailable,
            parkingCost: parkingCost,
            costType: costType,
            isParkingReserved: isParkingReserved,
            parkingLocation: parkingLocation,
        };

        // Log the parking data or perform other actions with it
        console.log('This is the data from the parking componets:', parkingData);
    };

    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5'>
            {/* Start parking Heading */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <h3 className='text-[30px] font-700 tracking-wider text-slate-800 pb-1'>Parking</h3>
                <p className='text-[18px] font-500 tracking-wider text-slate-600 pb-1'>Tell about the Parking situation at your hotel</p>
            </div>
            {/* Is Parking available */}
            <div>
                <p className='text-[18px] font-[600] my-2 text-slate-700'>Is Parking available at your hotel ?</p>
                <input
                    type="radio"
                    id="yesFree"
                    name="isParkingAvailable"
                    value="yesFree"
                    checked={isParkingAvailable === 'yesFree'}
                    onChange={handleIsParkingAvailableChange}
                />
                <label htmlFor="yesFree" className='mx-1 my-1 text-slate-500'>Yes, Free</label><br />
                <input
                    type="radio"
                    id="noPaid"
                    name="isParkingAvailable"
                    value="noPaid"
                    checked={isParkingAvailable === 'noPaid'}
                    onChange={handleIsParkingAvailableChange}
                />
                <label htmlFor="noPaid" className='mx-1 my-1 text-slate-500' >No, Paid</label><br />
                <input
                    type="radio"
                    id="no"
                    name="isParkingAvailable"
                    value="no"
                    checked={isParkingAvailable === 'no'}
                    onChange={handleIsParkingAvailableChange}
                />
                <label htmlFor="no" className='mx-1 my-1 text-slate-500' >No</label><br />
            </div>

            {/* Parking Cost Section */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <p className='text-[18px] text-slate-800 font-[600] mb-1'>How much does the Parking cost</p>
                <div className="input-group w-full md:w-[400px]">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        value={parkingCost}
                        onChange={handleParkingCostChange}
                    />
                    <button
                        className="btn btn-outline-secondary dropdown-toggle mx-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                    >
                        {costType}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li onClick={handleCostTypeChange} className="dropdown-item">Per day</li>
                        <li onClick={handleCostTypeChange} className="dropdown-item">Per week</li>
                        <li onClick={handleCostTypeChange} className="dropdown-item">Per Month</li>
                    </ul>
                </div>
            </div>

            {/* Is Parking Reserved Section */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <p className='text-[18px] font-[500] my-1 text-slate-800'>Do They Need to Reserve a parking spot ? </p>
                <input
                    type="radio"
                    id="Reservation, Nedded"
                    name="isParkingReserved"
                    value="Reservation, Nedded"
                    checked={isParkingReserved === 'Reservation, Nedded'}
                    onChange={handleIsParkingReservedChange}
                />
                <label htmlFor="Reservation, Nedded" className='mx-2 my-1 text-slate-500'>Reservation, Nedded</label><br />
                <input
                    type="radio"
                    id="No, Reservation Nedded"
                    name="isParkingReserved"
                    value="No, Reservation Nedded"
                    checked={isParkingReserved === 'No, Reservation Nedded'}
                    onChange={handleIsParkingReservedChange}
                />
                <label htmlFor="No, Reservation Nedded" className='mx-2 my-1 text-slate-500' >No, Reservation Nedded</label><br />
            </div>

            {/* Parking Location Section */}
            <div>
                <p className='text-[18px] font-[500] my-2 text-slate-800'>Where is the parking located ? </p>
                <input
                    type="radio"
                    id="On Site"
                    name="parkingLocation"
                    value="On Site"
                    checked={parkingLocation === 'On Site'}
                    onChange={handleParkingLocationChange}
                />
                <label htmlFor="On Site" className='mx-1 text-slate-500'>On Site</label><br />
                <input
                    type="radio"
                    id="Remote"
                    name="parkingLocation"
                    value="Remote"
                    checked={parkingLocation === 'Remote'}
                    onChange={handleParkingLocationChange}
                />
                <label htmlFor="Remote" className='mx-1 my-[2px] text-slate-500' >Remote</label><br />
            </div>

            {/* Bottom-Button */}
            <Link to="transportation">
                <div className='mt-3' onClick={handleSaveChanges}>
                    <Button />
                </div>
            </Link>


        </div>
    )
}

export default Park
