import { useLoaderData, } from "react-router";
import Sliders from "../components/Sliders"
import Trendy from "../components/Trendy";

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
        </div>
    );
};

export default Home;