import configureStore from "redux-mock-store";
import { Store } from "../app/store";
import { changeMorse, changeText, selectMorse, Slice } from "./morseSlice";

const mockStore = configureStore([]);

test("can dispatch changeMorse action", () => {
  const store = mockStore({ morse: "", text: "" });

  store.dispatch(changeMorse("hello"));

  const actions = store.getActions();

  expect(actions.length).toBe(1);
  expect(actions[0].payload).toBe("hello");
});

test("can dispatch changeMorse action", () => {
  const store = mockStore({ morse: "", text: "" });

  store.dispatch(changeText("world"));

  const actions = store.getActions();

  expect(actions.length).toBe(1);
  expect(actions[0].payload).toBe("world");
});

test("changeMorse will set morse in state", () => {
  const state = { morse: "", text: "" };

  Slice.caseReducers.changeMorse(state, {
    type: "morse/changeMorse",
    payload: "foobar",
  });

  expect(state).toEqual({ morse: "foobar", text: "" });

  // also, update localStorage
  expect(window.localStorage.getItem("text-to-morse")).toBe(
    '{"morse":"foobar","text":""}'
  );
});

test("changeText will set text in state", () => {
  const state = { morse: "", text: "" };

  Slice.caseReducers.changeText(state, {
    type: "morse/changeMorse",
    payload: "foobar",
  });

  expect(state).toEqual({ morse: "", text: "foobar" });

  // also, update localStorage
  expect(window.localStorage.getItem("text-to-morse")).toBe(
    '{"morse":"","text":"foobar"}'
  );
});
