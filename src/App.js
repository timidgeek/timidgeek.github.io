/* functional imports */
import React, { useState, useEffect, useRef } from 'react';

/* default components */
import Header from './pages/Header';
import HomePage from './HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

/* desktop components */
import HomePageDesktop from './pages/HomePageDesktop';
import AboutDesktop from './pages/AboutDesktop';
import Projects from './pages/Projects';
import Masthead from './pages/Masthead';


function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      {!isFooterVisible && <Header />}
      <Masthead />
      <HomePageDesktop />

      {/* <div className="desktop-only"> */}
        <AboutDesktop />
      {/* </div> */}
      {/* <div className="mobile-only">
        <About />
      </div> */}
      
      <Projects />
      <Contact />
      <Footer ref={footerRef} />
    </>
  );
}

export default App;