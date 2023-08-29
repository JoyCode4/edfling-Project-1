import React from 'react'

const LeaveHeader1 = (props) => {
  const {type}=props;
  return (
    <div className={`bg-gradient-to-r from-[#166754] to-[#00FFCA] flex justify-between py-2 m-3 rounded-lg`}>
      <div className='py-1 px-2'>
        <p className={` font-poppins text-white font-medium text-2xl`}>{type}</p>
      </div>

      <div className='py-2 px-2'>
        <span className={`font-poppins text-base font-light text-white`}>Dashboard</span>
        <span className={`font-poppins text-base font-light text-white mx-2`}>|</span>
        <span className={`font-poppins text-base font-light text-white`}>Leave</span>
        <span className={`font-poppins text-base font-light text-white mx-2`}>|</span>
        <span className={`font-poppins text-base font-medium text-white`}>{type}</span>
      </div>
    </div>
  )
}

export default LeaveHeader1;