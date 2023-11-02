import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import Favourites from "./favourites";
import Addfvrt from "./addfvrt";
import About from "./about";
// import State from './state';
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//function
function App() {
  let title = "Favourites Movies";

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites data={title} />} />
          <Route path="/addfvrt" element={<Addfvrt />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
