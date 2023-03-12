import React from "react";

const PresentationalComponent = ({ todoData }) => {
  return (
    <div>
      {todoData.length > 0 &&
        todoData.map((element) => {
          const { title, completed, id } = element;
          return (
            <ul key={id}>
              <li>
                {id} {title} {completed}
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default PresentationalComponent;
