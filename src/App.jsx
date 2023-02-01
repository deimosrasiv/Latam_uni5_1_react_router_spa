import { Routes, Route } from "react-router-dom";

import Footer from "./Components/footer";
import AppBar from "./Components/appbar";

import Home from "./pages/Home";
import Tortas from "./pages/Tortas";
import Novios from "./pages/Novios";
import Contacto from "./pages/Contacto";
import NoFount from "./pages/NoFount";

export default function App() {
  return (
    <div>
      <div>
        <AppBar />
      </div>

      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Tortas" element={<Tortas />} />
          <Route path="/Novios" element={<Novios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NoFount />} />
        </Routes>
      </main>
      <div className="container py-3">
        <Footer />
      </div>
    </div>
  );
}