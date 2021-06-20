import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PostForm from "./pages/PostForm";

function App() {
  return (
    <Switch>
      <Route exact="/" component={ Home }/>
      <Route exact="/postform" component={ PostForm }/>
    </Switch>
  );
}

export default App;
