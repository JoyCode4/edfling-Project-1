import React from 'react';
import correct from "../../images/teacherSide/correct.svg";

const AddLeave = () => {
  return (
    <div className='my-8 w-full xs:w-4/5 sm:w-1/4'>
        <p className='text-[#215D4F] font-poppins text-2xl font-medium mb-3'>Add leave Type</p>
        <div className='bg-[#F6E9E2] my-1 rounded-lg p-3'>
            <div className='my-2'>
                <label htmlFor="" className='text-[#215D4F] font-poppins text-base font-light'>Type name</label>
                <span className='text-[#FF0202] font-poppins text-base font-light'>*</span>
            </div>
            <div className='text-center'>
                <input type="text" className='border-[#215D4F] border-1 rounded-2xl py-1 px-3 bg-[#F6E9E2] w-4/6'/>
                <br />
                <button className='flex justify-center items-center mx-auto bg-[#215D4F] py-2 px-2 my-3 font-poppins text-base font-semibold text-white rounded-xl'>
                    <img src={correct} className='mx-1' alt="sign"/> 
                        SAVE TYPE
                    </button>
            </div>
        </div>
    </div>
  )
}

export default AddLeave;