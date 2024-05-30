import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import HomePage from './components/pages/Home/HomePage'
import PatientsPage from './components/pages/Patients/PatientsPage'
import './index.css'
import { GlobalProvider } from './utils/GlobalContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="patients" element={<PatientsPage />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
)
