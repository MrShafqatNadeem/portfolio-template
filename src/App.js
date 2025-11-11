import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Hire from "./components/section/Hire";
import Contact from "./components/section/Contact";
import LanguageSwitcher from "./components/layouts/LanguageSwitcher";
import { HireProvider } from "./context/HireContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <HireProvider>
      <div className="App">
        <LanguageSwitcher />
        <Header />
        <Particles />
        <About />
        <Works />
        <Hire />
        <Contact />
      </div>
    </HireProvider>
  );
}

export default App;
