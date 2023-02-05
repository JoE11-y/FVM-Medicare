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
      let appointment = {};
      for (let i = 0; i < action.payload.length; i++) {
        if (action.payload[i].medicalRecordShared) {
          appointment = action.payload[i];
          break;
        }
      }
      return {
        ...state,
        appointment: appointment,
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
