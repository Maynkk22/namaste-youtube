import React from "react";
import Hamburger_Menu from "../assets/Hamburger_Menu.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 ">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={Hamburger_Menu}
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="ml-20 w-1/2 p-2 border border-grey-400 rounded-l-full"
          type="text"
        />
        <button className="px-5 py-2 border border-grey-400 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
