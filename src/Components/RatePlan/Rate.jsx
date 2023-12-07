import React, { useState } from 'react'
import downIcon from '../../Assets/img/down-icon.png'
import Button from '../Button'
// import Ratemodal from './Ratemodal'

function Rate() {
    const [ratePlanName, setRatePlanName] = useState('');
    const [rateId, setRateId] = useState('')
    const [cancellationPolicy, setCancellationPolicy] = useState('');
    const [price, setPrice] = useState('');
    const [cancellationRate, setCancellationRate] = useState('');
    const [netRevenue, setNetRevenue] = useState('');
    const [data, setData] = useState([]);
    const [isFilled, setIsfilled] = useState(false)


    const handleSaveChanges = () => {
        if (ratePlanName === "" || rateId === "" || cancellationPolicy === "" || price === "" || cancellationRate === "" || netRevenue === "") {
            setIsfilled(true);
        } else {
            setIsfilled(false);

            const newData = {
                ratePlanName,
                rateId,
                cancellationPolicy,
                price,
                cancellationRate,
                netRevenue,
            };

            // Update the array of objects
            setData((prevData) => [...prevData, newData]);

            // Clear input values after submission
            setRatePlanName('');
            setRateId('');
            setCancellationPolicy('');
            setPrice('');
            setCancellationRate('');
            setNetRevenue('');



        }

    };

    return (
        <div>
            <div style={{ fontFamily: `'Josefin Sans', sans-serif` }} className='w-full md:w-[1000px] pt-5 mx-auto  h-screen md:h-[600px] overflow-x-hidden overflow-y-auto'>
                {/* There is Code for modal */}
                <div className='container'>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Rate Plan</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        {
                                            isFilled ? <p className='text-xl text-red-500'>Please fill the all data</p> : ""
                                        }
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="ratePlanName" className="form-label">Rate Plan Name</label>
                                            <input type="text" className="form-control" id="ratePlanName" placeholder="Enter Rate Plan Name" value={ratePlanName} onChange={(e) => setRatePlanName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="ratePlanId" className="form-label">Rate Plan Id</label>
                                            <input type="text" className="form-control" id="ratePlanId" placeholder="Enter Rate Plan Id" value={rateId} onChange={(e) => setRateId(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="cancellationPolicy" className="form-label">Cancellation Policy</label>
                                            <input type="text" className="form-control" id="cancellationPolicy" placeholder="Enter Cancellation Policy" value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input type="number" className="form-control" id="price" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="cancellationRate" className="form-label">Cancellation Rate</label>
                                            <input type="number" className="form-control" id="cancellationRate" placeholder="Enter Cancellation Rate" value={cancellationRate} onChange={(e) => setCancellationRate(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="netRevenue" className="form-label">Net Revenue</label>
                                            <input type="number" className="form-control" id="netRevenue" placeholder="Enter Net Revenue" value={netRevenue} onChange={(e) => setNetRevenue(e.target.value)} />
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
                {/* There is code for Remnain componets */}
                <div className='py-2 border-b-[1px] border-slate-300'>
                    <div>
                        <div className='flex flex-col md:flex-row justify-between items-start'>
                            <h3 className='text-[30px] tracking-wider font-[600] text-slate-800 mb-2 md:mb-0'>Rate Plan</h3>
                            <div>
                                <button className='bg-[#9db2ce] w-full md:w-[150px] py-[6px] rounded-md' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Rate plan</button>
                            </div>
                        </div>
                        <div className='w-full md:w-[700px]'>
                            <p className='text-[14px] tracking-wider font-[500] text-slate-600 py-2'>Create and review different types of data plans for your customers. You can manage availability and pricing in your &nbsp;
                                <span className='text-[#ff5f63] underline'>calendar</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative mt-2 cursor-pointer h-[50px]'>
                    <div className='py-2'>
                        <div className='absolute right-0 top-0 border-1 w-full md:w-[320px] flex flex-row justify-between items-center p-2 rounded-md'>
                            <p className='hover:bg-sky-100 p-1 rounded-md text-sm font-[500]'>30 days</p>
                            <p className='hover:bg-sky-100 p-1 rounded-md text-sm font-[500]'>3 months</p>
                            <p className='hover:bg-sky-100 p-1 rounded-md text-sm font-[500]'>6 months</p>
                            <p className='hover:bg-sky-100 p-1 rounded-md text-sm font-[500]'>12 months</p>
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                    <table className='table-auto w-full border-[1px]'>
                        <thead className='border-2'>
                            <tr className='p-5 border-2'>
                                <th className='px-2 py-2'></th>
                                <th className='px-2 py-2'>Rate plan name</th>
                                <th className='px-2 py-2'>Cancellation Policy</th>
                                <th className='px-2 py-2'>Price</th>
                                <th className='px-2 py-2'>Cancellation Rate</th>
                                <th className='px-2 py-2'>Net revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return (
                                        <tr key={index} className='p-5 border-2'>
                                            <td className='px-2 py-2'><img src={downIcon} alt='icon' /></td>
                                            <td className='px-2 py-2'>
                                                {item.ratePlanName} <br />
                                                ID {item.rateId}
                                            </td>
                                            <td className='px-2 py-2'>{item.cancellationPolicy}</td>
                                            <td className='px-2 py-2'>{item.price}</td>
                                            <td className='px-2 py-2'>{item.cancellationRate}</td>
                                            <td className='px-2 py-2'>{item.netRevenue}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='my-1 border-y-[1px] border-slate-300 py-2'>
                    <h3 className='text-[22px] font-[500] text-slate-700 py-1'>Add fully flexible rate plan</h3>
                    <p className='text-[14px] font-[600] text-slate-700 py-1 uppercase'>Is Parking which cancelation would You like to use for the rate plan available to the guest ?</p>
                </div>
            </div>
            <div className='mt-1'>
                <Button />
            </div>
        </div>


    )
}

export default Rate
