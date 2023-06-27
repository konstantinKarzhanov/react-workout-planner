import React, { useState, useEffect } from "react";

// import Header from "./components/Header";
// import MainText from "./components/MainText";
// import BodyPartList from "./components/BodyPartList";
// import GenerateExercisesButton from "./components/GenerateExercisesButton";
// import ClearButton from "./components/ClearButton";

import Form from "./components/Form";
import Carousel from "./components/Carousel";

import "./App.css";
import "./components/css/_carousel.css";
import allExercisesJSON from "./components/json/allExercises.json";
import targetMusclesJSON from "./components/json/targetMuscles.json";

const App = () => {
  // const apiUrl = "https://exercisedb.p.rapidapi.com/exercises";
  // // const apiUrl =
  // //   "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps";

  // const apiOptions = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "4a8554f7a1mshbdce340f82597c2p12b5edjsndffa189d570f",
  //     // "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //   },
  // };

  // const fetchData = async (url, options) => {
  //   const request = await fetch(url, options);
  //   // const response = await request.text();
  //   const response = await request.json();
  //   console.log(response);
  //   const data = response.data;
  //   const dataArr = data.map(({ avatar, email }) => {
  //     return {
  //       avatar,
  //       email,
  //     };
  //   });
  //   setData(dataArr);
  // };

  // useEffect(() => {
  //   fetchData(apiUrl, apiOptions);
  // }, []);

  const [groupsArr, setGroups] = useState([]);
  const [dataArr, setData] = useState([]);

  const [selectedCardsArr, setSelectedCardsArr] = useState([]);
  const [selectedGroupsArr, setSelectedGroupsArr] = useState([]);

  useEffect(() => {
    // console.log(selectedCardsArr);
    setGroups(targetMusclesJSON);
    setData(
      allExercisesJSON.map(({ gifUrl, target, bodyPart }) => {
        return { gifUrl, target, bodyPart };
      })
    );
  }, []);

  const handleClickForm = (event) => {
    const target = event.target.closest('[id^="group-"]');
    if (!target) return;

    const parent = target.parentNode;
    if (target.checked) {
      setSelectedGroupsArr((prev) => prev.concat(parent.textContent));
    } else {
      setSelectedGroupsArr((prev) => {
        const position = prev.indexOf(parent.textContent);
        if (position != -1) return prev.toSpliced(position, 1);
      });
    }
    parent.classList.toggle("selected");
  };

  return (
    <>
      {/* <Header />
        <MainText />
        <BodyPartList />
        <GenerateExercisesButton />
        <ClearButton /> */}
      <section>
        <Form
          onClick={(event) => {
            handleClickForm(event);
          }}
          data={groupsArr}
        />
      </section>
      <section>
        {selectedGroupsArr.map((item, index) => (
          <Carousel
            key={index}
            data={dataArr.reduce((acc, { gifUrl, target, bodyPart }) => {
              target === item && acc.push({ gifUrl, target, bodyPart });
              return acc;
            }, [])}
            setSelectedCardsArr={setSelectedCardsArr}
          />
        ))}
      </section>
    </>
  );
};

export default App;
