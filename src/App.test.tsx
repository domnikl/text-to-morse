import { render } from "@testing-library/react";
import App from "./App";
import { Store } from "./app/store";
import { Provider } from "react-redux";

test("default route", () => {
  const { container } = render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
  const textToMorse = container.querySelector(".TextToMorse");

  expect(textToMorse).toBeInTheDocument();
});
