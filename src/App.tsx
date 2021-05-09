import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextToMorse from "./components/TextToMorse";
import MorseToText from "./components/MorseToText";
import {
  selectMorse,
  changeMorse,
  selectText,
  changeText,
} from "./features/morseSlice";

function App() {
  const morse = useSelector(selectMorse);
  const text = useSelector(selectText);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
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

        <div className={styles.switch}>
          <Switch>
            <Route path="/text">
              <MorseToText
                morse={morse}
                onChange={(morse) => dispatch(changeMorse(morse))}
              />
            </Route>
            <Route path="/morse">
              <TextToMorse
                text={text}
                onChange={(text) => dispatch(changeText(text))}
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
