import React from "react";
import logo from "../../images/teacherSide/logo.svg"; 
import dashboard from "../../images/teacherSide/dashboard.svg";
import student from "../../images/teacherSide/student.svg";
import download from "../../images/teacherSide/download.svg";
import lesson from "../../images/teacherSide/lesson.svg";
import hw from "../../images/teacherSide/homework.svg";
import lib from "../../images/teacherSide/library.svg";
import chat from "../../images/teacherSide/chat.svg";
import NavbarContext from "../../context/Navbar/navbarContext";
import { useContext } from "react";

const Sidebar = () => {
  const {toggle}=useContext(NavbarContext);
  return (
    <div className="absolute top-16 md:top-0">
      <aside
        id="default-sidebar"
        className={`absolute z-40 top-0 left-0 h-screen w-64 transition-transform ${
          !toggle ? "translate-x-0 " : "-translate-x-full  "
        } duration-300 ease-in-out`}
        aria-label="Sidebar"
      >
        <div class="h-full flex flex-col justify-between overflow-y-auto no-scrollbar bg-teal-900 text-sm font-poppins">
          <div>
          <div className="w-32 h-20 relative px-3 py-4 mb-4">
            <img src={logo} alt="img"/>
            <div className="top-10 px-2">
              <p className="self-center  text-xl font-semibold whitespace-nowrap text-white my-3">
              Edfling Courses
              </p>
            </div>
          </div>
          <ul className="space-y-1 text-base px-3 py-4 mt-5" >
            <li>
              <a href="#" class="flex items-center p-2 text-[#CB8461] ">
                <span class="">Dashboard</span>
              </a>
              <ul>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={dashboard} alt="img" />
                    <span class="ml-3">Dashboard</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-3">
              <a href="#" class="flex items-center p-2 text-[#CB8461] ">
                <span class="">ADMINISTRATION</span>
              </a>
              <ul>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={download} alt="img" />
                    <span class="ml-3">Study Material</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={lesson} alt="img" />
                    <span class="ml-3">Lesson Plan</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-3">
              <a href="#" class="flex items-center p-2 text-[#CB8461] ">
                <span class="">STUDENT</span>
              </a>
              <ul>
                <li>
                  <a href="#" class="relative flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={student} alt="img" />
                    <img src={student} className="absolute left-4 -top-[0.05px]" alt="img" />
                    <span class="ml-3">Student Info</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={hw} alt="img" />
                    <span class="ml-3">HomeWork</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={lib} alt="img" />
                    <span class="ml-3">Library</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-3 relative">
              <a href="#" class="flex items-center p-2 text-[#CB8461] ">
                <span class="">HR</span>
              </a>
              <div className="flex pl-12 justify-start bg-[#2C9D82] -mx-4 py-2 overflow-hidden">
                <p className="font-poppins text-white text-lg font-bold">Leave</p>
              </div>
              <div className="ml-5 h-48 w-[1px]  bg-[#2C9D82] absolute"></div>
              <div className="top-[103px] ml-5 h-[1px] w-5 bg-[#2C9D82] absolute"></div>
              <div className="top-[97px] left-9 h-3 w-3 bg-[#2C9D82] absolute rounded-full"></div>
              <ul>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-8">
                    <span class="ml-3">Leave Type</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-8">
                    <span class="ml-3">Leave Define</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-8">
                    <span class="ml-3">Approve Leave Request</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-8">
                    <span class="ml-3">Pending Leave Request</span>
                  </a>
                </li>
              </ul>
              <li className="my-3">
              <a href="#" class="flex items-center p-2 text-[#CB8461] ">
                <span class="">UTILITIES</span>
              </a>
              <ul>
                <li>
                  <a href="#" class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 ml-5">
                    <img src={chat} alt="img" />
                    <span class="ml-3">Chat</span>
                  </a>
                </li>
              </ul>
            </li>
            </li>
          </ul>
          </div>
         
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;