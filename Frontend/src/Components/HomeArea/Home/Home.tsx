import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Coupon from "../Coupon/Coupon";
import Deliveries from "../Deliveries/Deliveries";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Facebook from "../Facebook/Facebook";
import Favorites from "../Favorites/Favorites";
import Programmer from "../Programmer/Programmer";
import RandomBrand from "../RandomBrand/RandomBrand";
import RandomProduct from "../RandomProduct/RandomProduct";
import RandomShoes from "../RandomShoes/RandomShoes";
import Recommended from "../Recommended/Recommended";
import Sales from "../Sales/Sales";
import Specials from "../Specials/Specials";
import Ticket from "../Ticket/Ticket";
import Title from "../Title/Title";

function Home(): JSX.Element {
    return (

        // React Fragment
        <>
            {/* Interpolation */}
            <Discount/>

            {/* Conditional Rendering */}
            <Specials/>

            {/* Display List */}
            <Desserts/>

            {/* Class Component */}
            <Programmer/>

            {/* FC Props */}
            <Sales category="Beverages" percent={5} />
            <Sales category="Desserts" percent={12} />

            {/* CC Props  */}
            <Ticket date="10/11/2021" performer="Moishe Ufnik" price={100} />

            {/* FC Events */}
            <Recommended/>

            {/* CC Events */}
            <Favorites/>

            {/* CC State */}
            <BestSeller/>

            {/* Homework - State Example random product */}
            <RandomProduct/>

            {/* Lifecycle Hooks */}
            <Clock/>

            {/* useEffect */}
            <Title/>

            {/* useState */}
            <Coupon/>

            {/* Home work Soulution random 5 img with cc */}
            <RandomBrand/>

            {/* same home work but with fc */}
            <RandomShoes/>

            {/* HOC */}
            <Deliveries startingHour="09:00 AM" endingHour="20:00 PM"/>

            {/* CSS module */}
            <Facebook/>

        </>
);
}

export default Home;
