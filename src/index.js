import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Eligibility from "./pages/Eligibility";
import Enrollment from "./pages/Enrollment";
import AboutUs from "./pages/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "enrollment",
    element: <Enrollment />,
  },
  {
    path: "eligibility",
    element: <Eligibility />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
