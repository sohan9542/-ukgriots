import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Search from "./component/Search";
import Footer from "./layout/Footer";
import Header from "./layout/Header";




const App = () => {


  return (
    <div className=" min-h-screen">
      <Header/>
    <Search/>
    <Footer/>
    </div>
  );
};

export default App;
