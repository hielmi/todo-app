import { useState } from "react";
import { BiSun, BiSolidSun } from "react-icons/bi";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkmode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Todo List
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                id="theme-toggle"
                type="button"
                className="bg-dark-900 dark:bg-white hover:bg-gray-500 dark:hover:bg-gray-700  border-2 dark:border-dark-900 dark:hover:border-gray-700 rounded-lg text-sm p-2.5"
                onClick={toggleDarkmode}
              >
                {isDark ? (
                  <BiSun color="#111827" />
                ) : (
                  <BiSolidSun color="#111827" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
