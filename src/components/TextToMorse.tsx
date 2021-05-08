import { useState } from "react";
import { textToMorse } from "../MorseCode";
import "./TextToMorse.css";

const TextToMorse = () => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setText(textToMorse(newValue));
  };

  return (
    <div className="TextToMorse">
      <h1>Text-to-Morse</h1>

      <input
        type="text"
        onChange={onChange}
        placeholder="Text to translate"
        autoFocus
      ></input>

      <p className="output">{text}</p>
    </div>
  );
};

export default TextToMorse;
