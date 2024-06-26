import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import "./index.css";
import "./i18.tsx";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <ToastContainer />

      <App />
    </MantineProvider>
  </React.StrictMode>
);
