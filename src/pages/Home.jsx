import { useLoaderData, } from "react-router";
import Sliders from "../components/Sliders"

const Home = () => {
    // const {id} = useParams();
    const data = useLoaderData();
    // console.log(data,id)
    return (
        <div>
            <section>
                <Sliders data={data}></Sliders>
            </section>
        </div>
    );
};

export default Home;