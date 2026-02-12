import { useLoaderData } from "react-router";
import Sliders from "../components/Sliders";
import Trendy from "../components/Trendy";
import Productivity from "../components/Productivity";
import Education from "../components/Education";
import AppsYouShouldTry from "../components/AppsYouShouldTry";

const Home = () => {
  // const {id} = useParams();
  const data = useLoaderData();
  // console.log(data,id)
  
  return (
    <div>
      <section>
        <Sliders data={data}></Sliders>
      </section>
      <section>
        <Trendy data={data}></Trendy>
      </section>
      {/* <section>
        <Productivity data={data}></Productivity>
      </section> */}
      <section>
        <Education data={data}></Education>
      </section>
      <section>
        <AppsYouShouldTry data={data}></AppsYouShouldTry>
      </section>
    </div>
  );
};

export default Home;
