"use client";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLayout } from "./NavLayout";
import Logo from "../../public/Logo.png";
import Image from "next/image";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/projects",
    title: "Projects",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={` ${navbarOpen ? "mb-44 md:mb-0" : ""}`}>
      <div className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100 border border-b-[#33353F] border-l-transparent border-r-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={50}
              style={{ height: "50px" }}
              className="object-fill"
            />
          </Link>
          <div className="mobile-menu block md:hidden">
            {navbarOpen ? (
              <button
                className="flex items-center border rounded border-slate-200 px-3 py-2 text-slate-200 hover:text-white hover:border-white"
                onClick={() => setNavbarOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                className="flex items-center border rounded border-slate-200 px-3 py-2 text-slate-200 hover:text-white hover:border-white"
                onClick={() => setNavbarOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex flex-col md:flex-row p-4 md:p-0 md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    title={link.title}
                    href={link.path}
                    setNavbarOpen={setNavbarOpen}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen && (
          <NavLayout links={navLinks} setNavbarOpen={setNavbarOpen} />
        )}
      </div>
    </nav>
  );
};
