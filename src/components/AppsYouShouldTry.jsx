import React from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const AppsYouShouldTry = ({ data = [] }) => {
  // Filter for apps where rating is 4.5 or below
  const suggestedApps = data.filter((app) => app.rating <= 4.5);

  return (
    <div className="w-screen mx-auto px-5 py-5 my-5 bg-base-200">
      <h2 className="text-xl font-bold mb-4">Apps You Should Try</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {suggestedApps.length > 0 ? (
          suggestedApps.map((app) => (
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
                <p className="text-xs text-gray-500 mb-2 truncate">{app.developer}</p>
                <div className="flex flex-col text-xs">
                  {/* Rating color changed to gray/blue to distinguish from top-rated apps */}
                  <span className="text-blue-500 font-medium flex items-center gap-1">
                    <FaStar /> {app.rating || "N/A"}
                  </span>
                  <span className="text-gray-600 flex items-center gap-1">
                    <PiDownloadSimpleBold /> {app.downloads?.toLocaleString() || "0"}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic text-sm">Everyone seems to love everything right now!</p>
        )}
      </div>
    </div>
  );
};

export default AppsYouShouldTry;