import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Github from "./Component/Github/Github";
import GithubDetail from "./Component/GithubDetails/GithubDetails";

function App() {
    return (
        <Router>
            <Route path="/github">
                <Github />
            </Route>
            <Switch>
                <Route exact path="/github-detail/:username">
                    <GithubDetail />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
