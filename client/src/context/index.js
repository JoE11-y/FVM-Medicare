import { createContext, useReducer } from "react"
import { patients } from "../dummyData"

export const patientSummaryContext = createContext()

const initialState = patients[0]

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PATIENT":
      return patients[action.payload]
    default:
      return state
  }
}

export const PatientSummaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <patientSummaryContext.Provider value={{ state, dispatch }}>
      {children}
    </patientSummaryContext.Provider>
  )
}
