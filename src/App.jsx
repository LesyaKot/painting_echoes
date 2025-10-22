import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Process from "./components/Process/Process";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import PaintingProcess from "./pages/PaintingProcess/PaintingProcess";

export default function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<PaintingProcess />} />
      </Routes>
    </>
  );
}
