import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MorseToText from "./MorseToText";

test("translates morse to text", () => {
  const { container } = render(<MorseToText morse="... --- ..." />);

  expect(container.querySelector(".output").textContent).toEqual("sos");
});

test("calls onChange fn", () => {
  const mockOnChange = jest.fn();
  const { container } = render(<MorseToText onChange={mockOnChange} />);

  fireEvent.change(container.querySelector('input[type="text"]'), {
    target: { value: "..." },
  });

  expect(container.querySelector(".output").textContent).toEqual("s");
  expect(mockOnChange.mock.calls.length).toBe(1);
  expect(mockOnChange.mock.calls[0][0]).toBe("...");
});

test("can copy result to clipboard", () => {
  const mockClipboard = {
    writeText: jest.fn(),
  };

  window.alert = jest.fn();
  navigator.clipboard = mockClipboard;
  const { container } = render(<MorseToText morse="... --- ..." />);

  fireEvent.click(container.querySelector(".output-section button"));

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith("sos");
});
