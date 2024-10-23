import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store?.nav?.isNavOpen);
  if (!isMenuopen) return null;
  return (
    <div className="w-48 border-gray-300 shadow-lg p-10 h-screen z-[100]">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5 text-lg">You</h1>
      <ul>
        <li>your channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your vdeos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5 text-lg">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
