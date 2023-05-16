import React, { useState } from "react";
import { RiAddCircleFill } from "react-icons/ri";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type=" text " value={inputText} />
      <button
        onClick={() => {
          props.add(inputText);
          setInputText(" ");
        }}
      >
      <RiAddCircleFill className="plus-icon" size="25px"/>
      </button>
    </div>
  );
}

export default InputArea;
