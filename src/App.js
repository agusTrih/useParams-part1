import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
// import Github from "./Component/Github/Github";
import GithubDetail from "./Component/GithubDetails/GithubDetails";

function App() {
    return (
        <Router>
            {/* <Github /> */}

            <GithubDetail />
        </Router>
    );
}

export default App;
