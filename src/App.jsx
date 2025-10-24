import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans flex flex-col p-6 items-center justify-center bg-[#121212] text-white ">
      {/* <Navbar /> */}
      <section id="home" className="max-w-3xl">
        <Home />
      </section>
      <section id="about" className="max-w-3xl">
        <About />
      </section>
      <section className="max-w-3xl" id="projects">
        <Projects />
      </section>
      <section id="contact" className="max-w-3xl">
        <Contact />
      </section>
    </div>
  );
}

export default App;
