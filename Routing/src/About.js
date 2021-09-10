import React from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  let history = useHistory();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => {
          history.push("./contact");
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default About;
