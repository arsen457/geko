import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider>
    <App />
  </I18nextProvider>
 
);