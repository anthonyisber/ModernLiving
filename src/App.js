import React, { useState } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserContext } from './UserContext';
import AboutUs from './pages/AboutUs';
import Tos from './pages/Tos';
import Privacy from './pages/Privacy';
import AddProperty from './pages/AddProperty';
import PropertyForm from './pages/PropertyForm';
const App = () => {
  const [admin, setAdmin] = useState(true);
  // const [isLogged, setIsLogged] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {admin && <Route path='dashboard' element={<Dashboard />} />}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/addproperty" element={<AddProperty />} />
      </Routes>
      <Footer />
    </div>
  );


};

export default App;
