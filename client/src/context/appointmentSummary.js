import { createContext, useReducer } from "react";

export const appointmentSummaryContext = createContext();

const initialState = { appointment: {}, appointments: [] };

const appointmentReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURR_APPOINTMENT":
      return {
        ...state,
        appointment: state.appointments[action.payload],
      };
    case "SET_APPOINTMENTS":
      return {
        ...state,
        appointment: action.payload[0],
        appointments: action.payload,
      };
    default:
      return state;
  }
};

export const AppointmentSummaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appointmentReducer, initialState);

  return (
    <appointmentSummaryContext.Provider value={{ state, dispatch }}>
      {children}
    </appointmentSummaryContext.Provider>
  );
};
