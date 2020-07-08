import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="skill" className="jumbotron skills">
      <h1 className="text-center ">Skills</h1>
      <div className="row justify-content-center">
        <div className="card s-hover col-sm-4 m-3 col-md-4">
          <h3 className="text-center  skillTitle">Front End</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap4</li>
            <li>React</li>
          </ul>
        </div>
        <div className="card s-hover col-sm-4 m-3 col-md-4">
          <h3 className="text-center  skillTitle">Back End</h3>
          <ul>
            <li>Node Js</li>
            <li>PHP</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="card s-hover col-sm-4 m-3 col-md-4">
          <h3 className="text-center  skillTitle">Programing Language</h3>
          <ul>
            <li>JavaScript</li>
            <li>C#</li>
          </ul>
        </div>
        <div className="card s-hover col-sm-4 m-3 col-md-4">
          <h3 className="text-center  skillTitle">Database</h3>
          <ul>
            <li>My-SQL</li>
            <li>SOL-lite</li>
          </ul>
        </div>
        <div className="card s-hover col-sm-4 m-3 col-md-4">
          <h3 className="text-center  skillTitle">Vision Control</h3>
          <ul>
            <li>Git</li>
            <li>BitBucket</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
