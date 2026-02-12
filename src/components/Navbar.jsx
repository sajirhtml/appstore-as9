import React, { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, Logout } = use(AuthContext);
  const handleLogOut = () => {
    Logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Failed to logout");
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/?size=100&id=77121&format=png&color=000000"
            alt=""
            className="w-8"
          />
          <Link to="/" className="font-semibold text-2xl">
            AppStore
          </Link>
        </div>
      </div>
      <div className="flex-1 hidden sm:block">
        <Link to="/" className="mr-3 text-lg">Apps</Link>
        <NavLink
          to="/myprofile"
          className={({ isActive }) =>
            `text-lg ${isActive ? "underline underline-offset-4" : ""}`
          }
        >
          {user? `${user.displayName}`: "MyProfile"}
          
        </NavLink>
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
            <div className="rounded-full">
              {user && user.photoURL ? (
                <Link to="/myprofile">
                <img src={user.photoURL} alt="User Avatar" />
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary mx-2 md:mx-5"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary mx-2 md:mx-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
