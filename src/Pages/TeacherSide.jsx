import { useContext, React } from 'react';
import { Route, Routes } from "react-router-dom";
import HRLeaveDefine from './HRLeaveDefine';
import HRLeaveType from './HRLeaveType';
import HRLeaveRequest from './HRLeaveRequest';
import NavbarContext from '../context/Navbar/navbarContext';
import Nav from "../Components/teacherSide/Nav";

const TeacherSide = () => {
  const {setTeacherSide}=useContext(NavbarContext);
  setTeacherSide(true);
  return (
    <>
          <div className="">
            <Nav />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HRLeaveType />} />
              <Route path="/leavedefine" element={<HRLeaveDefine />} />
              <Route path="/leaverequest" element={<HRLeaveRequest />} />
            </Routes>
          </div>
    </>
  )
}

export default TeacherSide;
