import { DarkThemeToggle } from "flowbite-react";
import GithubIcon from "./icons/GithubIcon";

const Navbar = () => {
  let isOpen: boolean = false;

  const toggleSidebar = () => {
    let sidebar = document.getElementById("logo-sidebar") as HTMLElement;
    let toggleBtn = document.getElementById("toggleSidebarBtn") as HTMLElement;
    console.log(getComputedStyle(toggleBtn).getPropertyValue("flex-grow"));
    if (getComputedStyle(toggleBtn).getPropertyValue("flex-grow") === "1") {
      console.log("open");
      isOpen = !isOpen;

      if (isOpen) {
        sidebar.style.width = "0";
        sidebar.style.visibility = "hidden";
      } else {
        sidebar.style.width = "260px";
        sidebar.style.visibility = "visible";
      }

      if (!sidebar.classList.contains("-translate-x-full")) {
        sidebar?.classList.toggle("-translate-x-full");
      }
    } else {
      console.log("closed");
      isOpen = false;
      sidebar.style.removeProperty("width");
      sidebar.style.removeProperty("visibility");
      const overlay = document.getElementById("sidebar-overlay");
      sidebar?.classList.toggle("-translate-x-full");
      overlay?.classList.toggle("hidden");
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-gray-700">
      <div className="px-6 py-3 lg:px-6 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarBtn"
              onClick={toggleSidebar}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex sm-md:flex-grow items-center p-2 text-sm  text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <h1 className="text-2xl text-center font-bold text-slate-800 dark:text-slate-300">
              Chat to your database
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-4">
              <DarkThemeToggle className=" text-2xl text-slate-800" />
              <a
                href="https://github.com/Syed007Hassan/NextJs-Langchain-Agents-SQL"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <GithubIcon />
                {/* <h4 className="text-slate-300 ml-4">v0.1.0</h4> */}
              </a>
            </div>
          </div>
          {/* <div className="flex items-center">
          <div className="flex items-center ml-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
