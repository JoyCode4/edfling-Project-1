import React from 'react';


const CourseCard = ({name,src,courseTag,level,enroll,btn}) => {
  return (
    <div className='p-4 bg-gradient-to-tr from-[#8ee6d1] to-[#dad0d0] rounded-lg m-3 flex flex-wrap'>
            <div className='logo-text flex-col'>
                <div className='flex'>
                    <div className='mx-1'>
                        <img src={courseTag} alt="coursesTag" />
                    </div>
                    <div className='font-poppins text-xs font-semibold text-[#215D4F]'>
                        <p>Learn {name}</p>
                        <p>Beginner to Advanced</p>
                    </div>
                </div>
                <div className="flex flex-col my-4 mx-2">
                    <span className='font-poppins font-light text-xs text-[#215D4F]'><span className='font-semibold'>Started </span>: 03/03/2023</span>
                    <span className='font-poppins font-light text-xs text-[#215D4F]'><span className='font-semibold'>End </span>: 03/06/2023</span>
                </div>
            </div>
            <div className='course-logo flex flex-col ml-10'>
                <button className='bg-white px-3 rounded-md'>{level}</button>
                <img className='my-4' src={src} alt="" />
            </div>
            <div className='all-course mx-auto text-center'>
                <p className='text-[#215D4F] font-normal text-xs font-poppins my-2'><span className='font-medium'>Video available till</span> : 03/08/2023 </p>
                <button className='bg-[#215D4F] text-white py-2 rounded-lg p-3 mx-2'> {btn} </button>
                <button className={(!enroll)?"text-[#215D4F] border border-black py-2 rounded-lg p-3 d-none":"text-[#215D4F] border border-black py-2 rounded-lg p-3"}> Enroll Now </button>
            </div>
        </div>
  )
}

export default CourseCard;