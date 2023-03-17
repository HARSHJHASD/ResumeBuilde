import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import MainForm from './components/Mainform/MainForm';
import Footer from './components/Footer/Footer';



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