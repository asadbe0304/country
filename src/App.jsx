import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Main";
import { BrowserRouter } from "react-router-dom";

import Country from "./Counteries/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Intro/> */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/intro/:names" element={<Country/>}/>
          {/* // <Route path="/count" element={<Country />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
