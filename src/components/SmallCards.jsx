import React from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from "react-router";

const SmallCards = ({ title, data }) => {
  return (
    <div className="w-screen mx-auto px-5 py-5 my-5 bg-base-200">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <style>{`.hide-scrollbar::-webkit-scrollbar{display:none;} .hide-scrollbar{-ms-overflow-style:none; scrollbar-width:none;}`}</style>
      <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
        {data.map((app) => (
            <Link to={`/app/${app.id}`}>
          <div
            key={app.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-40 flex-shrink-0"
          >
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm truncate">{app.name}</h3>
              <p className="text-xs text-gray-500 mb-2 truncate">
                {app.developer}
              </p>
              <div className="flex flex-col text-xs">
                <span className="text-yellow-500 font-medium flex items-center gap-1">
                  <FaStar /> {app.rating || "N/A"}
                </span>
                <span className="text-gray-600 flex items-center gap-1">
                  <PiDownloadSimpleBold /> {app.downloads || "0"}
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallCards;
