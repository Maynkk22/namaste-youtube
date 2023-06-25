import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 h-100 min-h-screen shadow-lg w-36">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className="py-3">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
    </div>
  );
};

export default Navigation;
