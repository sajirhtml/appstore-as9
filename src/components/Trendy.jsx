import React from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Trendy = ({ data = [] }) => {
  const trendyApps = [...data]
    .filter((app) => app.is_trending)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));

  return (
    <div className="w-screen mx-auto px-5 py-5 my-5 bg-base-200">
      <h2 className="text-xl font-bold mb-4">Top Rated Apps</h2>
      <div className="flex overflow-auto">
        <div className="flex justify-center gap-3">
          {trendyApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{app.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{app.developer}</p>
                <div className="flex flex-col  text-xs">
                  <span className="text-yellow-500 font-medium flex items-center gap-1"><FaStar /> {app.rating || "N/A"}</span>
                  <span className="text-gray-600 flex items-center gap-1"><PiDownloadSimpleBold />{app.downloads || "0"} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendy;