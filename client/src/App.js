import { LandingPage } from "./pages/LandingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PatientDashboard } from "./pages/PatientDashboard"
import { DoctorDashboard } from "./pages/DoctorDashboard"
import { ChooseUser } from "./pages/ChooseUser"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<PatientDashboard />} path="/patient-dashboard" />
          <Route element={<DoctorDashboard />} path="/doctor-dashboard" />
          <Route element={<ChooseUser />} path="/choose-user" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
