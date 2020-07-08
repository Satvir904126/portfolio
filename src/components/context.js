import React, { Component, createContext, useState } from "react";
import { projectDetail } from "../data";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [projectDetails, setProjDetail] = useState(projectDetail);

  return (
    <div>
      <DataContext.Provider
        value={{ project: [projectDetails, setProjDetail] }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};
