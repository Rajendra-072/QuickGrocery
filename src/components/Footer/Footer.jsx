import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className=" max-w-[1300px] mx-auto px-10 flex flex-wrap gap-10 ">
        <div className="md:pl-20 md:pr-50 md:basis-[350px] flex-1">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            Quick<span className="  text-[var(--primary)]">G</span>rocery
          </a>
          <p className="text-zinc-600 mt-5 max-w-[350px]">
            Bread for a high contant beneficials substances our product are all
            freash and healthy
          </p>
          <p className="text-zinc-800 mt-5">2025 @ All Rights Reserved</p>
        </div>
        <ul className="flex-1">
          <li className="text-zinc-800 text-xl font-bold">Company</li>
          <li className="mt-5 text-zink-600 hover:text-[var(--primary)]">
            <a href="">About</a>
          </li>
          <li className="mt-5 text-zink-600 hover:text-[var(--primary)]">
            <a href="">FAQ'S</a>
          </li>
        </ul>
        <ul className="flex-1">
          <li className="text-zinc-800 text-xl font-bold">Support</li>
          <li className="mt-5 text-zink-600 hover:text-[var(--primary)]">
            <a href="">Support Center</a>
          </li>
          <li className="mt-5 text-zink-600 hover:text-[var(--primary)]">
            <a href="">Feedback</a>
          </li>
          <li className="mt-5 text-zink-600 hover:text-[var(--primary)]">
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className="flex-1 ">
          <h3 className=" text-zinc-800 text-xl font-bold">Stay Connected</h3>
          <p className="mt-5 text-zinc-600">
            Question & Feedback?
            <br /> we'd love to here from you.
          </p>
          {/* Input */}
          <div className="mt-5 bg-white w-fit flex p-2 rounded-lg pl-2">
            <input
              type="email"
              placeholder="Email Address.."
              id="email"
              name="email"
              className=" focus:outline-none"
            />
            <button className="bg-[var(--primary)] rounded-lg p-1 text-white text-xl cursor-pointer ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
