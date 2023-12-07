import React, { useState } from 'react'
import downIcon from '../../Assets/img/down-icon.png'
import EditableImg from '../../Assets/img/edit.png'
import Trash from '../../Assets/img/trash.png'
import Button from '../Button'


function RoomSetUp() {
    const [roomType, setRoomtype] = useState("")
    const [guNumber, setGuNumber] = useState("")
    const [bdNumber, setBdNumber] = useState("")
    const [bathNum, setBathNum] = useState("")
    const [price, setPrice] = useState("")
    const [sameRoomNum, setSameRoomNum] = useState("")
    const [roomData, setRoomData] = useState([])


    const handleSaveChanges = () => {
        const setUpRoomObject = {
            roomType,
            guNumber,
            bdNumber,
            bathNum,
            price,
            sameRoomNum
        }
        setRoomData((prevData) => [...prevData, setUpRoomObject])
    }
    console.log(roomData)
    return (
        <div style={{ fontFamily: `'Josefin Sans', sans-serif` }}>
            {/* Code for modal */}
            <div className='container'>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Room Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>

                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="roomType" className="form-label">Room type</label>
                                        <input type="text" className="form-control" id="roomType" placeholder="Enter the room type" onChange={(e) => {
                                            setRoomtype(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Guests" className="form-label">Guests</label>
                                        <input type="text" className="form-control" id="Guests" placeholder='Enter the Number of guests'
                                            onChange={(e) => {
                                                setGuNumber(e.target.value)
                                            }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Beds" className="form-label">Beds</label>
                                        <input type="text" className="form-control" id="Beds" placeholder="Enter Cancellation Policy"
                                            onChange={(e) => {
                                                setBdNumber(e.target.value)
                                            }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Bathroom" className="form-label">Bathroom</label>
                                        <input type="number" className="form-control" id="Bathroom" placeholder="Enter number of Bathroom"
                                            onChange={(e) => {
                                                setBathNum(e.target.value)
                                            }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Price" className="form-label">Price</label>
                                        <input type="number" className="form-control" id="Price" placeholder="Enter The price"
                                            onChange={(e) => {
                                                setPrice(e.target.value)
                                            }} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Room of this type" className="form-label">Room of this type</label>
                                        <input type="number" className="form-control" id="Room of this type" placeholder="Enter the room of this type"
                                            onChange={(e) => {
                                                setSameRoomNum(e.target.value)
                                            }} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    style={{ color: 'black', transition: 'color 0.3s' }}
                                    data-bs-dismiss="modal"
                                    onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{ color: 'black' }}
                                    onClick={handleSaveChanges}
                                    onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                                    onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                                >
                                    Save changes
                                </button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[1000px] pt-5 mx-auto  h-screen md:h-[600px] overflow-x-hidden overflow-y-auto'>
                {/* Room-set-up code */}
                <div className='py-2 border-b-[1px] border-slate-300'>
                    <div>
                        <div className='flex flex-col md:flex-row justify-between items-start'>
                            <h3 className='text-[30px] tracking-wider font-[600] text-slate-800 mb-2 md:mb-0'>Room Details</h3>
                            <div>
                                <button className='bg-[#9db2ce] w-full md:w-[150px] py-[8px] rounded-md text-slate-600 font-semibold' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add another room</button>
                            </div>
                        </div>
                        <div className='w-full md:w-[700px]'>
                            <p className='text-[14px] tracking-wider font-[500] text-slate-600 py-2'>The basic, add your property name address, facility and more
                            </p>
                        </div>


                        <div className='my-3'>
                            <table className='table-auto w-full border-[1px]'>
                                <thead className='border-2'>
                                    <tr className='p-5 border-2'>
                                        <th className='px-2 py-2'></th>
                                        <th className='px-2 py-2'>Room type</th>
                                        <th className='px-2 py-2'>Guests</th>
                                        <th className='px-2 py-2'>Beds</th>
                                        <th className='px-2 py-2'>Bathroom</th>
                                        <th className='px-2 py-2'>Price</th>
                                        <th className='px-2 py-2'>Room of <br />this type</th>
                                        <th className='px-2 py-2'></th>
                                        <th className='px-2 py-2'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        roomData.map((data, key) => {
                                            return (
                                                <tr className='p-5 border-2'>
                                                    <td className='px-2 py-2'><img src={downIcon} alt='icon' /></td>
                                                    <td className='px-2 py-2'>{data.roomType}</td>
                                                    <td className='px-2 py-2'>{data.guNumber}</td>
                                                    <td className='px-2 py-2'>{data.bdNumber}</td>
                                                    <td className='px-2 py-2'>{data.bathNum}</td>
                                                    <td className='px-2 py-2'>Rs {data.price}</td>
                                                    <td className='px-2 py-2'>{data.sameRoomNum}</td>
                                                    <td className='px-2 py-2 cursor-pointer' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                                        <img src={EditableImg} alt='editable'></img>
                                                    </td>
                                                    <td className='px-2 py-2 cursor-pointer'>
                                                        <img src={Trash} alt="editable" />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='my-1 border-y-[1px] border-slate-300 py-2'>
                            <h3 className='text-[22px] font-[600] text-slate-700 py-1'>Room Details</h3>
                        </div>
                        <div className='my-1  border-slate-300 pt-2 px-1'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="ratePlanName" className="form-label text-[18px] font-[400] text-slate-500">What type of unit of this</label>
                                    <input type="text" className="form-control  w-[300px]" id="UnitsName" placeholder="Enter the Units" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ratePlanName" className="form-label text-[18px] font-[400] text-slate-500">How many rooms this type Do you have ?</label>
                                    <input type="text" className="form-control w-[300px]" id="UnitsName" placeholder="Enter the room units" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
            <div>
                <Button />
            </div>
        </div>
    )
}

export default RoomSetUp
