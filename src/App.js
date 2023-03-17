import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
// import From from './components/Form'
import MainForm from './components/MainForm';
// import FromOne from './components/FromOne';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <MainForm/>
      {/* <FromOne/> */}
      <Footer/>
    </div>
  )
}

export default App