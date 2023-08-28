import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavbarState from "./context/Navbar/navbarState";
import Page19 from "./Pages/Page19";
import Page26 from "./Pages/Page26";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Page18 from "./Pages/Page18";
import Page56 from "./Pages/Page56";
import TeacherSide from "./Pages/TeacherSide";


function App() {
  return (
    <>
      <NavbarState>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/page19" element={<Page19 />} />
              <Route path="/" element={<Page18 />} />
              <Route path="/page26" element={<Page26 type={1}/>}/>
              <Route path="/page27" element={<Page26 type={2}/>} />
              <Route path="/page56" element={<Page56/>} />
              <Route path="/teacher/*" element={<TeacherSide/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </NavbarState>
    </>
  );
}

export default App;
