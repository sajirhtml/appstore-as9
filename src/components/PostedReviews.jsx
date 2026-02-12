const PostedReviews = ({ reviews }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-4">Ratings and Reviews</h1>
      {reviews.length === 0 ? <p>No reviews yet.</p> : 
        reviews.map((review, index) => (
          <div key={index} className="card w-11/12 bg-base-100 shadow-sm my-3 mx-auto">
            <div className="card-body">
              <span className="badge badge-xs badge-warning w-fit">🔥Hot</span>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{review.user}</h2>
                <span className="text-lg">⭐{review.rating}</span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default PostedReviews;