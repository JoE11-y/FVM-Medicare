import { LandingPage } from "./pages/LandingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PatientDashboard } from "./pages/PatientDashboard"
import { DoctorDashboard } from "./pages/DoctorDashboard"
import { ChooseUser } from "./pages/ChooseUser"
import { SelectMedicalRecords } from "./pages/SelectMedicalRecords"
import { DoctorRegistration } from "./pages/DoctorRegistration"
import { Loader } from "./components/Loader"
import { PatientRegistration } from "./pages/PatientRegistration"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Loader />} path="/loader" />
          <Route element={<DoctorRegistration />} path="/doctor-form" />
          <Route element={<PatientRegistration />} path="/patient-form" />
          <Route element={<PatientDashboard />} path="/patient-dashboard" />
          <Route element={<DoctorDashboard />} path="/doctor-dashboard" />
          <Route element={<ChooseUser />} path="/choose-user" />
          {/* <Route
            element={<SelectMedicalRecords />}
            path="/select-records/:id"
          /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
