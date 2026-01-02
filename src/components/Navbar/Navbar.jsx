import React, { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { AiFillShopping } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScrolled = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled ? "shadow-md" : " "
      }`}
    >
      <nav className=" max-w-[1300px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Quick<span className="  text-[var(--primary)]">G</span>rocery
        </Link>
        {/* Desktop menu */}
        <ul className=" md:flex items-center gap-x-15 font-semibold tracking-wider hidden">
          <li>
            <Link href="/" className="text-[var(--primary)]">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              Contact Us
            </a>
          </li>
        </ul>
        {/* navbar action */}
        <div className="flex items-center gap-x-5">
          {/* input */}
          <div className="md:flex border-2 border-[var(--primary)] p-1 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="flex text-white bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] w-10 justify-center items-center rounded-full text-xl cursor-pointer">
              <IoMdSearch />
            </button>
          </div>
          <a href="" className="text-[var(--secondary)] text-xl">
            <GoHeart />
          </a>
          <a href="" className="text-[var(--secondary)] text-xl">
            <AiFillShopping />
          </a>
          <button
            className="text-[var(--secondary)] text-xl md:hidden outline-none"
            onClick={toggleMenu}
          >
            {showMenu ? <IoClose /> : <HiMenu />}
          </button>
        </div>
        {/* For mobile device */}

        <ul
          className={` bg-orange-500/12 md:hidden flex-row  text-center  backdrop-blur-xl rounded-2xl font-semibold tracking-wider absolute  space-y-5 p-5   -translate-x-1/2  -left-full transition-all duration-500  top-30 shadow-2xl ${
            showMenu ? "left-1/2" : ""
          }
`}
        >
          <li>
            <Link to="/" className="text-[var(--primary)]">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="text-zink-800 hover:text-[var(--primary)]">
              Contact Us
            </a>
          </li>
          <li className="flex border-1 border-[var(--primary)] p-1 rounded-full ">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search.."
              autoComplete="off"
              className="flex-1 h-[2vh] px-1 focus:outline-none text-sm"
            />
            <button className="flex text-white bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] w-5 justify-center items-center rounded-full text-md cursor-pointer">
              <IoMdSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
