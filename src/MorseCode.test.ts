import { morseToText, textToMorse } from "./MorseCode";

test("can convert alphabet", () => {
  const morse = "abcdefghijklmnopqrstuvwxyz";
  const result =
    ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";

  expect(textToMorse(morse)).toEqual(result);
});

test("can convert numbers", () => {
  const morse = "1234567890";
  const result = ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----";

  expect(textToMorse(morse)).toEqual(result);
});

test("can convert morse numbers", () => {
  const morse = ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----";
  const result = "1234567890";

  expect(morseToText(morse)).toEqual(result);
});

test("can convert morse alphabet", () => {
  const morse =
    ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";
  const result = "abcdefghijklmnopqrstuvwxyz";

  expect(morseToText(morse)).toEqual(result.toUpperCase());
});

test("won't convert anything it doesn't understand", () => {
  expect(textToMorse("ö")).toEqual("ö");
});

test("won't convert anything it doesn't understand", () => {
  expect(morseToText("ö")).toEqual("ö");
  expect(morseToText(".......")).toEqual(".......");
});
