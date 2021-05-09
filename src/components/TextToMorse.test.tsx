import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TextToMorse from "./TextToMorse";

test("translates text to morse", () => {
  const { container } = render(<TextToMorse text="SOS" />);

  expect(container.querySelector("p")?.textContent).toEqual("... --- ...");
});

test("calls onChange fn", () => {
  const mockOnChange = jest.fn();
  const { container } = render(<TextToMorse onChange={mockOnChange} />);

  fireEvent.change(container.querySelector('input[type="text"]'), {
    target: { value: "s" },
  });

  expect(container.querySelector(".output")?.textContent).toEqual("...");
  expect(mockOnChange.mock.calls.length).toBe(1);
  expect(mockOnChange.mock.calls[0][0]).toBe("s");
});

test("can copy result to clipboard", () => {
  const mockClipboard = {
    writeText: jest.fn(),
  };

  window.alert = jest.fn();
  navigator.clipboard = mockClipboard;
  const { container } = render(<TextToMorse text="SOS" />);

  fireEvent.click(container.querySelector("button"));

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith("... --- ...");
});
