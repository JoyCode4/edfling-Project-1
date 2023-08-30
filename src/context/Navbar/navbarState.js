import { useState } from "react";
import NavbarContext from "./navbarContext";

const NavbarState = (props)=>{
    const [login,setLogin] = useState(false);
    const [teacherSide,setTeacherSide] = useState(false);
    const [toggle,setToggle]=useState(false);
    return(
        <NavbarContext.Provider value={{login,setLogin,teacherSide,setTeacherSide,toggle,setToggle}}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarState;