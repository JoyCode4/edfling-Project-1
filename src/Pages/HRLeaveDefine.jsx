import React from 'react'
import LeaveHeader1 from '../Components/teacherSide/LeaveHeader1';
import AddLeaveDefine from "../Components/teacherSide/AddLeaveDefine";
import LeaveDefineList from '../Components/teacherSide/LeaveDefineList';

const HRLeaveDefine = () => {
  return (
    <div>
        <LeaveHeader1 type={"Leave Define"}/>
        <div className='m-3 py-2 flex flex-wrap justify-center'>
            <AddLeaveDefine/>
            <LeaveDefineList/>
        </div>
    </div>
  )
}

export default HRLeaveDefine
