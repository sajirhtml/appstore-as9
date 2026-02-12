import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Review = ({ onAddReview, hasPermission }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const{user} = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasPermission) {
      toast.error("You must install the app at least once to leave a review!");
      return;
    }
    if (!comment.trim()) return;

    const newReview = {
      user: `${user.displayName}`,
      rating: parseInt(rating),
      comment: comment,
    };

    onAddReview(newReview);
    setComment(""); 
  };

return (
    <div>
        <fieldset className="md:w-3xl fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
                <h1 className="text-xl font-semibold">Review this app</h1>
                
                <div className="flex flex-col w-full gap-2">
                    <input
                        type="text"
                        className="input w-full bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 transition"
                        placeholder="Write your review here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        disabled={!hasPermission}
                    />
                    <div className="flex items-center gap-2">
                        <span>Rating:</span>
                        <input 
                            type="number" 
                            min="1" max="5" 
                            className="input w-20 bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 transition" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            disabled={!hasPermission}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={!hasPermission}
                    >
                        {hasPermission ? "Submit Review" : "Install App to Review"}
                    </button>
                </div>
            </form>
        </fieldset>
    </div>
);
};
export default Review;