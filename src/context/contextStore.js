import React, { createContext, useContext, useReducer } from "react";

// initial state

const initialState = {
  contactDetails: {},
  basicDetails: {},
  picture: {},
  facility: {},
  roomSetup: {},
  ratePlan: {},
  hotelRules: {},
  paymentPolicy: {},
  parking: {},
  transportation: {},
  document: {},
};

// reducer function
const formReducer = (state, action) => {
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
    case "SET_PICTURE":
      return {
        ...state,
        picture: action.payload,
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
