import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import TechSolutions from './pages/TechSolutions';
import TalentSolutions from './pages/TalentSolutions';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
          <Route path="/talent-solutions" element={<TalentSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;