import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";
import Shop from "../Shop/Shop";
import Hotel from "../Hotel/Hotel";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Shop></Shop>
            <Hotel></Hotel>
        </div>
    );
};

export default Home;