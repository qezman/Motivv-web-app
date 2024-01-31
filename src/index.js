import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./components/UserContext";
import { ChallengeProvider } from "./components/ChallengeContext";

ReactDOM.render(
  <UserProvider>
    <ChallengeProvider>
      <App />
    </ChallengeProvider>
  </UserProvider>,
  document.getElementById("root")
);
