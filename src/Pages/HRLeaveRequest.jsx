import React from 'react'
import LeaveHeader1 from '../Components/teacherSide/LeaveHeader1'
import ApproveLeaveRequests from '../Components/teacherSide/ApproveLeaveRequests'

const HRLeaveRequest = () => {
  return (
    <div>
      <LeaveHeader1 type={"Approve Leave Request"}/>
      <div className='mx-auto py-2 w-3/4'>
        <ApproveLeaveRequests/>
      </div>
    </div>

  )
}

export default HRLeaveRequest
