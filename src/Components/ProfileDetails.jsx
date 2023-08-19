import React from "react";
import "../CSS/SideBar.css";

const ProfileDetails = () => {
  return (
    <div className="relative h-full">
      <div className='w-full h-[100%] relative text-white' style={{background:'#215D4F'}}>
        <a href="/"><p className="px-4 py-1">View Profile</p></a>
        <a href="/"><p className="px-4 py-1">Settings</p></a>
        <a href="/"><p className="px-4 py-1">Logout</p></a>
      </div>
    </div>
  )
}

export default ProfileDetails;
