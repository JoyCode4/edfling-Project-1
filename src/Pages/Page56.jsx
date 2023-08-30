import React, { useContext } from 'react'
import SideBar from '../Components/SideBar'
import CourseCard from '../Components/CourseCard'
import courseTag from "../images/page56/coursetag.png";
import courseTag1 from "../images/page56/coursetag1.png";
import c from "../images/page56/course.png";
import c1 from "../images/page56/course1.png";
import c2 from "../images/page56/course2.png";
import c3 from "../images/page56/course3.png";
import Notification from '../Components/Notification';
import NavbarContext from '../context/Navbar/navbarContext';
import ProfileDetails from '../Components/ProfileDetails';
const Page56 = () => {
    const {setLogin,setTeacherSide}=useContext(NavbarContext);
    setLogin(true);
    
  return (
    <div className='relative sm:flex sm:w-screen sm:justify-center sm:mx-auto'>
        <div id="sidebarL" className='absolute -top-4 left-0 hidden sm:block sm:relative'>
            <SideBar/>
        </div>
        <div className='batches sm:w-[600px]'>
            <div className='current-batches'>
                <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2' >Current Batches</h1>
                <CourseCard name={"Python"} src={c} courseTag={courseTag} level="Basic" btn="Go to Course"/>
                <CourseCard name={"Graphic Design"} src={c1} courseTag={courseTag1} level="Standard" btn="Go to Course"/>
            </div>
            <div className='demo-batches'>
                <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2'>Demo Batches</h1>
                <CourseCard name={"Python"} src={c2} courseTag={courseTag1} level="Basic" enroll={true} btn="Go to Course"/>
            </div>
            <div className='completed-batches'>
                <h1 className='text-[#CB8461] font-poppins text-sm font-semibold mx-3 pl-1 mt-2'>Completed Batches</h1>
                <CourseCard name={"Python"} src={c3} courseTag={courseTag1} level="Standard" btn="Download Certificate"/>
            </div>
        </div>
        <div id='notification' className='absolute -top-2 -right-1 notification hidden md:block md:relative md:w-[450px]'>
            <Notification/>
        </div>
        <div id='profileDetails' className='absolute right-0 -top-2 hidden sm:top-0'>
            <ProfileDetails/>
        </div>
    </div>
  )
}

export default Page56
