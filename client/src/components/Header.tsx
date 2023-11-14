"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>(
      '[data-collapse-toggle="navbar-sticky"]'
    );
    const menu = document.getElementById("navbar-sticky");

    if (button && menu) {
      button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  }, []);

  return (
    <nav className="overflow sticky top-0 left-0 w-full bg-white shadow-lg bg-white-900  p-4 lg:p-6 transition-all duration-300 ease-in-out text-blue">
      <div className="mb-0 container mx-auto bg-white items-center h-10">
        <div className="container mx-auto flex justify-between bg-white items-center h-10">
          <Link href="/" legacyBehavior className="py-3">
            <a>
              <Image src="/synnc.png" alt="Logo" width={150} height={150} />
            </a>
          </Link>
          <div className="flex md:order-2">
            {/* <div className="hidden lg:flex items-center space-x-4"></div> */}
            <a href="/demo">
              <button
                type="button"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2 sm:py-4 px-8 mt-[5px] sm:mt-0 text-center mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Request Demo
              </button>
            </a>
            <a href="/login">
              <button
                type="button"
                className=" ml-5 mr-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2 sm:py-4 mt-[5px] sm:mt-0 px-8 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-25 md:flex md:w-auto md:order-1 ${sidebarOpen ? "absolute top-16 right-6" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="#" legacyBehavior>
                  <a
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;