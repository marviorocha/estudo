import Link from "next/link";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  return (
    <nav className="flex items-center bg-purple-700 p-4 flex-wrap">
      <span className="font-heading font-bold text-3xl tracking-wide text-white">StationPro</span>
    
      <button class="text-white hover:bg-purple-600 inline-flex p-2 focus:outline-none rounded duration-500
                         transition  block mx-4 md:hidden ml-auto">
        <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    
      <div className="top-nav w-full lg:flex-grow lg:inline-flex lg:w-auto" id="navbar">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto">
          <a className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded" href="">
            Home
          </a>
          <a className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded" href="">
            Price
          </a>
          <a className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded" href="">
            Login
          </a>
          <a className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded" href="">
            Sign Up
          </a>
          <a className="lg:w-auto lg:inline-flex text-white hover:bg-purple-400 px-3 py-2 transition duration-500 rounded" href="">
            Sign In
          </a>
        </div>
      </div>
    </nav>
    
    // <header className="h-auto bg-gradient-to-br from-purple-800
        //      to-purple-500 bg-cover bg-center w-full text-white">
    
      // <nav className="flex justify-between items-center mx-1 md:mx-20 md:pt-4">
    
        // <div className="font-semibold invisible md:visible uppercase">
          // <a className="mx-2 hover:bg-purple-600 py-2 px-3 transition duration-500 rounded-sm" href="">Home</a>
          // <a className="mx-2 hover:bg-purple-600 py-2 px-3 transition duration-500 rounded-sm" href="">Price</a>
          // <a className="mx-2 hover:bg-purple-600 py-2 px-3 transition duration-500 rounded-sm" href="">Login</a>
          // <a className="mx-2 hover:bg-purple-600 py-2 px-3 transition duration-500 rounded-sm" href="">Sign Up</a>
          // <a className="mx-2 bg-purple-600 py-2 px-3 transition duration-500 rounded-sm" href="">Sign In</a>
          // </div>
    
        // </nav>
      // <div className="mt-32 text-center mb-20">
        // <h1 className="text-4xl mb-8">Chamada para acation Lorem, ipsum. Lorem, ipsum dolor.</h1>
    
        // <button className="bg-blue-600 focus:outline-none  px-8 py-3 mr-4 border-b-4 border-blue-800 rounded-lg hover:bg-blue-700 transition duration-400 outline-none
        //   my-8 uppercase ">Get Action</button>
    
        // <button className="bg-blue-600 focus:outline-none  px-8 py-3 border-b-4 border-blue-800 rounded-lg hover:bg-blue-700 transition duration-400 outline-none
        //   my-8 uppercase ">Buy now</button>
    
        // </div>
      // </header>
  );
}
