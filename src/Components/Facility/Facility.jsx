import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/contextStore";

function Facility() {
  const { state, dispatch } = useFormContext();
  const [formData, setFormData] = useState({
    accommodation: [],
    recreation: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleAccommodationChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      accommodation: prevData.accommodation.includes(value)
        ? prevData.accommodation.filter((item) => item !== value)
        : [...prevData.accommodation, value],
    }));
  };

  useEffect(() => {
    if(Object.keys(state.facility).length !== 0) {
      setFormData(state.facility)
    }
  }, [state.facility])

  const handleRecreationChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      recreation: prevData.recreation.includes(value)
        ? prevData.recreation.filter((item) => item !== value)
        : [...prevData.recreation, value],
    }));
  };

  const handleSubmit = () => {
    if (formData.accommodation.length === 0) {
      setFormErrors({ accommodation: "Please select at least one accommodation facility." });
      return;
    }

    if (formData.recreation.length === 0) {
      setFormErrors({ recreation: "Please select at least one recreation facility." });
      return;
    }

    console.log("This is the data from Facility Components", formData);
    navigate("/contact/room-setup");
    dispatch({ type: "SET_FACILITY", payload: formData });

    setFormData({
      accommodation: [],
      recreation: [],
    });
  };

  return (
    <div className="pt-5 tracking-wider">
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="w-full md:w-[1000px]  p-2"
      >
        <div className="border-b-[1px] border-slate-300">
          <h3 className="text-[35px] font-[600] tracking-wider">Facilities</h3>
          <p className="text-[20px] font-[500] mb-1  tracking-wider text-slate-700">
            Check all that apply
          </p>
        </div>
        <div className="border-b-[1px] border-slate-300 pb-1 cursor-pointer">
          <p className="text-[20px] font-[400] my-1 text-slate-600">
            Accommodation and Services
          </p>
          <div className="px-3">
            <input
              type="checkbox"
              id="Free parking"
              name="Accommodation"
              value="Free parking"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("Free parking")}
            />
            <label htmlFor="Free parking" className="text-[17px] my-[2px] mx-2">
              Free parking
            </label>
            <br />
            <input
              type="checkbox"
              id="Key card access"
              name="Accommodation"
              value="Key card access"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("Key card access")}
            />
            <label
              htmlFor="Key card access"
              className="text-[17px] my-[2px] mx-2"
            >
              Key card access
            </label>
            <br />
            <input
              type="checkbox"
              id="Daily housekeeping"
              name="Accommodation"
              value="Daily housekeeping"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("Daily housekeeping")}
            />
            <label
              htmlFor="Daily housekeeping"
              className="text-[17px] my-[2px] mx-2"
            >
              Daily housekeeping
            </label>
            <br />
            <input
              type="checkbox"
              id="No smoking rooms"
              name="Accommodation"
              value="No smoking rooms"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("No smoking rooms")}
            />
            <label
              htmlFor="No smoking rooms"
              className="text-[17px] my-[2px] mx-2"
            >
              No smoking rooms
            </label>
            <br />
            <input
              type="checkbox"
              id="Lift"
              name="Accommodation"
              value="Lift"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("Lift")}
            />
            <label htmlFor="Lift" className="text-[17px] my-[2px] mx-2">
              Lift
            </label>
            <br />
            <input
              type="checkbox"
              id="Room services"
              name="Accommodation"
              value="Room services"
              onChange={handleAccommodationChange}
              checked={formData.accommodation.includes("Room services")}
            />
            <label
              htmlFor="Room services"
              className="text-[17px] my-[2px] mx-2"
            >
              Room services
            </label>
            <br />
            {/* Add more checkbox inputs for Accommodation as needed */}
            </div>
          {formErrors.accommodation && <p className="text-red-500">{formErrors.accommodation}</p>}
        </div>
        <div className="border-b-[1px] border-slate-300 pb-1 cursor-pointer">
          <p className="text-[22px] font-[400] my-1 text-slate-600">
            Leisure & Recreation
          </p>
          <div className="px-3">
            <input
              type="checkbox"
              id="Garden"
              name="Recreation"
              value="Gardens"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Gardens")}
            />
            <label htmlFor="Garden" className="text-[17px] my-[2px] mx-2">
              Garden
            </label>
            <br />
            <input
              type="checkbox"
              id="Indore Swiming pool"
              name="Recreation"
              value="Indore Swiming pool"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Indore Swiming pool")}
            />
            <label
              htmlFor="Indore Swiming pool"
              className="text-[17px] my-[2px] mx-2"
            >
              Indore Swiming pool
            </label>
            <br />
            <input
              type="checkbox"
              id="Outdoor Swiming pool"
              name="Recreation"
              value="Outdoor Swiming pool"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Outdoor Swiming pool")}
            />
            <label
              htmlFor="Outdoor Swiming pool"
              className="text-[17px] my-[2px] mx-2"
            >
              Outdoor Swiming pool
            </label>
            <br />
            <input
              type="checkbox"
              id="Fitness center"
              name="Recreation"
              value="Fitness center"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Fitness center")}
            />
            <label
              htmlFor="Fitness center"
              className="text-[17px] my-[2px] mx-2"
            >
              Fitness center
            </label>
            <br />
            <input
              type="checkbox"
              id="Spa"
              name="Recreation"
              value="Spa"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Spa")}
            />
            <label htmlFor="Spa" className="text-[17px] my-[2px] mx-2">
              Spa
            </label>
            <br />
            <input
              type="checkbox"
              id="Beach"
              name="Recreation"
              value="Beach"
              onChange={handleRecreationChange}
              checked={formData.recreation.includes("Beach")}
            />
            <label htmlFor="Beach" className="text-[17px] my-[2px] mx-2">
              Beach
            </label>
            <br />
            </div>
          {formErrors.recreation && <p className="text-red-500">{formErrors.recreation}</p>}
        </div>
      </div>
  
        <div className="mt-2" onClick={handleSubmit}>
          <Button />
        </div>

    </div>
  );
}

export default Facility;
