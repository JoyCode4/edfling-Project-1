import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page19 from "./Pages/Page19";
import Page26 from "./Pages/Page26";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Page18 from "./Pages/Page18";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/page19" element={<Page19 />} />
          <Route path="/" element={<Page18 />} />
          <Route path="/page26" element={<Page26 type={1}/>}/>
          <Route path="/page27" element={<Page26 type={2}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
