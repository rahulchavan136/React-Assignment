import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Home from '../pages/Home';
import { About } from '../pages/About';
import { Service } from '../pages/Service';
import { Contact } from '../pages/Contact';
import { PageNotFound } from '../pages/PageNotFound';
 import Registration from '../auth/Registration';
import AccordianComponent from '../pages/AccordianComponent';
import PaginationComponent from '../pages/PaginationComponent';
import Stepper from '../pages/Stepper';
  
const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/accordion" element={<AccordianComponent />} />
        <Route path="/pagination" element={<PaginationComponent />} />
        <Route path="/stepper" element={<Stepper />} />




        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
