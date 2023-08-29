import React from 'react'
import image5 from "../../images/teacherSide/image 5.svg";
import image6 from "../../images/teacherSide/image 6.svg";
import image8 from "../../images/teacherSide/image 8.svg";
import image9 from "../../images/teacherSide/image 9.svg";
import print from "../../images/teacherSide/Print.svg";
import subtract from "../../images/teacherSide/Subtract.svg";
import arrow from "../../images/teacherSide/Arrow.svg";
import arrowl from "../../images/teacherSide/Arrow1.svg";
import arrowr from "../../images/teacherSide/Arrow2.svg";

import search from "../../images/teacherSide/search.svg";

const LeaveTypeList = () => {
  return (
    <div>
      <div className='mx-3'>
                <div className='my-3 flex flex-wrap justify-around items-center'>
                    <p className='text-[#215D4F] font-poppins text-2xl font-medium mr-3 justify-self-start' >Leave Type List</p>
                    <div className='border-b-2 flex w-32 my-3 mx-2'>
                        <img src={search} alt="" />
                        <input type="text" className='mx-1 text-[#215D4F] font-poppins font-light text-base' placeholder='Search'/>
                    </div>
                    <div className='border-1 border-[#215D4F] rounded-3xl flex justify-between items-center w-56 px-3 my-3 ml-2'>
                        <img src={image5} alt="img" />
                        <div className='h-8 bg-[#215D4F] w-[1px]'></div>
                        <img src={image6} alt="img" />
                        <div className='h-8 bg-[#215D4F] w-[1px]'></div>
                        <img src={image8} alt="img" />
                        <div className='h-8 bg-[#215D4F] w-[1px]'></div>
                        <img src={image9} alt="img" />
                        <div className='h-8 bg-[#215D4F] w-[1px]'></div>
                        <img src={print} alt="img" />
                        <div className='h-8 bg-[#215D4F] w-[1px]'></div>
                        <img src={subtract} alt="img" />
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#F5E6DF] to-white my-1 rounded-lg p-3'>
                    <ul className='leave list'>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <div className='flex'>
                                <img src={arrow} alt="img"/>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>TYPE</span>
                            </div>
                            <div className='flex'>
                                <img src={arrow} alt="img"/>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>ACTION</span>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Annual/Vacation Leave</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Casual Leave</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>dsasa</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Earned Leave</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Public holidays</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Sick Leave</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                        <li className='relative list-none flex justify-between mb-2 items-center my-2'>
                            <div className='flex'>
                                <span className='font-poppins text-sm font-light text-[#215D4F] mx-2'>Yyy</span>
                            </div>
                            <div className='flex'>
                                <span className='font-poppins text-base font-medium text-[#215D4F] mx-2'>SELECT</span>
                                <img src={arrow} alt="img"/>
                            </div>
                        </li>
                        <hr />
                    </ul>
                </div>

                <div className='my-2'>
                    <p className='text-base font-light font-poppins text-[#215D4F]'>Showing 1 to 7 of 7 entries</p>
                </div>

                <div className='my-5 w-24 mx-auto'>
                    <div className='flex justify-between'>
                        <div className='bg-black w-6 h-6 p-1 text-center'>
                            <img src={arrowl} alt="img" />
                        </div>
                        <div className='bg-gradient-to-r from-[#166754] #215D4F, to-[#00FFCA] w-6 h-6 text-center'>
                            1
                        </div>
                        <div className='bg-black w-6 h-6 p-1 text-center '>
                            <img src={arrowr} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LeaveTypeList;