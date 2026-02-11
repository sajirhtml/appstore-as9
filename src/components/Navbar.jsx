import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="font-semibold text-2xl">AppStore</Link>
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <div
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="rounded-full">
              <FaUserCircle className="text-3xl" />
            </div>
          </div>
        </div>
          <Link to="/auth/login" className="btn btn-primary mx-2 md:mx-5">Log in</Link>
      </div>
    </div>
  );
};

export default Navbar;
