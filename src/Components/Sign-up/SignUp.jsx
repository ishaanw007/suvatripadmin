import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import { FaGoogle } from "react-icons/fa";
import RectangleImg from "../../Assets/img/Rectangle.png";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Basic form validation
    if (!username || !email || !phone || !password) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      // Make a POST request to the server
      const response = await fetch("http://localhost:8000/auth/signup/vendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/otp-verify", {state: {email: email, token: data.token}});
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div
      style={{ fontFamily: `'Poppins', sans-serif` }}
      className="container flex flex-col md:flex-row justify-between m-0 p-0"
    >
      {/* Sign-up form */}
      <div className="w-full md:w-[750px] h-screen">
        <div>
          {/* Uppermost part */}
          <div className="flex flex-row justify-between items-center px-3 md:px-10 py-3 md:py-8">
            <img src={Logo} alt="logo_here" />
            <Link to="/login">
              <p className="text-capitalize underline cursor-pointer">login</p>
            </Link>
          </div>
          {/* For Sign-up Part */}
          <div className="mx-[0] my-5 md:mx-auto w-full md:w-[500px] px-3 md:px-0">
            <h2 className="text-[#000] fs-3 fw-medium lh-lg">
              Sign-up to manage Your Property
            </h2>
            <p className="fs-6 lh-lg">
              Welcome to SuvaTrip, please enter the details to continue
            </p>
            <div className="w-full">
              <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                UserName:-
              </p>
              <input
                type="text"
                className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                id="userInput"
                placeholder="Enter the Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                Email:-
              </p>
              <input
                type="email"
                className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                id="emailInput"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                Phone:-
              </p>
              <input
                type="tel"
                className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                id="phoneInput"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />

              <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                Password:-
              </p>
              <input
                type="password"
                className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                id="passwordInput"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="bg-[#ff5f63] py-2 hover:opacity-60 w-full rounded-md my-4 font-[600] text-slate-100"
                onClick={handleSignUp}
              >
                Continue
              </button>
            </div>
            <div className="w-full">
              <button
                type="button"
                className="btn btn-primary container lh-lg my-5 text-uppercase text-dark"
              >
                Join Our Partner Program
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sign-up images */}
      <div className="w-full md:w-[750px] hidden md:block h-screen">
        <img src={RectangleImg} alt="Rec_error" className="w-full h-full" />
      </div>
    </div>
  );
}

export default SignUp;
