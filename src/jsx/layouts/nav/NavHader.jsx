import React, { useState, useContext } from "react";

/// React router dom
import { Link } from "react-router-dom";
//import { ThemeContext } from "../../../context/ThemeContext";
/// images
import logo from "../../../assets/images/onlyLogo.png";
import logoDumax from "../../../assets/images/onlyDumax.png";

export function  NavMenuToggle(){
	setTimeout(()=>{	
		let mainwrapper = document.querySelector("#main-wrapper");
		if(mainwrapper.classList.contains('menu-toggle')){
			mainwrapper.classList.remove("menu-toggle");
		}else{
			mainwrapper.classList.add("menu-toggle");
		}
	},200);
}

const NavHader = () => {
   const [toggle, setToggle] = useState(false);
//   const { openMenuToggle } = useContext(ThemeContext);
   return (
      <div className={`nav-header ${toggle ? 'menu-closed' : ''}`}>
         <Link to="/dashboard" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="logo" />
            <img className="logo-dumax" src={logoDumax} alt="logo" />
         </Link>

         <div className="nav-control" 
			onClick={() => {
				setToggle(!toggle);
				NavMenuToggle();
			}}
		>
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
