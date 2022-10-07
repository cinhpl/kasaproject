import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Housing from "./components/Housing/Housing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/about/*" element={<About />} /> ERROR 404*/}
        <Route path="/housing" element={<Housing />} />
      </Routes>
    </div>

  );
}

export default App;
