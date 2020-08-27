import React from "react";
import { Content, RevyoomeLogo, TeksideLogo, WSIBLogo } from "assets";

export const Workterm = (props) => {
  const company = Content[props.company];
  const title = company.name;
  const learningGoals = company.learningGoals;
  const about = company.about;
  const acknowledgements = company.acknowledgements;
  const conclusion = company.conclusions;
  const reflection = company.reflection;
  let logo;

  switch (props.company) {
    case "revyoome":
      logo = RevyoomeLogo;
      break;
    case "tekside":
      logo = TeksideLogo;
      break;
    case "wsib":
      logo = WSIBLogo;
      break;
    default:
      logo = "";
  }

  let goals = [];
  Object.keys(learningGoals).forEach(function (key) {
    let goal = (
      <div key={key}>
        <h3>{key}</h3>
        <p>{learningGoals[key]}</p>
      </div>
    );

    goals.push(goal);
  });

  let formattedConclusion = conclusion.split("\n").map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>;
  });

  return (
    <div>
      <img className="logo" src={logo} alt={title + "'s logo"} />
      <div className="intro">
        <h1>About {title}</h1>
        <p>{about}</p>
        <h1>My Learning Goals</h1>
        {goals}
        <h3>Reflection</h3>
        <p>{reflection}</p>
        <h1>Conclusion</h1>
        {formattedConclusion}
        <h1>Acknowledgements</h1>
        <p>{acknowledgements}</p>
      </div>
    </div>
  );
};
