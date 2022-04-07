import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Search from "./component/Search";
import Header from "./layout/Header";




const App = () => {


  return (
    <div className=" min-h-screen">
      <Header/>
    <Search/>
    </div>
  );
};

export default App;
