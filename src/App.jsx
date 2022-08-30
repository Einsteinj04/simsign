import Navbar from './Components/Navbar/Navbar'
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";
import Collections from './Components/Collections/Collections'
import './App.css'
import './Components/WelcomePage/WelcomePage.css'
import "./Components/Navbar/Navbar.css";
import "./Components/About/About.css";
import "./Components/SignUp/SignUp.css";
import "./Components/Collections/Collections.css";

function App() {
  
  return (
    <div>
      <Navbar />
      <WelcomePage />
      <About />
      <Collections />
      <SignUp/>
    </div>
  );
}

export default App
