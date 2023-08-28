import React from 'react'

const LeaveHeader = () => {
  return (
    <div className='bg-[#F6E9E2] flex justify-between py-2 m-3 rounded-lg'>
      <div className='py-1 px-2'>
        <p className=' font-poppins text-[#215D4F] font-medium text-2xl'>Leave type</p>
      </div>

      <div className='py-2 px-2'>
        <span className='font-poppins text-base font-light text-[#215D4F]'>Dashboard</span>
        <span className='font-poppins text-base font-light text-[#215D4F] mx-2'>|</span>
        <span className='font-poppins text-base font-light text-[#215D4F]'>Leave</span>
        <span className='font-poppins text-base font-light text-[#215D4F] mx-2'>|</span>
        <span className='font-poppins text-base font-medium text-[#215D4F]'>Leave type</span>
      </div>
    </div>
  )
}

export default LeaveHeader
