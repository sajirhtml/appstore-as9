import React from "react";

const Review = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Settings</legend>
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="Product name"
          />
          <button className="btn join-item">save</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Review;
