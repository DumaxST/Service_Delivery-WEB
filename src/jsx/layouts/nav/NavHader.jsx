import React, { useState, useContext } from "react";

/// React router dom
import { Link } from "react-router-dom";
//import { ThemeContext } from "../../../context/ThemeContext";
/// images
import logo from "../../../assets/images/logo.png";
import logoText from "../../../assets/images/logo-text.png";

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
      <div className="nav-header">
         <Link to="/dashboard" className="brand-logo">
            <img className="logo-abbr" src={logo} alt="" />
            {/*<img className="logo-compact" src={logoText} alt="" />
            <img className="brand-title" src={logoText} alt="" /> */}          

            <svg width="53" height="42" className="brand-title" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M1 7.5C1 14.833 1.056 15 3.5 15C5.4 15 6 14.478 6 12.826V10.651L8.314 12.826C9.717 14.143 11.918 15 13.898 15H17.168L13.998 10.997L10.827 6.994L13.569 3.747L16.311 0.5L13.119 0.184C10.757 -0.05 9.426 0.47 7.997 2.184L6.067 4.5L6.033 2.25C6.008 0.526 5.416 0 3.5 0C1.056 0 1 0.167 1 7.5ZM20.197 6.821C17.482 15.25 17.473 15 20.5 15C21.875 15 23 14.55 23 14C23 13.45 24.35 13 26 13C27.65 13 29 13.45 29 14C29 14.55 30.319 15 31.931 15H34.863L32.341 7.5L29.819 0H26.106C22.4 0 22.39 0.0120001 20.197 6.821ZM37 7.5V15H40C42.533 15 43 14.611 43 12.5C43 9.295 44.358 9.295 45.818 12.5C46.671 14.373 47.724 15 50.014 15C52.795 15 52.971 14.814 51.962 12.929C51.181 11.47 51.158 9.984 51.885 7.901C53.854 2.252 51.198 0 42.566 0H37V7.5ZM46.5 5C46.84 5.55 46.191 6 45.059 6C43.927 6 43 5.55 43 5C43 4.45 43.648 4 44.441 4C45.234 4 46.16 4.45 46.5 5ZM26.588 8.745C25.496 9.837 24.747 8.1 25.531 6.293C26.275 4.58 26.329 4.581 26.743 6.328C26.982 7.334 26.912 8.421 26.588 8.745ZM5 26.709C1.632 27.948 0 30.378 0 34.155C0 39.324 2.729 42 8 42C11.883 42 16 39.427 16 37C16 35.639 10.671 35.729 9.287 37.113C7.6 38.8 6 37.239 6 33.907V30.931L11 31.594C15.825 32.234 16.792 31.733 15.235 29.4C13.419 26.68 8.556 25.402 5 26.709ZM19 28.456C19 30.333 19.524 31 21 31C22.556 31 23 31.667 23 34C23 36.333 22.556 37 21 37C19.524 37 19 37.667 19 39.544C19 42.062 19.073 42.085 26.25 41.794C32.735 41.531 33.5 41.289 33.5 39.5C33.5 38.187 32.727 37.39 31.25 37.18C29.515 36.934 29 36.206 29 34C29 31.794 29.515 31.066 31.25 30.82C32.727 30.61 33.5 29.813 33.5 28.5C33.5 26.711 32.735 26.469 26.25 26.206C19.073 25.915 19 25.938 19 28.456ZM37.708 26.626C37.318 27.015 37 28.158 37 29.167C37 30.562 37.764 31 40.196 31H43.392L40.196 34.298C38.438 36.111 37 38.586 37 39.798C37 41.872 37.437 42 44.5 42C51.833 42 52 41.944 52 39.5C52 37.3 51.571 37 48.429 37H44.858L48.512 33.553C53.966 28.41 53.073 26.571 44.947 26.209C41.355 26.049 38.097 26.237 37.708 26.626Z" fill="black"/>
				</svg>
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
