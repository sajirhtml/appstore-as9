import React, { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, Logout } = use(AuthContext);
  const handleLogOut = () => {
    Logout()
      .then(() => {
        // Logout successful.
        alert("Logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="font-semibold text-2xl">
          AppStore
        </Link>
        {}
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              {user && user.url ? (
                <img src={user.url} alt="User Avatar"/>
                
              ) : (
                <FaUserCircle className="text-3xl" />
              )}
              {/* <FaUserCircle className="text-3xl" /> */}
            </div>
          </div>
        </div>
        {/* <Link to="/auth/login" className="btn btn-primary mx-2 md:mx-5">
          Log in
        </Link> */}
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary mx-2 md:mx-5">
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
