import React from "react";

const Swiper = ({ data }) => {
  return (
    <div className="carousel w-full">
      {data.map((app, index) => (
        <div
          key={app.id}
          id={`slide-${index}`}
          className="carousel-item relative w-full"
        >
          <img
            src={app.banner}
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
            alt={app.name}
          />

          {/* Top-left thumbnail + name overlay */}
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-3 bg-black/50 text-white rounded-lg px-3 py-2 backdrop-blur-sm">
              <img
                src={app.thumbnail || app.icon || app.banner}
                alt={`${app.name} thumbnail`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border border-white/30"
              />
              <div className="leading-tight">
                <div className="font-semibold text-sm sm:text-base md:text-lg">{app.name}</div>
                {app.developer && (
                  <div className="text-xs sm:text-sm text-white/80">{app.developer}</div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation buttons (center) */}
          <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide-${index === 0 ? data.length - 1 : index - 1}`}
              className="btn btn-circle btn-ghost  text-black hover:bg-white"
            >
              ❮
            </a>
            <a
              href={`#slide-${index === data.length - 1 ? 0 : index + 1}`}
              className="btn btn-circle btn-ghost hover:bg-white"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Swiper;
