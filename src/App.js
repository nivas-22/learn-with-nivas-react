import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>

      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
