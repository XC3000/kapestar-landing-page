import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import Cancellation from "./pages/Cancellation";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Shipping from "./pages/Shipping";
import Terms from "./pages/Terms";

import css from "./styles/App.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <Policy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/cancellation",
    element: <Cancellation />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
]);

const App = () => {
  //don't forget to add font link in index.html
  return <RouterProvider router={router} />;
};

export default App;
