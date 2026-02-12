import { useState } from "react";
import CardDetails from "../components/CardDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Review from "../components/Review";
import PostedReviews from "../components/PostedReviews";
import { useLoaderData } from "react-router";

const AppDetailsLayout = () => {
  const data = useLoaderData();
  
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasEverInstalled, setHasEverInstalled] = useState(false);
  const [localReviews, setLocalReviews] = useState(data.reviews || []);

  const handleInstallToggle = () => {
    setIsInstalled(!isInstalled);
    if (!isInstalled) setHasEverInstalled(true);
  };

  const handleAddReview = (newReview) => {
    setLocalReviews([newReview, ...localReviews]);
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <header className="w-full">
        <Navbar />
      </header>
      <section className="w-full">
        <CardDetails 
          data={data} 
          isInstalled={isInstalled} 
          onInstallToggle={handleInstallToggle} 
        />
      </section>
      <section className="my-5 md:my-10">
        <Review 
          onAddReview={handleAddReview} 
          hasPermission={hasEverInstalled} 
        />
      </section>
      <section className="md:py-10 w-full bg-amber-100 p-5">
        <PostedReviews reviews={localReviews} />
      </section>
      <footer className="w-full"><Footer /></footer>
    </div>
  );
};

export default AppDetailsLayout;