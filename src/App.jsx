import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./pages/home/home";

function App() {
  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
