import React from "react";
import { Content } from "assets";

export const Workterm = (props) => {
  const company = Content[props.company];
  const learningGoals = company.learningGoals;
  const about = company.about;
  const acknowledgements = company.acknowledgements;
  const conclusion = company.conclusion;
  const reflection = company.reflection;

  let goals = [];
  Object.keys(learningGoals).forEach(function (key) {
    console.table("Key : " + key + ", Value : " + learningGoals[key]);
    let goal = (
      <div key={key}>
        <h3>{key}</h3>
        <p>{learningGoals[key]}</p>
      </div>
    );

    goals.push(goal);
  });

  return (
    <div>
      <p>{about}</p>
      {goals}
      <p>{reflection}</p>
      <p>{conclusion}</p>
      <p>{acknowledgements}</p>
    </div>
  );
};
