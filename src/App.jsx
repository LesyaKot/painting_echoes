// import { useState } from 'react'

import "./App.css";
import Logo from "./components/Logo/Logo";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Logo />
      <Header />
      <Hero />
      <Gallery />
    </>
  );
}
