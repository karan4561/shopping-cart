import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex flex-row  pl-16 pt-8 pb-3 border-b-2 text-lg justify-between">
      <div className="space-x-5">
        <span className="font-bold text-green-400 underline">Menu</span>
        <span>About</span>
        <span>Other Branches</span>
      </div>
      <button className="mr-10 border-2 px-6 py-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Header;
