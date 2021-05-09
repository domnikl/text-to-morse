import { useState } from "react";
import { textToMorse } from "../MorseCode";
import "./TextToMorse.css";

interface TextToMorseProps {
  text?: string;
  onChange?: (text: string) => void;
  onClipboard?: (text: string) => void;
}

const TextToMorse = (props: TextToMorseProps) => {
  const [text, setText] = useState(props.text ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setText(newValue);
    props.onChange && props.onChange(newValue);
  };

  const onCopy = () => {
    if (text === "") return;

    navigator.clipboard.writeText(textToMorse(text));
    alert("copied to clipboard");
  };

  return (
    <div className="TextToMorse">
      <h1>Text-to-Morse</h1>

      <input
        type="text"
        defaultValue={text}
        onChange={onChange}
        placeholder="Text to translate"
        autoFocus
      ></input>

      <div className="output-section">
        <p className="output">{textToMorse(text)}</p>

        <button onClick={onCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TextToMorse;
