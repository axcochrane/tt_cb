import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/shared/Sidebar'


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
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
