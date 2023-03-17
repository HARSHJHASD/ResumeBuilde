import React from 'react'
import './app.scss';
import From from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <From/>
      <Footer/>
    </div>
  )
}

export default App