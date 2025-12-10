import  { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Loading from './components/loading';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Education />
          <Projects/>
          <Certificates />
          <Contact />
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;