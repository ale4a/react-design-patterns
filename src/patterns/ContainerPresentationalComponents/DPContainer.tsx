import React, { useEffect, useState } from "react";
import PresentationalComponent from "./PresentationalComponent";

const DPContainer = () => {
  const [todoData, setTodoData] = useState([]);

  const handleFetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const dataResponse = await response.json();
    const dataSlice = dataResponse.slice(0, 10);
    const data = dataSlice
      .filter((element) => element.completed)
      .map((element) => {
        const object = {
          title: element.title,
          completed: element.completed,
          id: element.id,
        };
        return object;
      });
    setTodoData(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      <PresentationalComponent todoData={todoData} />
    </div>
  );
};

export default DPContainer;
