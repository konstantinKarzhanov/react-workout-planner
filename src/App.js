import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainText from "./components/MainText";
import GenerateExercisesButton from "./components/GenerateExercisesButton";
import ClearButton from "./components/ClearButton";
import ContainerCarousel from "./components/ContainerCarousel";

const App = () => (
  <>
    <Header />
    <MainText />
    <ContainerCarousel />
  </>
);

export default App;
