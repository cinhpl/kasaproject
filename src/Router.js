import {Routes, Route} from "react-router-dom";
import './assets/Styles/App.css';

// Import des composants et des pages pour la construction des routes
import Header from "./components/Header";
import Home from './pages/Home';
import About from "./pages/About";
import Accommodations from "./pages/Accommodations";
import Error404 from './pages/Error';
import Footer from "./components/Footer";

// Construction du site avec les routes via react-router-dom
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodations/:id" element={<Accommodations />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

