import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedabacks, Hero, NavBar, Tech, Work, StarsCanvas} from './components';


  import { form } from "framer-motion/client";

const App= () => {

  return (
   <BrowserRouter>
    <div className="relative z-0  bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
      
      </div>   
   </BrowserRouter>
  )
}

export default App
