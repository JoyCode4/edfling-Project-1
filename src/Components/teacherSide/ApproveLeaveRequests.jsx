import React from 'react'
import whiteArrow from "../../images/teacherSide/whiteArrow.svg";
import arrowl from "../../images/teacherSide/Arrow1.svg";
import arrowr from "../../images/teacherSide/Arrow2.svg";
import search from "../../images/teacherSide/search.svg";

const ApproveLeaveRequests = () => {
  return (
    <div>
      <div className='-mx-5 w-full'>
                <div className='my-3 flex flex-wrap justify-between items-center'>
                    <p className='text-[#CB8461] font-poppins text-2xl font-medium mr-3'>Approve Leave Request</p>
                    <div className='border-b-2 flex w-32 my-3 mx-2'>
                        <img src={search} alt="" />
                        <input type="text" className='mx-1 text-[#215D4F] font-poppins font-light text-base flex-grow' placeholder='Search'/>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='bg-gradient-to-r from-[#166754] to-[#00FFCA] my-1 rounded-lg p-3 overflow-hidden'>
                    <ul className='leave list flex justify-around flex-wrap'>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>SI</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>NAME</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>TYPE</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                              
                            
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>FROM</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>TO</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>APPLY DATE</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>STATUS</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                        <li className='list-none flex justify-between mb-2 items-center'>
                            <ul>
                                <li className='my-2'>
                                    <div className='flex'>
                                        <img src={whiteArrow} alt="img"/>
                                        <span className='font-poppins text-base font-medium text-white mx-2'>ACTION</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                <li className='my-2'>
                                    <div className='text-center'>
                                        <span className='font-poppins text-sm font-light text-white mr-2'>No Data Available</span>
                                    </div>
                                </li>
                                <div className='h-[2px] min-w-full -mx-40 bg-black'></div>
                                
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className='my-2'>
                    <p className='text-base font-light font-poppins text-[#215D4F]'>Showing 0 to 0 of 0 entries
</p>
                </div>

                <div className='my-5 max-w-full mx-auto'>
                    <div className='flex justify-center'>
                        <div className='bg-black w-6 h-6 p-1 text-center mr-2'>
                            <img src={arrowl} alt="img" />
                        </div>
                        
                        <div className='bg-black w-6 h-6 p-1 text-center ml-2'>
                            <img src={arrowr} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ApproveLeaveRequests
