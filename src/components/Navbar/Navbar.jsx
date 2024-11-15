import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menublack.svg";
import closeIcon from "../../assets/closebuttonblack.svg";

const NavBar = ({ showMenu, onCloseMenu, onToggleMenu }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      onCloseMenu();
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".nav")) {
        return onCloseMenu();
      }
    };

    if (showMenu) {
      // No action needed when menu is open
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [showMenu]);
  return (
    <nav className="nav bg-wheat p-4 z-80 shadow-lg relative">
      {windowWidth < 768 ? (
        <ul className="flex flex-row items-center justify-between md:flex-row md:justify-around">
          <li>
            <Link
              onClick={onCloseMenu}
              to="/"
              className="cursor-pointer text-aaLogo font-bold text-purple"
            >
              Logo
            </Link>
          </li>
          <li>
            <button className="text-lightGrey" onClick={onToggleMenu}>
              <img
                src={showMenu ? closeIcon : menuIcon}
                alt="Menu Icon"
                className="w-8 h-8"
              />
            </button>
          </li>
        </ul>
      ) : windowWidth >= 768 && windowWidth < 1024 ? (
        // Tablet View
        <ul className="flex items-center justify-around gap-6 p-4">
          <li>
            <Link
              to="/"
              className="cursor-pointer text-aaLogo font-bold text-purple"
            >
              Logo
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/booking")}
              className="cursor-pointer text-navLinks bg-purple text-white px-4 py-2 rounded-lg hover:bg-lightGrey transition-colors"
            >
              Book Now
            </button>
          </li>
        </ul>
      ) : (
        //
        <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-around">
          <li>
            <Link
              to="/"
              className="cursor-pointer text-aaLogo font-bold text-purple"
            >
              Logo
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cursor-pointer text-navLinks text-lightGrey hover:text-purple transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/booking")}
              className="cursor-pointer text-navLinks bg-purple text-white px-4 py-2 rounded-lg hover:bg-lightGrey transition-colors"
            >
              Book Now
            </button>
          </li>
        </ul>
      )}
      {windowWidth < 768 && (
        <ul
          className={`${
            showMenu ? "max-h-screen opacity-100 p-4" : "max-h-0 opacity-0"
          } transition-all shadow-lg duration-300 ease-in-out overflow-hidden flex flex-col items-center gap-4 bg-wheat left-0 right-0 z-50 absolute`}
        >
          <li>
            <Link
              to="/"
              onClick={onCloseMenu}
              className="cursor-pointer text-navLinksMobile text-lightGrey hover:text-purple transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={onCloseMenu}
              className="cursor-pointer text-navLinksMobile text-lightGrey hover:text-purple transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={onCloseMenu}
              className="cursor-pointer text-navLinksMobile text-lightGrey hover:text-purple transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={onCloseMenu}
              className="cursor-pointer text-navLinksMobile text-lightGrey hover:text-purple transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                onCloseMenu();
                navigate("/booking");
              }}
              className="cursor-pointer text-navLinksMobile bg-purple text-white px-4 py-2 rounded-lg hover:bg-lightGrey transition-colors"
            >
              Book Now
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
