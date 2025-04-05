import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import agriLogo from "../assets/agribuddy.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const deskTopMenu = (
    <>
      <li>
        <Link to="/" className="hover:text-gray-300 font-semibold">
          Home
        </Link>
      </li>
    </>
  );
  const mobildeMenu = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-gray-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/signin"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="bg-green-800 px-4 py-2 rounded-md hover:bg-green-400 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <nav className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between md:justify-between">
          {/* Mobile Logo Centered */}
          <div className="md:hidden flex-1 text-center text-2xl font-bold">
            <img className="w-40" src={agriLogo} alt="agribuddy" />
          </div>

          {/* Logo Area - Desktop */}
          <Link to="/">
            <div className="hidden md:block">
              <img className="w-40" src={agriLogo} alt="agribuddy" />
            </div>
          </Link>

          {/* Menu Area - Desktop */}
          <ul className="hidden md:flex space-x-6">{deskTopMenu}</ul>

          {/* Right Side - Login/Register */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signin"
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-green-700 py-4">
            {mobildeMenu}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
