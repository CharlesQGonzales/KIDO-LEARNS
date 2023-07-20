import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./pages/home/home";
import About from "./pages/about/about";

function App() {
  return (
    <div className="relative min-h-full md:flex" data-dev-hint="container">
      <Navbar />
      <main id="content" className="flex flex-col">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
