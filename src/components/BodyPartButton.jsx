import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "./functions/fetchData";
import "./css/body_part_button.css";

const BodyPartButton = () => {
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchBodyPartList = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchBodyPartList();
  }, []);
  return bodyParts.map((bodyPart, index) => {
    return (
      <button id={bodyPart} key={index} className="body-part-bttn">
        {bodyPart}
      </button>
    );
  });
};

export default BodyPartButton;
