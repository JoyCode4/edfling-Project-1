import React from 'react'
import { Route, Routes } from "react-router-dom";
import HRLeaveDefine from './HRLeaveDefine';
import HRLeaveType from './HRLeaveType';
import HRLeaveRequest from './HRLeaveRequest';
const TeacherSide = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HRLeaveType />} />
        <Route path="/leavedefine" element={<HRLeaveDefine />} />
        <Route path="/leaverequest" element={<HRLeaveRequest />} />
      </Routes>
    </>
  )
}

export default TeacherSide;
