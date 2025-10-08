import "./App.css";
import Logo from "./components/Logo/Logo";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <div>
      <div class="wrapper">
        <Logo />
        <Header />
      </div>
      <Hero />
      <Gallery />
    </div>
  );
}
