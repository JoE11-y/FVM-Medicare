import { createContext, useReducer } from "react";

export const requestSummaryContext = createContext();

const defaultState = {};

const requestReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURR_REQUEST":
      return action.payload;
    default:
      return state;
  }
};

export const RequestSummaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(requestReducer, defaultState);

  return (
    <requestSummaryContext.Provider value={{ state, dispatch }}>
      {children}
    </requestSummaryContext.Provider>
  );
};
