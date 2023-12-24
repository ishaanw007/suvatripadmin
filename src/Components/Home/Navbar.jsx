import React, { useEffect, useState } from "react";
import logo from "../../Assets/img/logo.png";
import Arrow from "../../Assets/img/arrow.png";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      try {
        // Make a GET request to the /auth/profile endpoint
        const response = await fetch("http://localhost:8000/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log(data);

        if (data.succsess) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleListProperty = () => {
    if (isLoggedIn) {
      navigate("/contact");
    } else {
      navigate("/signup");
    }
  };

  return (
    <nav
      style={{ fontFamily: `'Poppins', sans-serif` }}
      className="bg-[#fff] w-full h-24 px-2 md:px-10 flex flex-row justify-between items-center"
    >
      <div className="ml-0 md:ml-12">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={handleListProperty}
          className="bg-[#ff474b] flex items-center px-3 py-2 md:py-4 text-[8px] md:text-[14px] uppercase font-[200] md:font-[600] shadow-xl text-slate-50 rounded-xl hover:shadow-inner"
        >
          List Your Property{" "}
          <img src={Arrow} alt="arrow" className="ml-0 md:ml-4" />
        </button>
        <Link to={"/signup"}>
          <button className="uppercase bg-[#fff] px-2 md:px-6 py-2 md:py-4 ml-2 font-[300] md:font-[600] rounded-xl shadow-xl border-[1px] border-slate-200 hover:shadow-inner">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
