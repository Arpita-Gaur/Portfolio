import Navbar from "././components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App=()=>{
  return(
    <div className=" antialiased selection:bg-blue-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
       
    
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
            <About/>
            <Technologies/>
            <Projects/>
            <Contact/>
            
            </div>

    </div>
    
   );
};

export default App;