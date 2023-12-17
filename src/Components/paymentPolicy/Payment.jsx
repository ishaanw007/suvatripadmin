import React, { useState } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Payment() {
  const { state, dispatch } = useFormContext();
  const [paymentOption, setPaymentOption] = useState('');
  const [cancleOption, setCancleOption] = useState('Yes');
  const [canclePeriod, setCanclePeriod] = useState('Until two days before arrival');
  const [warning, setWarning] = useState(''); // State to track the warning message
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };
  const navigate = useNavigate();
  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleCancleOptionChange = (event) => {
    setCancleOption(event.target.value);
  };

  const handleCanclePeriodChange = (event) => {
    setCanclePeriod(event.target.value);
  };

  const handleSaveChanges = () => {
    // Check if any required field is empty
    if (!paymentOption || !cancleOption || !canclePeriod || !editorHtml) {
      setWarning('Please fill in all fields before proceeding.');
      return; // Do not proceed to the next page
    }

    // Create an object with the selected values
    const formData = [{
      paymentOption: paymentOption,
      cancleOption: cancleOption,
      canclePeriod: canclePeriod,
      description: editorHtml
    }];

    dispatch({ type: 'SET_PAYMENT_POLICY', payload: formData });
    setWarning(''); // Clear the warning if all fields are filled
    // Log the form data or perform other actions with it
    navigate('/contact/park')
    console.log('This is data from payment components:', formData);
  };
  return (
    <div
      style={{ fontFamily: `'Poppins', sans-serif` }}
      className="w-full md:w-[1000px] pt-5"
    >
      <div className="border-b-[1px] border-slate-300 pt-1 pb-2 cursor-pointer">
        <h3 className="text-[30px] font-[600] text-slate-800 tracking-wider leading-10">
          Payment policy
        </h3>
        <p className="text-[18px] font-[400] text-slate-500 tracking-wider pb-1">
          Add your contact information
        </p>
      </div>
      {/* Payment Option */}
      <div className="border-b-[1px] border-slate-300 py-3">
        <h4 className="text-[22px] font-bold text-slate-800 tracking-wider">
          Payment
        </h4>
        <div className="pt-1 cursor-pointer">
          <p className="text-[14px] font-[600] my-2 text-slate-600 uppercase">
            Payment Accept through
          </p>
          <input
            type="radio"
            id="Only card"
            name="paymentOption"
            value="Only card"
            checked={paymentOption === "Only card"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="Only card" className="mx-1 text-slate-500">
            Only card
          </label>
          <br />
          <input
            type="radio"
            id="Pay at hotel"
            name="paymentOption"
            value="Pay at hotel"
            checked={paymentOption === "Pay at hotel"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="Pay at hotel" className="mx-1 text-slate-500">
            Pay at hotel
          </label>
          <br />
          <input
            type="radio"
            id="Both"
            name="paymentOption"
            value="Both"
            checked={paymentOption === "Both"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="Both" className="mx-1 text-slate-500">
            Both
          </label>
          <br />
        </div>
      </div>
      {/* Canclelation Option */}
      <div className="border-b-[1px] border-slate-300 py-3">
        <h4 className="text-[22px] font-bold text-slate-800 tracking-wider">
          Cancellation Policy
        </h4>
        <div className="cursor-pointer">
          <p className="text-[14px] font-[600] my-2 text-slate-600 uppercase">
            Is there a period when the guest can cancel free of charge?
          </p>
          <input
            type="radio"
            id="Yes"
            name="cancleOption"
            value="Yes"
            checked={cancleOption === "Yes"}
            onChange={handleCancleOptionChange}
          />
          <label htmlFor="Yes" className="mx-1 text-slate-500">
            Yes
          </label>
          <br />
          <input
            type="radio"
            id="No"
            name="cancleOption"
            value="No"
            checked={cancleOption === "No"}
            onChange={handleCancleOptionChange}
          />
          <label htmlFor="No" className="mx-1 text-slate-500">
            No
          </label>
          <br />
        </div>
      </div>
      {/* Specific condition */}
      <div className="pt-3">
        <p className="text-[16px] font-[700] text-slate-800 tracking-wider">
          Specific condition
        </p>
        <p className="text-[14px] font-[600] my-2 text-slate-600">
          How Long before the arrival can guest cancle free of charge
        </p>
        <div className="input-group w-full md:w-[400px]">
          <select
            className="form-select cursor-pointer"
            id="canclePeriod"
            onChange={handleCanclePeriodChange}
            value={canclePeriod}
          >
            <option
              className="cursor-pointer"
              value="Until two days before arrival"
            >
              Until two days before arrival
            </option>
            <option
              className="cursor-pointer"
              value="Until three days before arrival"
            >
              Until three days before arrival
            </option>
            <option
              className="cursor-pointer"
              value="Until four days before arrival"
            >
              Until four days before arrival
            </option>
            <option
              className="cursor-pointer"
              value="Until five days before arrival"
            >
              Until five days before arrival
            </option>
          </select>
        </div>
        <div className='mt-4'>
        <p className="text-[16px] font-[700] text-slate-800 tracking-wider mb-2">
          Description
        </p>
          <ReactQuill
            theme="snow" // you can use different themes like 'snow', 'bubble', etc.
            value={editorHtml}
            onChange={handleEditorChange}
          />
        </div>

        {warning && (
          <div className="text-red-500 mt-2">
            {warning}
          </div>
        )}

      </div>


      <div className="mt-6" onClick={handleSaveChanges}>
        <Button />
      </div>

    </div>
  );
}

export default Payment
