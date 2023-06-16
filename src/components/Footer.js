import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-2  shadow dark:border-black dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Cinemedia™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/awesh1385"
              target="__blank"
              className="mr-4 hover:underline md:mr-6 " refs="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/awesh-taral-48042a247"
              target="__blank"
              className="mr-4 hover:underline md:mr-6" refs="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/i/flow/login"
              target="__blank"
              className="mr-4 hover:underline md:mr-6" refs="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="__blank" className=" hover:underline" refs="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
