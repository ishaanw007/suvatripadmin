import React from 'react'
import Button from './Button'

function Park() {
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5'>
            {/* Start parking Heading */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <h3 className='text-[30px] font-700 tracking-wider text-slate-800 pb-1'>Parking</h3>
                <p className='text-[18px] font-500 tracking-wider text-slate-600 pb-1'>Tell about the Parking situation at your hotel</p>
            </div>
            {/* Start Parking is parking available ? */}
            <div>
                <p className='text-[18px] font-[600] my-2 text-slate-700'>Is Parking available at your hotel ?</p>
                <input type="radio" id="yesFree" name="IsParkingAvailable" value="yesFree" />
                <label for="yesFree" className='mx-1 my-1 text-slate-500'>Yes, Free</label><br />
                <input type="radio" id="noPaid" name="IsParkingAvailable" value="noPaid" />
                <label for="noPaid" className='mx-1 my-1 text-slate-500' >No, Paid</label><br />
                <input type="radio" id="no" name="IsParkingAvailable" value="no" />
                <label for="no" className='mx-1 my-1 text-slate-500' >No</label><br />
            </div>
            {/* Start Parking is parking cost ? */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <p className='text-[18px] text-slate-800 font-[600] mb-1'>How much does the Parking cost</p>
                <div className="input-group w-full md:w-[400px]">
                    <input type="text" className="form-control" aria-label="Text input with dropdown button " />
                    <button className="btn btn-outline-secondary dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="true">Per day</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li className="dropdown-item">Per week</li>
                        <li className="dropdown-item">Per Month</li>
                    </ul>
                </div>
            </div>
            {/* Need a Parking Spot */}
            <div className='border-b-[1px] border-slate-300 py-2'>
                <p className='text-[18px] font-[500] my-1 text-slate-800'>Do They Need to Reserve a parking spot ? </p>
                <input type="radio" id="Reservation, Nedded" name="IsParkingNedded" value="Reservation, Nedded" />
                <label for="Reservation, Nedded" className='mx-2 my-1 text-slate-500'>Reservation, Nedded</label><br />
                <input type="radio" id="No, Reservation Nedded" name="IsParkingNedded" value="No, Reservation Nedded" />
                <label for="No, Reservation Nedded" className='mx-2 my-1 text-slate-500' >No, Reservation Nedded</label><br />
            </div>

            {/* where is the parking located */}
            <div>
                <p className='text-[18px] font-[500] my-2 text-slate-800'>Where is the parking located ? </p>
                <input type="radio" id="On Site" name="ParkingLoaction" value="On Site" />
                <label for="On Site" className='mx-1 text-slate-500'>On Site</label><br />
                <input type="radio" id="Remote" name="ParkingLoaction" value="Remote" />
                <label for="Remote" className='mx-1 my-[2px] text-slate-500' >Remote</label><br />
            </div>

            {/* Bottom-Button */}
            <div className='mt-3'>
                <Button />
            </div>


        </div>
    )
}

export default Park
