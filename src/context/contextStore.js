import React, { createContext, useContext, useReducer } from "react";

// initial state

const initialState = {
  contactDetails: {},
  description: "",
  basicDetails: {},
  picture: [],
  displayPicture: [],
  roomPicture: [],
  displayRoomPicture: [],
  areaPicture: [],
  displayAreaPicture: [],
  facility: {},
  roomSetup: {},
  ratePlan: {},
  hotelRules: {},
  paymentPolicy: {},
  parking: {},
  transportation: {},
  document: {},
  address: "",
  latitude: "",
  longitude: "",
  city: "",
  country: "",
  zoom: 0,
  isLoggedin: false,
};

// reducer function
const formReducer = (state, action) => {
   console.log("action", action.payload);
  switch (action.type) {
    case "SET_CONTACT_DETAILS":
      return {
        ...state,
        contactDetails: action.payload,
      };
    case "SET_BASIC_DETAILS":
      return {
        ...state,
        basicDetails: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
      case "SET_ZOOM":
        return {
          ...state,
          zoom: action.payload,
        };
    case "SET_LATITUDE":
      return {
        ...state,
        latitude: action.payload,
      };
    case "SET_LONGITUDE":
      return {
        ...state,
        longitude: action.payload,
      };
      case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
      case "SET_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "SET_PICTURE":
      return {
        ...state,
        picture: action.payload,
      };
    case "SET_DISPLAY_PICTURE":
      return {
        ...state,
        displayPicture: action.payload,
      };
    case "SET_ROOM_PICTURE":
      return {
        ...state,
        roomPicture: action.payload,
      };
    case "SET_DISPLAY_ROOM_PICTURE":
      return {
        ...state,
        displayRoomPicture: action.payload,
      };
    case "SET_AREA_PICTURE":
      return {
        ...state,
        areaPicture: action.payload,
      };
    case "SET_DISPLAY_AREA_PICTURE":
      return {
        ...state,
        displayAreaPicture: action.payload,
      };
    case "SET_FACILITY":
      return {
        ...state,
        facility: action.payload,
      };

    case "SET_ROOM_SETUP":
      return {
        ...state,
        roomSetup: action.payload,
      };
    case "SET_RATE_PLAN":
      return {
        ...state,
        ratePlan: action.payload,
      };
    case "SET_HOTEL_RULES":
      return {
        ...state,
        hotelRules: action.payload,
      };
    case "SET_PAYMENT_POLICY":
      return {
        ...state,
        paymentPolicy: action.payload,
      };
    case "SET_PARKING":
      return {
        ...state,
        parking: action.payload,
      };
    case "SET_TRANSPORTATION":
      return {
        ...state,
        transportation: action.payload,
      };
    case "SET_DOCUMENT":
      return {
        ...state,
        document: action.payload,
      };
    case "SET_IS_LOGGEDIN":
      return {
        ...state,
        isLoggedin: action.payload,
      };

    default:
      return state;
  }
};

// create context
const FormContext = createContext();

// customHook for using context
export const useFormContext = () => useContext(FormContext);

// context provider
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
