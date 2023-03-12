import React from "react";
import Dropdown from "./Dropdown";
import "./DPRenderProps.css";

const DPRenderProps = () => {
  const nameList = ["Alejandro", "Adolfo", "Ana", "Mario", "Abigail"];
  const FilterCategory = ["Tangerine", "Orange", "Pineapple", "Grapes", "beef"];

  return (
    <div>
      <Dropdown
        renderOptions={(handleOnClick, selectedOption) => (
          <>
            {nameList.map((name, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => handleOnClick(name)}
                    className={selectedOption === name ? "selected" : ""}
                  >
                    {name}
                  </button>
                </div>
              );
            })}
          </>
        )}
      />
      <Dropdown
        renderOptions={(handleOnClick, product, c) => {
          return (
            <>
              {FilterCategory.map((element, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleOnClick(element)}
                    className={element === product ? "selected" : ""}
                  >
                    {element}
                  </button>
                );
              })}
            </>
          );
        }}
      ></Dropdown>
    </div>
  );
};

export default DPRenderProps;
