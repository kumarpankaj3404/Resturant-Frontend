import HeroSection from "../components/home/HeroSection";
import Eat from "../components/home/Eat";
import Welcome from "../components/home/Welcome";
import Drink from "../components/home/Drink";
import Enjoy from "../components/home/Enjoy";
import Address from "../components/home/Address";
import HorizontalImageRow from "../components/home/HorizontalImageRow";
import ReservationSection from "../components/reservation/ReservationSection";
const Home= () => {
    return ( 
        <div >
        <HeroSection/>
        <Welcome/>
        <Eat/>
        <Drink/>
        <Enjoy/>
        <Address/>
        <HorizontalImageRow/>
        <ReservationSection/>
        </div>
     );
}
 
export default Home;