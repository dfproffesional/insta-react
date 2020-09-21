import React from "react";
import LoginView from "./views/LoginView";
import PostsView from "./views/PostsView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className="App">
        <Switch>
          <Route path="/" exact component={LoginView} />
          {/*<Route path="/posts" component={PostsView} />*/}
        </Switch>
      </section>
    </Router>
  );
}

export default App;
