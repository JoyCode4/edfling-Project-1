import React from 'react'
import SideBar from '../Components/SideBar'
import CourseCard from '../Components/CourseCard'
import courseTag from "../images/page56/coursetag.png";
import courseTag1 from "../images/page56/coursetag1.png";
import c from "../images/page56/course.png";
import c1 from "../images/page56/course1.png";
import c2 from "../images/page56/course2.png";
import c3 from "../images/page56/course3.png";
const Page56 = () => {
  return (
    <div>
        <div className='d-none'>
            <SideBar/>
        </div>
        <div className='current-batches'>
            <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2' >Current Batches</h1>
            <CourseCard name={"Python"} src={c} courseTag={courseTag} level="Basic" btn="Go to Course"/>
            <CourseCard name={"Graphic Design"} src={c1} courseTag={courseTag1} level="Standard" btn="Go to Course"/>
        </div>
        <div className='deom-batches'>
            <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2'>Demo Batches</h1>
            <CourseCard name={"Python"} src={c2} courseTag={courseTag1} level="Basic" enroll={true} btn="Go to Course"/>
        </div>
        <div className='completed-batches'>
            <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2'>Completed Batches</h1>
            <CourseCard name={"Python"} src={c3} courseTag={courseTag1} level="Standard" btn="Download Certificate"/>
        </div>
        <div className='notiication'>
            
        </div>
    </div>
  )
}

export default Page56
