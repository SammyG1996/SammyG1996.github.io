import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import About from "./componets/About";
import { Skills } from "./componets/Skills";
import Work from "./componets/Work";
import ParticlesBackground from "./componets/ParticlesBackground";
import UpcommingProjects from "./componets/UpcommingProjects";



function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <UpcommingProjects />
    </div>
  );
}

export default App;
