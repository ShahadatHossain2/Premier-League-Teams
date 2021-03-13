
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
