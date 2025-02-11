import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Homes/Home';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Service from './Component/Service/Service';
import Resources from './Component/Resources/Resources';
import StatsSection from './Component/Homes/StatsSection';
import Career from './Component/Careers/Career';
import Impact from './Component/Impact/Impact';
import About from './Component/Abouts/About';
import ContactForm from './Component/Contact/ContactForm';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<StatsSection />} />
        <Route path="/services" element={<Service />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
