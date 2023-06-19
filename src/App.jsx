import { useState } from "react";

import Nav from "./Components/NavBar/index";

import Home from "./Components/Home/index";
import Footer from "./Components/footer/index";
import { ContextProvider } from "./Components/Context";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="h-[100vh] w-full">
        <Nav />
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
