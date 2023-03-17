import React from 'react'
import './app.scss';
import From from './components/Form'
// import FromOne from './components/FromOne';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <From/>
      {/* <FromOne/> */}
      <Footer/>
    </div>
  )
}

export default App