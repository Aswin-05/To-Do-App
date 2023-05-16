import React from "react";
import { FaClipboardList } from "react-icons/fa";

function Header(){

    const year = new Date().getFullYear();

    return(
        <div className="header">
        <div className="logo">
        <FaClipboardList color="hsla(260, 2%, 25%, 0.7)" size="22px"/>
        <a href="#">To-Do App</a>
        </div>
        </div>
    ) 
};

export default Header;
