import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
// import MainForm from './components/Mainform/MainForm';
import ResumeTemplate from './components/Mainform/ResumeTemplate/ResumeTemplate';



const RouteFile = () => {
    return (
        <BrowserRouter>
          <Routes>
            {/* home page par landing */}
            <Route exact path="/" element={<App/>} />
            {/* <Route exact path="/home" element={<App/>} /> */}
            <Route exact path="/resume" element={<ResumeTemplate/>} />
          </Routes>
        </BrowserRouter>
      )
}

export default RouteFile
