import HeroSection from "../components/home/HeroSection";
import Eat from "../components/home/Eat";
import Welcome from "../components/home/Welcome";
import Drink from "../components/home/Drink";
import Enjoy from "../components/home/Enjoy";
import Address from "../components/home/Address";
import HorizontalImageRow from "../components/home/HorizontalImageRow";
import ReservationSection from "../components/reservation/ReservationSection";
import { motion } from "motion/react";
const Home= () => {
    return ( 
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className="dark:bg-gray-900"
        >
        <HeroSection/>
        <Eat/>
        <Drink/>
        <Enjoy/>
        <Address/>
        <HorizontalImageRow/>
        <ReservationSection/>
        </motion.div>
     );
}
 
export default Home;