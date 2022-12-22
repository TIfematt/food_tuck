import "./styles.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Body from "./components/Body";

export default function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Body />
    </>
  );
}

