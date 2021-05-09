import { useState } from "react";
import { morseToText } from "../MorseCode";
import styles from "./MorseToText.module.css";

interface MorseToTextProps {
  morse?: string;
  onChange?: (morse: string) => void;
}

const MorseToText = (props: MorseToTextProps) => {
  const [morse, setMorse] = useState(props.morse ?? "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setMorse(newValue);
    props.onChange && props.onChange(newValue);
  };

  const onCopy = () => {
    if (morse === "") return;

    navigator.clipboard.writeText(morseToText(morse).toLowerCase());
    alert("copied to clipboard");
  };

  return (
    <div className={styles.MorseToText}>
      <h1>Morse-to-text</h1>

      <input
        type="text"
        defaultValue={morse}
        onChange={onChange}
        placeholder="Morse code to translate"
        autoFocus
      ></input>

      <div className={styles.outputSection}>
        <p className="output">{morseToText(morse).toLowerCase()}</p>

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

export default MorseToText;
