import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import TechSolutions from './pages/TechSolutions';
import TalentSolutions from './pages/TalentSolutions';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
       <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
          <Route path="/talent-solutions" element={<TalentSolutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;