import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavigationBar from './NavigationBar';
import Home from '../pages/Home';
import About from '../pages/About';
import { Service } from '../pages/Service';
import { Contact } from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';
import Registration from '../auth/Registration';
import AccordianComponent from '../pages/AccordianComponent';
import PaginationComponent from '../pages/PaginationComponent';
import Stepper from '../pages/Stepper';
import MultipleTabs from '../pages/MultipleTabs';
import Todo from '../pages/Todo';
import Product from '../pages/Product';
import ImageGallery from '../pages/ImageGallary';
import Signup from '../auth/SignUp';
import Login from '../auth/Login';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {isAuthenticated && (
          <>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/accordion" element={<AccordianComponent />} />
            <Route path="/pagination" element={<PaginationComponent />} />
            <Route path="/stepper" element={<Stepper />} />
            <Route path="/multipletabs" element={<MultipleTabs />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/ecommerce" element={<Product />} />
            <Route path="/infiniteScroll" element={<ImageGallery />} />
          </>
        )}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
