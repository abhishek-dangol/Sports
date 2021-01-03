import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SinglePlayer from "./pages/SinglePlayer";
// import components
import Navbar from "./components/Navbar";

function App() {
  document.title = "Dan Sports DB";
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/player/:id">
          <SinglePlayer />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
