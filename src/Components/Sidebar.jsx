import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  return (
    <div className="hidden md:block h-[550px]  mt-5">
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        class="container text-center px-5"
      >
        <div class="col w-[150px] text-center">
          <Link to="/contact/">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 1
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(1)}
            >
              Contact Details
            </div>
          </Link>
          <Link to="/contact/basic">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 2
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(2)}
            >
              Basic
            </div>
          </Link>

          <Link to="basic/photos">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 3
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(3)}
            >
              Photos
            </div>
          </Link>
          <Link to="basic/photos/facility">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 4
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(4)}
            >
              Facilities
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 5
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(5)}
            >
              Room Setup
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 6
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(6)}
            >
              Rate Plan
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate/hotel-rules">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 7
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(7)}
            >
              Hotel Rules
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 8
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(8)}
            >
              Payment Policy
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 9
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(9)}
            >
              Parking
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park/transportation">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 10
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(10)}
            >
              Transporation
            </div>
          </Link>
          <Link to="basic/photos/facility/room-setup/rate/hotel-rules/payment/park/transportation/document">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                selectedLink === 11
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(11)}
            >
              Documentaion
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
