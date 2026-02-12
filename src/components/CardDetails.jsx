import { BsListNested } from "react-icons/bs";

const CardDetails = ({ data }) => {
  const {
    name,
    developer,
    description,
    rating,
    downloads,
    thumbnail,
    banner,
    category,
    features,
  } = data;
  console.log(data, features);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <img
              src={thumbnail}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5 text-xl text-blue-300">{developer}</p>
            <p className="mb-5 text-sm text-gray-300">
              ⭐{rating} | ⬇️{downloads} | {category}
            </p>
            <button className="btn btn-primary">Install</button>
            <p className="mt-5">{description}</p>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
              {features.map((feature) => (
                <p className="btn btn-sm btn-ghost badge-info badge-outline rounded-4xl">{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
