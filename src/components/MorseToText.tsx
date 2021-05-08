import { useState } from "react";
import { morseToText } from "../MorseCode";
import "./MorseToText.css";

const MorseToText = () => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setText(morseToText(newValue).toLowerCase());
  };

  return (
    <div className="MorseToText">
      <h1>Morse-to-text</h1>

      <input
        type="text"
        onChange={onChange}
        placeholder="Morse code to translate"
        autoFocus
      ></input>

      <p className="output">{text}</p>
    </div>
  );
};

export default MorseToText;
