import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
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
        <div id="bodyGridItem">Main</div>
      </div>
    </div>


      {/* <Navbar />
      <Sidebar />
      <Footer /> */}
    </>
  )
}

export default App
