import React from 'react'
import LeaveHeader from '../Components/teacherSide/LeaveHeader';
import LeaveTypeList from '../Components/teacherSide/LeaveTypeList';
import AddLeave from '../Components/teacherSide/AddLeave';
const HRLeaveType = () => {
  return (
    <div className='w-full '>
      <LeaveHeader textColor={"#215D4F"} bgColor={"#F6E9E2"} type={"Leave type"}/>
        <div className='m-3 py-2 flex flex-wrap justify-center w-full'>
            <AddLeave/>
            <LeaveTypeList/>
        </div>
    </div>
  )
}

export default HRLeaveType;
