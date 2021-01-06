import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
 
  const [open, setOpen] = useState(false);
  const toggle = () => {setOpen(!open)}
 
  return (
    <nav  className="bg-purple-700 p-4 ">
      <div className="container mx-auto flex items-center max-w-screen-xl flex-wrap">
        <span className="font-heading font-bold text-3xl tracking-wide text-white">
          StationPro  
        </span>
             
        <button  onClick={toggle}
          className="text-white hover:bg-purple-600 inline-flex p-2 focus:outline-none rounded duration-500
                         transition  block mx-4 md:hidden ml-auto"
        >
          <svg
            className="fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className="top-nav w-full lg:flex-grow flex l lg:inline-flex lg:w-auto"
          id="navbar"
        >
          <div className={open ? "lg:inline-flex lg:flex-row flex-col flex lg:ml-auto" :
                          "lg:inline-flex lg:flex-row flex-col flex  lg:ml-auto hidden" }>
            <a
              className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2  transition duration-500 rounded"
              href=""
            >
              Home
            </a>
            <a
              className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded"
              href=""
            >
              Price
            </a>
            <a
              className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded"
              href=""
            >
              Login
            </a>
            <a
              className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded"
              href=""
            >
              Sign Up
            </a>
            <a
              className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded"
              href=""
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
