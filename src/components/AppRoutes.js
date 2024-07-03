import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import NavigationBar from './NavigationBar';
import Home from '../pages/Home';
import { About } from '../pages/About';
import { Service } from '../pages/Service';
import { Contact } from '../pages/Contact';
 
const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
