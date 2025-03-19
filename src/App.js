import Contact from "./COMPONENTS/Contact/Contact";
import Footer from "./COMPONENTS/Footer/Footer";
import Intro from "./COMPONENTS/Intro/Intro";
import Navbar from "./COMPONENTS/NavBar/Navbar";
import Skills from "./COMPONENTS/Skills/Skills";
import Works from "./COMPONENTS/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
