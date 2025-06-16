import HeroSection from "./Components/HeroSection";
import Shop from "./Components/Shop";
import Wallet from "./Components/Wallet";

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <HeroSection />
        <Wallet />
        <Shop />
      </div>
    </>
  );
};
export default Home;
