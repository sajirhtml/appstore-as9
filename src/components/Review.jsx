import React from "react";

const Review = () => {
  return (
    <div>
      <fieldset className=" md:w-3xl fieldset bg-base-200 border-base-300 rounded-box border p-4 ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl font-semibold">Review this app</h1>
          <div className="join">
            <input
              type="text"
              className="input join-item w-11/12"
              placeholder="Write your review here..."
            />
            <button className="btn join-item">Submit</button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Review;
