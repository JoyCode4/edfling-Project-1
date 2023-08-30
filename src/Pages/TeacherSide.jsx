import { useContext, React } from 'react';
import { Route, Routes } from "react-router-dom";
import HRLeaveDefine from './HRLeaveDefine';
import HRLeaveType from './HRLeaveType';
import HRLeaveRequest from './HRLeaveRequest';
import NavbarContext from '../context/Navbar/navbarContext';
import Nav from "../Components/teacherSide/Nav";
import Sidebar from '../Components/teacherSide/Sidebar';

const TeacherSide = () => {
  const {setTeacherSide}=useContext(NavbarContext);
  setTeacherSide(true);
  return (
    <>
      <div className='flex'>
        <div>
          <Sidebar/>
        </div>
        <div className='flex flex-col md:ml-64 w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar'>
          <div className="w-full">
            <Nav />
          </div>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HRLeaveType />} />
              <Route path="/leavedefine" element={<HRLeaveDefine />} />
              <Route path="/leaverequest" element={<HRLeaveRequest />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherSide;
