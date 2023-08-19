import React from "react";
import Ellipse from "../images/page57-61/Ellipse217.svg";
import ContactCard from "../images/page57-61/ContactCard.svg";
import LeaderBoard from "../images/page57-61/LeaderBoard.svg";
import Pause from "../images/page57-61/Pause.svg";
import Placed from "../images/page57-61/Placed.svg";
import Doubts from "../images/page57-61/Doubts.svg";
import Events from "../images/page57-61/Events.svg";
import Notes from "../images/page57-61/Notes.svg";
import Certificate from "../images/page57-61/Certificate.svg";
import "../CSS/SideBar.css";

const SideBar = () => {
  return (
    <>
      <aside className='w-full h-full relative' style={{background:'#215D4F'}}>
        <div className='flex pt-4'>
        <img src={Ellipse} className='relative left-4 h-14 w-14 opacity-60' alt='ellipse'/>
        <img src={Ellipse} className=' relative -left-2 w-14 h-14 opacity-60' alt='ellipse'/>
        <h1 className='relative -left-20 top-3 font-medium text-2xl decoration-white' >My Classroom</h1>
        </div>
        <ul className="pl-10 py-4">
          <li className="flex mx-2 my-4">
            <img src={ContactCard} alt="LeaderBoard" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Courses
            </h3>
          </li>
          <li className="flex mx-2 my-4">
            <img src={LeaderBoard} alt="LeaderBoard" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Leaderboard
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Pause} alt="pause" />
            <img src={Pause} alt="pause" className="m-1" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Course Pause
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Doubts} alt="Doubts" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Ask Doubts
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Events} alt="Events" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Events
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Notes} alt="Notes" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Notes
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Certificate} alt="Certificate" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Certificate
            </h3>
          </li>
          <li className="flex mx-2 my-6">
            <img src={Placed} alt="Placed" />
            <h3 className="font-sans font-normal text-xl ml-2 decoration-white">
              Placed Edflinger
            </h3>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideBar
