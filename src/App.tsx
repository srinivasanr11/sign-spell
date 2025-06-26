import { About } from "./components/About";

import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Team />
      
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
