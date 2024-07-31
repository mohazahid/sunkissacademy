import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../img/SunkissLogo.svg"
export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [BurgerOpen, setBurgerOpen] = useState(false);
  const [letScroll, setletScroll] = useState(false);

  interface ListProps {
    name: string;
  }

  function List(props: ListProps) {
    let loc = "/" + props.name;
    let name = props.name;
    if (props.name === "home") {  
      loc = "/";
      name = "Home";
    }
    if (props.name === "about") {
      loc = "/about";
      name = "About Us";
    }
    if (props.name === "contact") {
      loc = "/contact";
      name = "Contact Us";
    }
    if (props.name === "hours") {
      loc = "/hours";
      name = "Hours";
    }
    return (
    <li
            className={` border-gray-400 my-4 font-primary w-full border-b ${
              location.pathname ===  loc
                ? "text-indigo-600"
                : "hover:text-slate-500"
            }`}
          >
            <button onClick={() => handleNav(loc)}>{props.name}</button>
          </li>
    )
  }
  useEffect(() => {
      if (letScroll) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
   
    }, [letScroll]);

  const toggleBurger = () => {
    setBurgerOpen(true);
    setletScroll(true);
  };
  const closeBurger = () => {
    setBurgerOpen(false);
    setletScroll(false);
  }
  const handleNav = (_id: string) => {
    navigate(`${_id}`);
    toggleBurger();
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      style={{ userSelect: "none" }}
      className={`bg-[#9cdee7] font-BubblyBold sticky py-5 flex justify-center items-center top-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
    <div className={BurgerOpen ? 'Opac' : 'hideMenuNav'}/>
    <div className="max-w-[80rem] flex w-full max-auto justify-between">
    <div className="w-full flex items-center justify-between overflow-hidden ">
      <button className={"ml-4 flex"} onClick={() => navigate("/")}>
       <img src= {Logo} alt="" className="w-[8rem]"/>
      </button>
      <section className="lg:hidden flex">
        <div
          className="lg:hidden"
          onClick={() =>  toggleBurger()}
        >
          <button className="navbar-burger flex items-center text-black absolute -right-2 transform -translate-y-1/2 -translate-x-1/2 mr-2">
            <Bars3Icon className="h-8 w-8 text-gray-600 "/>
          </button>
        </div>
        

        <div className={BurgerOpen ? "showMenuNav" : "hideMenuNav"}>
          <div className="bg-white w-[70%] h-full absolute top-0 right-0 flex justify-start items-start p-4 flex-col ">
          
          <div
            className="w-full flex justify-end items-center"
            onClick={() => closeBurger()}
          >
            <XMarkIcon className="h-8 w-8 text-gray-600 " />
           
          </div>
          <ul className="flex flex-col items-center justify-between w-full">
            <List name={"home"}/>
            <List name={"about"}/>
            <List name={"hours"}/>
            <List name={"contact"}/>
          </ul>
        </div>
        </div>
      </section>

      <ul className="hidden lg:flex lg:items-center lg:justify-center">
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${
              location.pathname === "/"
                ? "text-indigo-600"
                : "hover:text-slate-500"
            }`}
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary  px-4 py-1 ${
              location.pathname === "/about"
                ? "text-indigo-600"
                : "hover:text-slate-500"
            }`}
            onClick={() => navigate("/about")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            About us
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1  ${
              location.pathname === "/hours"
                ? "text-indigo-600"
                : "hover:text-slate-500"
            }`}
            onClick={() => navigate("/hours")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Hours
          </button>
        </li>
        <li>
          <button
            className={`flex flex-col items-center font-primary px-4 py-1 ${
              location.pathname === "/contact"
                ? "text-indigo-600"
                : "hover:text-slate-500"
            }`}
            onClick={() => navigate("/contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
            Contact us
          </button>
        </li>
      </ul>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          right: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          animation: slide-in 0.3s ease-in-out;
        }

        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .Opac{
          position: absolute;
          opacity: .33;
          background-color: #000000;
          width: 10000vw;
          height: 10000vh;

          }
      `}</style>
      </div>
      </div>
    </nav>
  );
}
