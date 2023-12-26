import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/img/logo.png";
import LoginImg from "../../Assets/img/loginImg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      console.log(email, password);
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role: "vendor-admin",
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        if(data.registration===false) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("registration", data.registration);
          navigate("/contact");
        } else {
          localStorage.setItem("registration", data.registration);
          navigate("/success");
        }
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="container flex flex-col md:flex-row justify-between m-0 p-0"
      >
        {/* Sign-up form */}
        <div className="w-full md:w-[750px] h-screen">
          <div>
            <div className="flex flex-row justify-between items-center px-3 md:px-10 py-3 md:py-8">
              <img src={Logo} alt="logo_here" />
              <Link to={"/signup"}>
                <p className="text-capitalize underline cursor-pointer">
                  signIn
                </p>
              </Link>
            </div>
            <div className="mx-[0] mt-5 md:mx-auto w-full md:w-[500px] px-3 md:px-0">
              <h2 className="text-[#000] fs-3 fw-medium lh-lg">
                Log In to SuvaTrip
              </h2>
              <p className="fs-6 lh-lg">
                Welcome to SuvaTrip, please enter the details to continue
              </p>
              <form >
                <div className="w-full">
                  <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                    email:-
                  </p>
                  <input
                    type="text"
                    className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                    id="userInput"
                    placeholder="Enter the email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <p className="lh-lg my-2 fw-medium fs-6 text-capitalize">
                    Password:-
                  </p>
                  <input
                    type="password"
                    className="w-full py-2 border-2 outline-none px-1 rounded-md mb-1"
                    id="userInput"
                    placeholder="Enter the Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <p className="lh-lg fs-6 text-capitalize underline">
                    <a href="./index.html">Have trouble logging in?</a>
                  </p>
                  <button
                    type="submit"
                    className="bg-[#ff5f63] py-2 hover:opacity-60 w-full rounded-md my-4 font-[600] text-slate-100"
                    onClick={handleLogin}
                >
                    Continue
                  </button>
                  <p className="text-[16px] lh-lg">
                    Question about property or the extranet? checkout
                    <span className="text-[#ff5f63]">partner help</span>
                    or ask another partner in the
                    <span className="text-[#ff5f63]">partner community</span>
                  </p>
                </div>
              </form>
              <div className="w-full">
                <button
                  type="button"
                  className="btn btn-primary container lh-lg mt-5 text-uppercase text-dark"

                >
                  Join Our Partner Program
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Sign-up images */}
        <div className="w-full md:w-[750px] hidden md:block h-screen">
          <img src={LoginImg} alt="Rec_error" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
