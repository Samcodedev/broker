import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Navigation from '../Navbar/Navigation'
import Market from './Market/Market'
import Forex from './Forex/Forex'
import Chart from './Chart/Chart'

const Component = () => {
  return (
    <Router>
      <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/forex" element={<Forex />} />
            <Route path="/chart" element={<Chart />} />
        </Routes>
    </Router>
  )
}

export default Component
