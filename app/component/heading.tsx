import Image from "next/image";
import Link from "next/link";

const Heading = () => {
  return (
    <header className="bg-white">
      <nav className="flex p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Menu</span>
            <Image
              src="/images/logo.svg" //e
              alt="Logo"
              className="w-auto h-8"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex-initial hidden lg:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Resource
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-end hidden lg:flex lg:flex-1">
          <div className="flex space-x-4">
            <button
              type="button"
              className="text-sm font-semibold text-gray-900"
            >
              Login
            </button>
            <button
              type="button"
              className="px-4 py-2 font-semibold text-white rounded-full bg-Cyan"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="flex justify-end flex-1 lg:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Princing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resource
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
