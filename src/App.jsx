import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="font-sans flex flex-col p-6 items-center justify-center bg-gray-100 text-white ">
      {/* <Navbar /> */}
      <section id="home" className="max-w-3xl">
        <Home />
      </section>
      <section id="aboutme" className="max-w-3xl">
        <AboutMe />
      </section>

      <section className="max-w-3xl" id="projects">
        <Projects />
      </section>
      <section id="about" className="max-w-3xl">
        <About />
      </section>

      <section id="contact" className="max-w-3xl">
        <Contact />
      </section>
    </div>
  );
}

export default App;

// bg-[#121212]
