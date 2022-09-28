import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Partner from './components/Partner'
import Expertice from './components/Expertice'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
     <Navbar />
      <Header />
      <Partner />
      <Expertice />
      <Footer />
    </div>
  )
}

export default App;
