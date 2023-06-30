import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import ExerciseHeader from "./components/ExerciseHeader";

import Form from "./components/Form";
import Carousel from "./components/Carousel";
import Button from "./components/Button";
import Report from "./components/Report";

import "./App.css";
import "./components/css/carousel.css";
import "./components/css/report.css";
// --------------------
// for backup purposes
// --------------------
// import allExercisesJSON from "./components/json/allExercises.json";

const App = () => {
  const apiUrl = "https://exercisedb.p.rapidapi.com/exercises";
  const apiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4a8554f7a1mshbdce340f82597c2p12b5edjsndffa189d570f",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const fetchData = async (url, options) => {
    const request = await fetch(url, options);
    const response = await request.json();
    const dataArr = response.map(({ bodyPart, gifUrl, name, target }) => {
      return { bodyPart, gifUrl, name, target };
    });

    setDataArr(dataArr);
  };

  useEffect(() => {
    fetchData(apiUrl, apiOptions);
  }, []);

  const body = document.querySelector("body");

  const [dataArr, setDataArr] = useState([]);
  const [groupsArr, setGroupsArr] = useState([]);

  const [selectedGroupsArr, setSelectedGroupsArr] = useState([]);
  const [selectedCardsArr, setSelectedCardsArr] = useState([]);

  const [isVisibleReport, setIsVisibleReport] = useState(false);
  body.dataset.blockedScroll = isVisibleReport;

  // --------------------
  // for backup purposes
  // --------------------
  // useEffect(() => {
  //   setDataArr(
  //     allExercisesJSON.map(({ bodyPart, gifUrl, name, target }) => {
  //       return { bodyPart, gifUrl, name, target };
  //     })
  //   );
  // }, []);

  useEffect(() => {
    setGroupsArr(
      dataArr.reduce((acc, { target }) => {
        !acc.includes(target) && acc.push(target);
        return acc;
      }, [])
    );
  }, [dataArr]);

  const handleClickForm = (event) => {
    const target = event.target.closest('[id^="group-"]');
    if (!target) return;

    const parent = target.parentNode;
    if (target.checked) {
      setSelectedGroupsArr((prev) => prev.concat(parent.textContent));
    } else {
      setSelectedGroupsArr((prev) => {
        const position = prev.indexOf(parent.textContent);
        if (position !== -1) return prev.toSpliced(position, 1);
      });
    }
    parent.classList.toggle("selected");
  };

  const handleClickBtnReport = () => {
    setIsVisibleReport(!isVisibleReport);
  };

  return (
    <>
      <div
        className="overlap"
        {...(isVisibleReport ? { "data-active": "" } : {})}
      ></div>
      <div className="container flow-spacing--l">
        <Header />
        <main className="flow-spacing--xl">
          <section>
            <Form
              onClick={(event) => {
                handleClickForm(event);
              }}
              data={groupsArr}
            />
          </section>
          <article className="flow-spacing--l bg-c--accent-2">
            {selectedGroupsArr.map((item, index) => (
              <section key={index}>
                <ExerciseHeader headerValue={item} />
                <Carousel
                  data={dataArr.reduce((acc, current) => {
                    current.target === item && acc.push(current);
                    return acc;
                  }, [])}
                  setSelectedCardsArr={setSelectedCardsArr}
                />
              </section>
            ))}
          </article>
          <section className="m--0">
            {selectedCardsArr.length > 0 && (
              <Button
                onClick={handleClickBtnReport}
                classValue="btn-report fs--xxxs text-capital b-radius"
                datasetValue={isVisibleReport && "data-visible-report"}
                value={`${
                  !isVisibleReport ? "see selected exercises" : "close report"
                }`}
              />
            )}
            <Report
              isVisibleReport={isVisibleReport}
              titleValue="Your workout plan"
              data={selectedCardsArr}
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
