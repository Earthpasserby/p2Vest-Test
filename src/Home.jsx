import Bills from "./Components/Bills";
import ContactForm from "./Components/ContactForm";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";
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
        <Bills />
        <Faqs />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};
export default Home;
