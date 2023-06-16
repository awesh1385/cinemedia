import {Link}from "react-router-dom";
import PageNotFoundImage from "../assets/images/PageNotFound.png";

import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
 
useTitle(`Page Not Found`);


  return (
    <main>
      <section className="felx flex-col justify-center px-2 ">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-7xl font-bold text-black my-8">
            404 Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 page not found"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link  to ="/">
            <button className="dark:text-white w-56 text-lg font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:to-indigo-400 hover:via-purple-500 hover:from-pink-500">Back to Cinemedia</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
