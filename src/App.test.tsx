import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("default route", () => {
  const { container } = render(<App />);
  const textToMorse = container.querySelector(".TextToMorse");

  expect(textToMorse).toBeInTheDocument();
});
