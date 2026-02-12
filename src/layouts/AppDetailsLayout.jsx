import CardDetails from "../components/CardDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Review from "../components/Review";
import PostedReviews from "../components/PostedReviews";
import { useLoaderData } from "react-router";

const AppDetailsLayout = () => {
    const data = useLoaderData();
    // console.log(data);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <section className="w-full">
        <CardDetails data={data}></CardDetails>
      </section>
      <section className="w-full">
        <Review></Review>
      </section>
      <section className="w-full">
        <PostedReviews></PostedReviews>
      </section>
      <footer className="w-full"><Footer></Footer></footer>
    </div>
  );
};

export default AppDetailsLayout;
