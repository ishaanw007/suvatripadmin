import React, { useState, useEffect } from "react";
import downIcon from "../../Assets/img/down-icon.png";
import EditableImg from "../../Assets/img/edit.png";
import Trash from "../../Assets/img/trash.png";
import Button from "../Button";
import BedIcon from "../../Assets/img/double-bed-icon.png";
import SinglebedIcon from "../../Assets/img/single-bed-icon.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFormContext } from "../../context/contextStore";

function RoomSetUp() {
   const [roomType, setRoomType] = useState("");
   const [editIndex, setEditIndex] = useState(-1);
   const [guNumber, setGuNumber] = useState("");
   const [bdNumber, setBdNumber] = useState(0);
   const [bathNum, setBathNum] = useState("");
   const [price, setPrice] = useState("");
   const [roomData, setRoomData] = useState([]);
   const [singleBedValue, setSingleBedValue] = useState(0);
   const [doubleBedValue, setDoubleBedValue] = useState(0);
   const [largeBedValue, setLargeBedValue] = useState(0);
   const [kingSizeBedValue, setKingSizeBedValue] = useState(0);
   const [units, sameUnitsNumber] = useState(0);
   const [whichType, setWhichType] = useState(0);
   const [UnitData, setUnitData] = useState({});
   const [unitObject, setUnitObject] = useState({});
//  const [isModelOpen, setIsModelOpen] = useState(false);
   const totalBed =
     singleBedValue + doubleBedValue + largeBedValue + kingSizeBedValue;
   const { state, dispatch } = useFormContext();

  const unitOptions = [
    "single",
    "double",
    "twin",
    "twin/double",
    "triple",
    "quadruple",
    "family",
    "studio",
    "apartment",
  ];

   const handleSaveChanges = () => {
     const setUpRoomObject = {
       roomType,
       guNumber,
       bdNumber: totalBed,
       bathNum,
       price,
       singleBedValue,
       doubleBedValue,
       largeBedValue,
       kingSizeBedValue,
     };

     if (editIndex !== -1) {
       // If editing, update the existing data
       setRoomData((prevData) =>
         prevData.map((data, index) =>
           index === editIndex ? setUpRoomObject : data
         )
       );
       setEditIndex(-1); // Reset editIndex after updating
     } else {
       // If not editing, add new data
       setRoomData((prevData) => [...prevData, setUpRoomObject]);
     }

     // Clear the form fields after saving changes
     setRoomType("");
     

   };

    const handleEdit = (index) => {
      // Set the editIndex and pre-fill the form fields with the data of the item being edited
      const dataToEdit = roomData[index];
      setEditIndex(index);
      setRoomType(dataToEdit.roomType);
      setGuNumber(dataToEdit.guNumber);
      setBdNumber(dataToEdit.bdNumber);
      setBathNum(dataToEdit.bathNum);
      setPrice(dataToEdit.price);
      setSingleBedValue(dataToEdit.singleBedValue);
      setDoubleBedValue(dataToEdit.doubleBedValue);
      setLargeBedValue(dataToEdit.largeBedValue);
      setKingSizeBedValue(dataToEdit.kingSizeBedValue);
    };

  const handleSubmit = () => {
    const newUnitObject = {
      ...unitObject, // Spread the existing state
      modalData: roomData,
      UnitData: units, // Assuming UnitData is a variable you want to add to the state
      whichType: whichType, // Assuming whichType is another variable you want to add to the state
    };

  


    dispatch({ type: "SET_ROOM_SETUP", payload: newUnitObject });

    setUnitObject(newUnitObject);
  };


  const handleDelete = (index) => {
    // Create a new array excluding the item at the specified index
    const updatedRoomData = roomData.filter((_, i) => i !== index);

    // Update the state with the new array
    setRoomData(updatedRoomData);
  };

  useEffect(() => {
    console.log("This data from the Room-setUp components", unitObject);
    // alert(unitObject)
  }, [unitObject]);
  return (
    <div style={{ fontFamily: `'Poppins', sans-serif` }}>
      {/* Code for modal */}

      <>
        <div className="container">
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Room Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="roomType" className="form-label">
                        Room type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={roomType}
                        id="roomType"
                        placeholder="Enter the room type"
                        onChange={(e) => {
                          setRoomType(e.target.value)
                        }}
                      />
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Guests" className="form-label">
                        Guests
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={guNumber}
                        id="Guests"
                        placeholder="Enter the Number of guests"
                        onChange={(e) => {
                          setGuNumber(e.target.value);
                        }}
                      />
                    </div>

                    {/* Single Bed Type */}
                    <div className="mb-3  border-t-2 pt-2">
                      <div className="flex flex-row justify-between items-center  p-1">
                        <div className="flex flex-row justify-start items-center">
                          <div className="w-[40px] h-[40px]">
                            <img
                              src={SinglebedIcon}
                              alt="bedIcon"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold leading-4 text-[14px]">
                              Single bed
                            </h3>
                            <p className="font-[400] text-slate-600">
                              90 - 130 cm wide
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center border-1 shadow-sm cursor-pointer">
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlineMinus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                if (singleBedValue === 0) {
                                  setSingleBedValue(0);
                                } else {
                                  setSingleBedValue(singleBedValue - 1);
                                }
                              }}
                            />
                          </div>
                          <div className="w-[40px] h-[40px]">
                            <input
                              type="text"
                              value={singleBedValue}
                              className="text-[20px] w-full h-full outline-none py-1 text-center font-[400]"
                            />
                          </div>
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlinePlus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                setSingleBedValue(singleBedValue + 1);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Double bed Type */}
                    <div className="mb-3">
                      <div className="flex flex-row justify-between items-center  p-1">
                        <div className="flex flex-row justify-start items-center">
                          <div className="w-[40px] h-[40px]">
                            <img
                              src={BedIcon}
                              alt="bedIcon"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold leading-4 text-[14px]">
                              Double Bed
                            </h3>
                            <p className="font-[400] text-slate-600">
                              131 - 150 cm wide
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center border-1 shadow-sm cursor-pointer">
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlineMinus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                if (doubleBedValue === 0) {
                                  setDoubleBedValue(0);
                                } else {
                                  setDoubleBedValue(doubleBedValue - 1);
                                }
                              }}
                            />
                          </div>
                          <div className="w-[40px] h-[40px]">
                            <input
                              type="text"
                              value={doubleBedValue}
                              className="text-[20px] w-full h-full outline-none py-1 text-center font-[400]"
                            />
                          </div>
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlinePlus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                setDoubleBedValue(doubleBedValue + 1);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Large bed */}
                    <div className="mb-3">
                      <div className="flex flex-row justify-between items-center  p-1">
                        <div className="flex flex-row justify-start items-center">
                          <div className="w-[40px] h-[40px]">
                            <img
                              src={BedIcon}
                              alt="bedIcon"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold leading-4 text-[14px]">
                              Large bed (King Size)
                            </h3>
                            <p className="font-[400] text-slate-600">
                              151 - 180 cm wide
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center border-1 shadow-sm cursor-pointer">
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlineMinus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                if (largeBedValue === 0) {
                                  setLargeBedValue(0);
                                } else {
                                  setLargeBedValue(largeBedValue - 1);
                                }
                              }}
                            />
                          </div>
                          <div className="w-[40px] h-[40px]">
                            <input
                              type="text"
                              value={largeBedValue}
                              className="text-[20px] w-full h-full outline-none py-1 text-center font-[400]"
                            />
                          </div>
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlinePlus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                setLargeBedValue(largeBedValue + 1);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Extra-Large bed */}
                    <div className="mb-3 border-b-2 pb-2">
                      <div className="flex flex-row justify-between items-center  p-1">
                        <div className="flex flex-row justify-start items-center">
                          <div className="w-[40px] h-[40px]">
                            <img
                              src={BedIcon}
                              alt="bedIcon"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="font-bold leading-4 text-[14px]">
                              Extra-large double bed(Super-king size)
                            </h3>
                            <p className="font-[400] text-slate-600">
                              181 - 210 cm wide
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center border-1 shadow-sm cursor-pointer">
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlineMinus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                if (kingSizeBedValue === 0) {
                                  setKingSizeBedValue(0);
                                } else {
                                  setKingSizeBedValue(kingSizeBedValue - 1);
                                }
                              }}
                            />
                          </div>
                          <div className="w-[40px] h-[40px]">
                            <input
                              type="text"
                              value={kingSizeBedValue}
                              className="text-[20px] w-full h-full outline-none py-1 text-center font-[400]"
                            />
                          </div>
                          <div className="w-[40px] h-[40px] p-1">
                            <AiOutlinePlus
                              className="text-[30px] font-[300]"
                              onClick={() => {
                                setKingSizeBedValue(kingSizeBedValue + 1);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="Bathroom" className="form-label">
                        Bathroom
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={bathNum}
                        id="Bathroom"
                        placeholder="Enter number of Bathroom"
                        onChange={(e) => {
                          setBathNum(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="Price" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={price}
                        id="Price"
                        placeholder="Enter the price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ color: "black", transition: "color 0.3s" }}
                    data-bs-dismiss="modal"
                    onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ color: "black" }}
                    onClick={handleSaveChanges}
                    onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "black")}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="w-full md:w-[1000px] pt-5 mx-auto  h-screen md:h-[600px] overflow-x-hidden overflow-y-auto">
        {/* Room-set-up code */}
        <div className="py-2 border-b-[1px] border-slate-300">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start">
              <h3 className="text-[30px] tracking-wider font-[600] text-slate-800 mb-2 md:mb-0">
                Room Details
              </h3>
              <div>
                <button
                  className="bg-[#9db2ce] w-full md:w-[150px] py-[8px] rounded-md text-slate-600 font-semibold"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Add another room
                </button>
              </div>
            </div>
            <div className="w-full md:w-[700px]">
              <p className="text-[14px] tracking-wider font-[500] text-slate-600 py-2">
                The basic, add your property name address, facility and more
              </p>
            </div>

            {/* Table */}
            <div className="my-3">
              <table className="table-auto w-full border-[1px]">
                <thead className="border-2">
                  <tr className="p-5 border-2">
                    <th className="px-2 py-2"></th>
                    <th className="px-2 py-2">Room type</th>
                    <th className="px-2 py-2">Guests</th>
                    <th className="px-2 py-2">Beds</th>
                    <th className="px-2 py-2">Bathroom</th>
                    <th className="px-2 py-2">Price</th>
                    <th className="px-2 py-2"></th>
                    <th className="px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {roomData.map((data, index) => {
                    return (
                      <tr key={index} className="p-5 border-2">
                        <td className="px-2 py-2">
                          <img src={downIcon} alt="icon" />
                        </td>
                        <td className="px-2 py-2">{data.roomType}</td>
                        <td className="px-2 py-2">{data.guNumber}</td>
                        <td className="px-2 py-2">{data.bdNumber}</td>
                        <td className="px-2 py-2">{data.bathNum}</td>
                        <td className="px-2 py-2">Rs {data.price}</td>
                        <td
                          className="px-2 py-2 cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => handleEdit(index)}
                        >
                          <img src={EditableImg} alt="editable" />
                        </td>
                        <td
                          className="px-2 py-2 cursor-pointer"
                          onClick={() => handleDelete(index)}
                        >
                          <img src={Trash} alt="editable" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="my-1 border-y-[1px] border-slate-300 py-2">
              <h3 className="text-[22px] font-[600] text-slate-700 py-1">
                Room Details
              </h3>
            </div>
            <div className="my-1  border-slate-300 pt-2 px-1">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="unitsInput"
                    className="form-label text-[18px] font-[400] text-slate-500"
                  >
                    What type of unit is this?
                  </label>
                  <select
                    className="form-control w-[300px]"
                    id="unitsInput"
                    onChange={(e) => {
                      const selectedUnit = e.target.value;
                      sameUnitsNumber(selectedUnit);
                    }}
                  >
                    <option value="" disabled selected>
                      Select unit type
                    </option>
                    {unitOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="roomsInput"
                    className="form-label text-[18px] font-[400] text-slate-500"
                  >
                    How many rooms of this type do you have?
                  </label>
                  <input
                    type="number"
                    className="form-control w-[300px]"
                    id="roomsInput"
                    placeholder="Enter the room units"
                    onChange={(e) => {
                      setWhichType(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Link to="rate">
        <div onClick={handleSubmit}>
          <Button />
        </div>
      </Link>
    </div>
  );
}

export default RoomSetUp;
