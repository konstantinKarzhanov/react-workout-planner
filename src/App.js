import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainText from "./components/MainText";
import BodyPartList from "./components/BodyPartList";
import GenerateExercisesButton from "./components/GenerateExercisesButton";
import ClearButton from "./components/ClearButton";
import ContainerCarousel from "./components/ContainerCarousel";

const App = () => {
  return (
    <>
      <Header />
      <MainText />
      <BodyPartList />
      <GenerateExercisesButton />
      <ClearButton />
    </>
  );
};

export default App;
