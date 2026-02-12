const PostedReviews = ({ data }) => {
  const { reviews } = data;

  return (
    <div>
      {reviews.map((review) => (
        <div className="card w-11/12 bg-base-100 shadow-sm my-3 mx-auto">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">🔥Hot</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{review.user}</h2>
              <span className="text-xl">⭐{review.rating}</span>
            </div>

            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostedReviews;