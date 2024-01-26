import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-primary-bg">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
