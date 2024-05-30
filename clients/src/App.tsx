import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/shared/Sidebar'
import PatientsPage from './components/pages/Patients/PatientsPage'

function App() {
  return (
    <>
    <div id="mainGrid">
      <div id="navbarGridItem">
        <Navbar />
      </div>
      <div id="mainGridItem">
        <div id="sidebarGridItem">
          <Sidebar />
        </div>
        <div id="bodyGridItem">
          <PatientsPage />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
