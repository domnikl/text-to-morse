import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import TextToMorse from "./components/TextToMorse";
import MorseToText from "./components/MorseToText";

function App() {
  const [lastText, setLastText] = useState("");
  const [lastMorse, setLastMorse] = useState("");

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/morse">generate Morse</Link>
            </li>
            <li>
              <Link to="/text">generate Text</Link>
            </li>
          </ul>
        </nav>

        <div className="Switch">
          <Switch>
            <Route path="/text">
              <MorseToText
                morse={lastMorse}
                onChange={(morse) => setLastMorse(morse)}
              />
            </Route>
            <Route path="/morse">
              <TextToMorse
                text={lastText}
                onChange={(text) => setLastText(text)}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/morse" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
