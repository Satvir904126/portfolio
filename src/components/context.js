import React, { Component, createContext, useState } from "react";
import { projectDetail } from "../data";
import { logos } from "../data";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [projectDetails, setProjDetail] = useState(projectDetail);
  const [ShowprojectDetails, setShowProjDetail] = useState(projectDetail);
  const [logo, setlogo] = useState(logos);
  const [project, setProject] = useState([]);
  const [project1, setProject1] = useState([{}]);

  return (
    <div>
      <DataContext.Provider
        value={{
          project: [projectDetails, setProjDetail],
          showProj: [ShowprojectDetails, setShowProjDetail],
          empty: [project, setProject],
          empty1: [project1, setProject1],
          logo: [logo, setlogo],
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};
