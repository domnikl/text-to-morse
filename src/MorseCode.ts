const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
};

interface MorseMap {
  [key: string]: string | undefined;
}

const textToMorse = (input: string) => {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    result.push((morseCode as MorseMap)[input[i].toUpperCase()] ?? input[i]);
  }

  return result.join(" ");
};

const morseToText = (input: string) => {
  const keys = Object.keys(morseCode);
  const chars = input.split(" ");
  let result: string[] = [];

  chars.forEach((char) => {
    result.push(
      keys.find((key) => (morseCode as MorseMap)[key] === char) ?? char
    );
  });

  return result.join("");
};

export { textToMorse, morseToText };
