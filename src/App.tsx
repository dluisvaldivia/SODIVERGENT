import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import SoDivergent from './pages/SoDivergent';
import Layout from './layout/Layout';
// import Home from './pages/Home';
import Individuals from './pages/Individuals';
import Family from './pages/Family';
import Others from './pages/Others';
import Accessibility from './pages/Accessibility';
import Terms from './pages/Terms';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';

// Scroll to top wrapper
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

const ContactPlaceholder = () => (
  <div className="py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p>Please use the form on the Home page.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<SoDivergent />} />
          <Route element={<Layout />}>
            <Route path="individuals" element={<Individuals />} />
            <Route path="family" element={<Family />} />
            <Route path="others" element={<Others />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<ContactPlaceholder />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
