import React from 'react';


const CourseCard = ({name,src,courseTag,level,enroll,btn}) => {
  return (
    <div className='pl-4 py-4 bg-gradient-to-tr from-[#8ee6d1] to-[#dad0d0] rounded-lg m-3 flex flex-wrap max-h-60 max-w-xl xs:flex-col'>
            <div className='logo-text flex-col flex-grow'>
                <div className='flex'>
                    <div className='mx-1'>
                        <img src={courseTag} alt="coursesTag" />
                    </div>
                    <div className='font-poppins text-xs font-semibold text-[#215D4F]'>
                        <p>Learn {name}</p>
                        <p>Beginner to Advanced</p>
                    </div>
                </div>
                <div className="flex flex-col my-4 mx-2 xs:pl-7">
                    <span className='font-poppins font-light text-xs text-[#215D4F]'><span className='font-semibold'>Started </span>: 03/03/2023</span>
                    <span className='font-poppins font-light text-xs text-[#215D4F]'><span className='font-semibold'>End </span>: 03/06/2023</span>
                </div>
            </div>
            <div className='course-logo flex-initial flex flex-col justify-center items-center mr-2 xs:order-last'>
                <button className='bg-white max-w-fit px-2 rounded-md'>{level}</button>
                <img className='my-4 xs:w-32 xs:h-32' src={src}  alt="" />
            </div>
            <div className='all-course text-center mx-auto'>
                <p className='text-[#215D4F] font-normal text-xs font-poppins mb-3'><span className='font-medium'>Video available till</span> : 03/08/2023 </p>
                <button className='bg-[#215D4F] text-white py-2 rounded-lg p-3 '> {btn} </button>
                <button className={(!enroll)?"text-[#215D4F] border border-black py-2 rounded-lg p-3 ml-2 d-none":"text-[#215D4F] border ml-2 border-black py-2 rounded-lg p-3"}> Enroll Now </button>
            </div>
        </div>
  )
}

export default CourseCard;