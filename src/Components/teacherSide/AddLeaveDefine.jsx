import React from 'react';
import correct from "../../images/teacherSide/correct.svg";

const AddLeave = () => {
  return (
    <div className='my-8 w-full xs:w-4/5 sm:w-1/4'>
        <p className='text-[#CB8461] font-poppins text-2xl font-medium mb-3'>Add leave Define</p>
        <div className='bg-gradient-to-r from-[#166754] to-[#00FFCA] my-1 rounded-lg p-3'>

        <div className='bg-gradient-to-r from-[#166754] to-[#00FFCA] p-3'>
            <div className='my-2'>
                <label htmlFor="role" className='text-white font-poppins text-base font-light uppercase'>Role</label>
                <span className='text-[#FF0202] font-poppins text-base font-light'>*</span>
            </div>
            <div className='text-center'>
                <div>
                    <select id="role" class="border-white border-1 rounded-2xl py-1 px-3 bg-inherit w-4/6 text-white">
                        <option selected>Select Role
                            <span className='text-black font-poppins text-base font-light'>*</span>
                        </option>
                        <option value="INDIA" className='text-black bg-inherit font-poppins text-base font-light'>United States</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#166754] to-[#00FFCA]  p-3'>
            <div className='my-2'>
                <label htmlFor="leavetype" className='text-white font-poppins text-base font-light uppercase'>LEAVE TYPE</label>
                <span className='text-[#FF0202] font-poppins text-base font-light'>*</span>
            </div>
            <div className='text-center'>
                <div>
                    <select id="leavetype" class="border-white border-1 rounded-2xl py-1 px-3 bg-inherit w-4/6 text-white">
                        <option selected>Leave Type
                            <span className='text-black font-poppins text-base font-light'>*</span>
                        </option>
                        <option value="INDIA" className='text-black bg-inherit font-poppins text-base font-light'>United States</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#166754] to-[#00FFCA]  p-3'>
            <div className='my-2'>
                <label htmlFor="days" className='text-white font-poppins text-base font-light uppercase'>days</label>
                <span className='text-[#FF0202] font-poppins text-base font-light'>*</span>
            </div>
            <div className='text-center'>
                <div>
                    <input id='days' type="text" className='border-white border-1 rounded-2xl py-1 px-3 bg-inherit w-4/6 text-white'/>
                </div>
            </div>
        </div>
                <br />
                <button className='flex justify-center items-center mx-auto bg-[#215D4F] py-2 px-2 my-3 font-poppins text-base font-semibold text-white rounded-xl'>
                    <img src={correct} className='mx-1' alt="sign"/> 
                        SAVE
                </button>
        </div>
    </div>
  )
}

export default AddLeave;