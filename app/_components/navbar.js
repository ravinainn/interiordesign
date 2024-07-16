"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:absolute top-10 bg-white bg-opacity-30 w-screen z-50 py-4 ">
      <div className=" flex justify-between flex-wrap items-center w-11/12 mx-auto ">
        <div className="md:text-white text-black text-3xl font-bold leading-6 text-center ">
          ICRAVE
          <br />
          <span className="text-xl font-thin ">CREATIONS</span>
        </div>
        <button className="md:hidden focus:outline-none" onClick={toggleNav}>
          {isOpen ? <RxCross2 className="z-50" /> : <IoMenu className="z-50" />}
        </button>
        <div
          className={
            isOpen
              ? "md:flex-row flex-col w-full md:w-fit items-center flex gap-3 text-lg font-semibold "
              : "hidden md:flex gap-3 text-lg font-semibold "
          }
        >
          <Link className="" href={"/"}>
            Home
          </Link>
          <Link href={"#category"}>Categories</Link>
          <Link href={"#contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
