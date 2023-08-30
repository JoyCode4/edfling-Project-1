import React from "react";
import { Menu } from "lucide-react";
import profile from "../../images/page57-61/Ellipse 215.png";
import arrowDown from "../../images/teacherSide/ArrowDown.svg";
import search from "../../images/teacherSide/search.svg";

const Nav = () => {
  const toggleSidebar = () => {
  };

  const toggleNotification = ()=>{}
  const toggleProfile = ()=>{}

  return (
    <div className={`flex flex-wrap justify-between items-center font-poppins mt-3 items-center px-4`}>
      <div className="flex gap-3 items-center">
        <div>
          <button className="" onClick={toggleSidebar}>{<Menu />}</button>
        </div>
        <div className="hidden md:inline-flex flex gap-3 bg-inherit w-fit px-4 py-1 rounded-2xl shadow-md shadow-black/50">
          <img src={search} alt="img" />
          <input type="text" name="" id="" placeholder="Search" className="bg-transparent text-white outline-none" />
        </div>
      </div>
      <div className="bg-[#215D4F] px-4 py-2 text-white rounded-lg">
        <a href="#">WEBSITE</a>
      </div>
      <div className="right flex justify-end gap-7 items-center flex-wrap">
        <div className="flex hidden md:inline-flex">
          <span className="mx-1"> 2023[2023-24] </span>
          <img src={arrowDown} alt="img" />
          <span className="mx-1">English</span>
          <img src={arrowDown} alt="img" />
        </div>
            <div className="relative" onClick={toggleNotification}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                className="notification-circle"

              >
                <circle cx="6" cy="6.98535" r="6" fill="#215D4F" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="27"
                viewBox="0 0 22 27"
                fill="none"
              >
                <path
                  d="M10.6151 26.567C9.8853 26.567 9.26034 26.307 8.7402 25.7868C8.22006 25.2667 7.96043 24.6422 7.96132 23.9133H13.2689C13.2689 24.643 13.0088 25.268 12.4887 25.7881C11.9685 26.3083 11.344 26.5679 10.6151 26.567ZM0 22.5864V19.9326H2.65377V10.6444C2.65377 8.76464 3.2177 7.12239 4.34555 5.71766C5.47341 4.31293 6.89981 3.38986 8.62476 2.94845V2.01963C8.62476 1.46676 8.81849 0.9966 9.20594 0.609149C9.59339 0.221698 10.0631 0.0284153 10.6151 0.0292999C11.168 0.0292999 11.6381 0.223025 12.0256 0.610476C12.413 0.997927 12.6063 1.46764 12.6054 2.01963V2.94845C13.0256 3.03691 13.4294 3.16429 13.8169 3.33059C14.2043 3.4969 14.5524 3.69018 14.8611 3.91044C14.2198 4.68446 13.739 5.52482 13.4188 6.43153C13.0986 7.33823 12.938 8.30023 12.9371 9.31751C12.9371 11.1973 13.4515 12.8506 14.4803 14.2774C15.5091 15.7043 16.8745 16.749 18.5764 17.4115V19.9326H21.2302V22.5864H0Z"
                  fill="#215D4F"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="hidden sm:block"
            >
              <path
                d="M21.9578 0.0994263H2.43976C1.09789 0.0994263 0.0121988 1.19732 0.0121988 2.53919L0 24.497L4.87952 19.6175H21.9578C23.2997 19.6175 24.3976 18.5196 24.3976 17.1777V2.53919C24.3976 1.19732 23.2997 0.0994263 21.9578 0.0994263ZM19.5181 14.738H4.87952V12.2982H19.5181V14.738ZM19.5181 11.0783H4.87952V8.63858H19.5181V11.0783ZM19.5181 7.4187H4.87952V4.97894H19.5181V7.4187Z"
                fill="#215D4F"
              />
            </svg>
            <img onClick={toggleProfile} alt={""} src={profile}/>
          </div>
    </div>
  );
};


export default Nav;
