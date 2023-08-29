import React from 'react'

const LeaveHeader = (props) => {
  const {bgColor,textColor,type}=props;
  return (
    <div className={`bg-[${bgColor}] flex justify-between py-2 m-3 rounded-lg`}>
      <div className='py-1 px-2'>
        <p className={` font-poppins text-[${textColor}] font-medium text-2xl`}>{type}</p>
      </div>

      <div className='py-2 px-2'>
        <span className={`font-poppins text-base font-light text-[${textColor}]`}>Dashboard</span>
        <span className={`font-poppins text-base font-light text-[${textColor}] mx-2`}>|</span>
        <span className={`font-poppins text-base font-light text-[${textColor}]`}>Leave</span>
        <span className={`font-poppins text-base font-light text-[${textColor}] mx-2`}>|</span>
        <span className={`font-poppins text-base font-medium text-[${textColor}]`}>{type}</span>
      </div>
    </div>
  )
}

export default LeaveHeader
