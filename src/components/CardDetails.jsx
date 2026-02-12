import React from "react";
import { useLoaderData, useParams } from "react-router";

const CardDetails = () => {
    const app = useLoaderData();
    const { name, developer, description, rating, downloads, thumbnail } = app;
    const {id} = useParams();
    
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
