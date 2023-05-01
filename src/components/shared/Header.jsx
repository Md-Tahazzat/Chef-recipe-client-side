import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = ({ productsAmount }) => {
  const location = useLocation();
  const { user, logOutUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);

  // logOut handler
  const handleLogOut = () => {
    logOutUser().then((result) => {
      <Navigate to="/login" state={{ from: location }} replace={true} />;
    });
  };
  return (
    <div
      id="header"
      className="w-full mx-0 duration-300 backdrop:blur sticky top-0  z-50 bg-slate-500/95 border-b antialiased"
    >
      <div className="navbar w-full px-2 md:px-5 max-w-[90rem] mx-auto text-white">
        <div className="md:navbar-start w-full flex justify-between">
          <div className="dropdown bg-inherit">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content  mt-3 bg-slate-500/90 rounded-lg p-2 shadow w-60 "
            >
              <li>
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="blogs">
                  Blogs
                </NavLink>
              </li>

              <li>
                {user ? (
                  <button onClick={handleLogOut} className="link">
                    Log out
                  </button>
                ) : (
                  <NavLink className="link" to="login">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>

          <h1 className=" ml-auto mr-auto md:ml-0 md:mr-0 text-3xl font-bold text-orange-500">
            Yummy Yums
          </h1>
        </div>
        <div className="navbar-end hidden w-full md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              {loading ? (
                <p className="animate-spin w-8 h-8 rounded-full border-8 border-dotted border-blue-600"></p>
              ) : user ? (
                <button onClick={handleLogOut} className="link">
                  Log out
                </button>
              ) : (
                <NavLink className="link" to="login">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
