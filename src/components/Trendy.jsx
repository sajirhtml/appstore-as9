import React from "react";

const Trendy = ({ data = [] }) => {
  const trendyApps = data.filter((app) => app.is_trending);

  return (
    <div className="w-screen mx-auto px-5 py-5 my-5 bg-base-200">
      <h2 className="text-xl font-bold mb-4">Trending Apps</h2>
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
                <h3 className="font-semibold">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.developer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendy;
