import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";

import App from "./App";
import "./index.css";
import { cognitoConfig } from "./auth/cognito";

Amplify.configure({
  Auth: {
    Cognito: {
      region: cognitoConfig.region,
      userPoolId: cognitoConfig.userPoolId,
      userPoolClientId: cognitoConfig.userPoolWebClientId, // <-- düzeltme
    },
  },
});

// DEBUG: bunu bir kere görmelisin
console.log("AMPLIFY CONFIG:", Amplify.getConfig());

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);