import React, { useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Facility() {
    const [formData, setFormData] = useState({
        accommodation: '',
        recreation: '',
    });

    const handleAccommodationChange = (e) => {
        setFormData((prevData) => ({ ...prevData, accommodation: e.target.value }));
    };

    const handleRecreationChange = (e) => {
        setFormData((prevData) => ({ ...prevData, recreation: e.target.value }));
    };

    const handleSubmit = () => {
        // e.preventDefault();
        console.log("This is the data from facility Components", formData);
        setFormData({
            accommodation: '',
            recreation: '',
        });
    };
    return (
        <div className='pt-5 tracking-wider'>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px]  p-2'>
                <div className='border-b-[1px] border-slate-300'>
                    <h3 className='text-[35px] font-[600] tracking-wider'>Facilities</h3>
                    <p className='text-[20px] font-[500] mb-1  tracking-wider text-slate-700'>Check all that apply</p>
                </div>
                <div className='border-b-[1px] border-slate-300 pb-1 cursor-pointer'>
                    <p className='text-[20px] font-[400] my-1 text-slate-600'>Accommodation and Services</p>
                    <div className='px-3'>
                        <input type="radio" id="Free parking" name="Accommodation" value="Free parking" onChange={handleAccommodationChange} />
                        <label htmlFor="Free parking" className='text-[17px] my-[2px] mx-2'>Free parking</label><br />
                        <input type="radio" id="Key card access" name="Accommodation" value="Key card access" onChange={handleAccommodationChange} />
                        <label for="Key card access" className='text-[17px] my-[2px] mx-2'>Key card access</label><br />
                        <input type="radio" id="Daily housekeeping" name="Accommodation" value="Daily housekeeping" onChange={handleAccommodationChange} />
                        <label for="Daily housekeeping" className='text-[17px] my-[2px] mx-2'>Daily housekeeping</label><br />
                        <input type="radio" id="No smoking rooms" name="Accommodation" value="No smoking rooms" onChange={handleAccommodationChange} />
                        <label for="No smoking rooms" className='text-[17px] my-[2px] mx-2'>No smoking rooms</label><br />
                        <input type="radio" id="Lift" name="Accommodation" value="Lift" onChange={handleAccommodationChange} />
                        <label for="Lift" className='text-[17px] my-[2px] mx-2'>Lift</label><br />
                        <input type="radio" id="Room services" name="Accommodation" value="Room services" onChange={handleAccommodationChange} />
                        <label for="Room services" className='text-[17px] my-[2px] mx-2'>Room services</label><br />
                        {/* Add more radio inputs for Accommodation as needed */}
                    </div>
                </div>
                <div className='border-b-[1px] border-slate-300 pb-1 cursor-pointer'>
                    <p className='text-[22px] font-[400] my-1 text-slate-600'>Leisure & Recreation</p>
                    <div className='px-3'>
                        <input type="radio" id="Garden" name="Recreation" value="Gardens" onChange={handleRecreationChange} />
                        <label htmlFor="Garden" className='text-[17px] my-[2px] mx-2'>Garden</label><br />
                        <input type="radio" id="Indore Swiming pool" name="Recreation" value="Indore Swiming pool" onChange={handleRecreationChange} />
                        <label for="Indore Swiming pool" className='text-[17px] my-[2px] mx-2'>Indore Swiming pool</label><br />
                        <input type="radio" id="Outdoor Swiming pool" name="Recreation" value="Outdoor Swiming pool" onChange={handleRecreationChange} />
                        <label for="Outdoor Swiming pool" className='text-[17px] my-[2px] mx-2'>Outdoor Swiming pool</label><br />
                        <input type="radio" id="Fitness center" name="Recreation" value="Fitness center" onChange={handleRecreationChange} />
                        <label for="Fitness center" className='text-[17px] my-[2px] mx-2'>Fitness center</label><br />
                        <input type="radio" id="Spa" name="Recreation" value="Spa" onChange={handleRecreationChange} />
                        <label for="Spa" className='text-[17px] my-[2px] mx-2'>Spa</label><br />
                        <input type="radio" id="Beach" name="Recreation" value="Beach" onChange={handleRecreationChange} />
                        <label for="Beach" className='text-[17px] my-[2px] mx-2'>Beach</label><br />
                    </div>
                </div>
            </div>
            <Link to="room-setup">
                <div className='mt-2' onClick={handleSubmit}>
                    <Button />
                </div>
            </Link>
        </div>
    )
}

export default Facility
