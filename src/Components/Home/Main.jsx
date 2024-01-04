import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import SmallCompo from "./SmallCompo";
import Section from "./Section";
import WhyList from "./WhyList";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { useFormContext } from "../../context/contextStore";
import { useNavigate } from "react-router-dom";
 
function Main() {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();
  const checkLoggedInStatus = async () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
    console.log(token, "token");

    if (token) {
      try {
        // Make a GET request to the /auth/profile endpoint
        const response = await fetch(
          "http://localhost:8000/auth/vendor-profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          dispatch({ type: "SET_IS_LOGGEDIN", payload: true });
        } else {
          dispatch({ type: "SET_IS_LOGGEDIN", payload: false });
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    } else {
      dispatch({ type: "SET_IS_LOGGEDIN", payload: false });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!state.isLoggedin) {
        await checkLoggedInStatus();
      }
      if (state.isLoggedin === true) {
        navigate("/");
      }
    };

    fetchData();
    console.log(state.isLoggedin, "state mainpage render");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoggedin, navigate]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <SmallCompo />
      <Section />
      <WhyList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Main;
