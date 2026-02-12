import { useLoaderData } from "react-router";
import Sliders from "../components/Sliders";
import SmallCards from "../components/SmallCards";

const Home = () => {
  const data = useLoaderData();
  const trendyApps = [...data]
    .filter((app) => app.is_trending)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));
const educationApps = data.filter((app) => app.category === "Education");
const productivityApps = data.filter((app) => app.category === "Productivity");
const suggestedApps = data.filter((app) => app.rating <= 4.5);
  
  return (
    <div>
      <section>
        <Sliders data={data}></Sliders>
      </section>
      <section>
        <SmallCards title="Trending Apps" data={trendyApps}></SmallCards>
      </section>
      <section>
        <SmallCards title="Productivity Apps" data={productivityApps}></SmallCards>
      </section>
      <section>
        <SmallCards title="Education Apps" data={educationApps}></SmallCards>
      </section>
      <section>
        <SmallCards title="Apps You Should Try" data={suggestedApps}></SmallCards>
      </section>
    </div>
  );
};

export default Home;
