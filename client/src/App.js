import { LandingPage } from "./pages/LandingPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PatientDashboard } from "./pages/PatientDashboard"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<PatientDashboard />} path="/patient-dashboard" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
