// import "./App.css";
// import Logo from "./components/Logo/Logo";
// import Gallery from "./components/Gallery/Gallery";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import About from "./pages/About/About";

// export default function App() {
//   return (
//     <div>
//       <div class="wrapper">
//         <Logo />
//         <Header />
//       </div>
//       <Hero />
//       <About />
//       <Gallery />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
