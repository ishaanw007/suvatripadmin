import React, { useEffect } from "react";
import logo from "../../Assets/img/logo.png";
import Arrow from "../../Assets/img/arrow.png";
import { useNavigate, Link } from "react-router-dom";
import { useFormContext } from "../../context/contextStore";

function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();

  const signOutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "SET_IS_LOGGEDIN", payload: false });
    navigate("/");
  };

  const handleListProperty = () => {
    const registration = localStorage.getItem("registration");

    if (state.isLoggedin && registration === "true") {
      navigate("/success");
    } else if (!state.isLoggedin) {
      navigate("/signup");
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    console.log(state.isLoggedin);
  }, [state.isLoggedin]);

  return (
    <nav
      style={{ fontFamily: `'Poppins', sans-serif` }}
      className="bg-[#fff] w-full h-24 px-2 md:px-10 flex flex-row justify-between items-center"
    >
      <div className="ml-0 md:ml-12 w-[130px] md:w-[200px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={handleListProperty}
          className="bg-[#ff474b] flex items-center px-3 py-2 md:py-4 text-[8px] md:text-[14px] uppercase font-[300] md:font-[600] shadow-xl text-slate-50 rounded-xl hover:shadow-inner"
        >
          List Your Property{" "}
          <img src={Arrow} alt="arrow" className="ml-0 md:ml-4" />
        </button>
        {state.isLoggedin ? (
          <Link to={"/"}>
            <button
              className="uppercase bg-[#fff] px-2 md:px-6 py-2 md:py-4 ml-2 font-[300] md:font-[600] rounded-xl shadow-xl border-[1px] border-slate-200 hover:shadow-inner"
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </Link>
        ) : (
          <Link to={"/signup"}>
            <button className="uppercase bg-[#fff] px-2 md:px-6 py-2 md:py-4 ml-2 font-[300] md:font-[600] rounded-xl shadow-xl border-[1px] border-slate-200 hover:shadow-inner">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
