import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainText from "./components/MainText";
import BodyPartList from "./components/BodyPartList";
import GenerateExercisesButton from "./components/GenerateExercisesButton";
import ClearButton from "./components/ClearButton";
// import { exerciseOptions, fetchData } from "./components/functions/fetchData";

// // This is testing how the code should work
// const fetchExerciseList = async () => {
//   const list = await fetchData(
//     "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
//     exerciseOptions
//   );
//   // console.log(list);
// };

const App = () => (
  <>
    <Header />
    <MainText />
    <BodyPartList />
    <GenerateExercisesButton />
    <ClearButton />
  </>
);

export default App;
