import React, { useState } from "react";

const DropDown = ({ renderOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (value) => {
    setSelectedOption(value);
    handleToggle();
  };

  return (
    <div>
      <button onClick={handleToggle}>Select an option</button>
      {isOpen && <ul>{renderOptions(handleOnClick, selectedOption)}</ul>}
      {selectedOption && <p>selected option: {selectedOption}</p>}
    </div>
  );
};

export default DropDown;
