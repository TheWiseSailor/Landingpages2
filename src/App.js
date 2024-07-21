import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Landingpages2" element={<HomeRender />} />
        <Route path="/" element={<HomeRender />} />
      </Routes>
      <Footer activePage={location.pathname} />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;