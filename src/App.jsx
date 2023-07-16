import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./pages/home/home";
import About from "./pages/about/about";

function App() {
  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
