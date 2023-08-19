import { useState } from "react";
import NavbarContext from "./navbarContext";

const NavbarState = (props)=>{
    const [login,setLogin] = useState(true);
    return(
        <NavbarContext.Provider value={{login,setLogin}}>
            {props.children}
        </NavbarContext.Provider>
    )
}

export default NavbarState;