import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [selectedLink, setSelectedLink] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

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
          <Link to="/contact">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact"
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
                currentPath === "/contact/basic"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(2)}
            >
              Basic
            </div>
          </Link>
          <Link to="/contact/location">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/location"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(3)}
            >
              Location
            </div>
          </Link>
          <Link to="/contact/description">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/description"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(4)}
            >
              Description
            </div>
          </Link>
          <Link to="property-photos">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/property-photos"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(5)}
            >
              Property Photos
            </div>
          </Link>
          <Link to="room-photos">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/room-photos"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(6)}
            >
              Room Photos
            </div>
          </Link>
          <Link to="area-photos">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/area-photos"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(7)}
            >
              Area Photos
            </div>
          </Link>
          <Link to="facility">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/facility"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(8)}
            >
              Facilities
            </div>
          </Link>
          <Link to="room-setup">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/room-setup"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(9)}
            >
              Room Setup
            </div>
          </Link>
          {/* <Link to="rate">
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
          </Link> */}
          <Link to="hotel-rules">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/hotel-rules"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(10)}
            >
              Hotel Rules
            </div>
          </Link>
          <Link to="payment">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/payment"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(11)}
            >
              Payment Policy
            </div>
          </Link>
          <Link to="park">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/park"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(12)}
            >
              Parking
            </div>
          </Link>
          <Link to="transportation">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/transportation"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(13)}
            >
              Transporation
            </div>
          </Link>
          <Link to="document">
            <div
              className={`col my-2 py-2 rounded-md cursor-pointer ease-in-out duration-200 ${
                currentPath === "/contact/document"
                  ? "bg-[#FF5F6326] text-[#FF5F63]"
                  : "hover:bg-[#FF5F6326] hover:text-[#FF5F63]"
              }`}
              onClick={() => handleLinkClick(14)}
            >
              Documentation
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
