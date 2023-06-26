import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Navigation from '../Navbar/Navigation'

const Component = () => {
  return (
    <Router>
      <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default Component
