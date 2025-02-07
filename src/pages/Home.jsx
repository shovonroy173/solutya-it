import About from "../components/home/about/About";
import Adv from "../components/home/adv/Adv";
import Article from "../components/home/article/Article";
import Banner from "../components/home/banner/Banner";
import Clients from "../components/home/clients/Clients";
import Contact from "../components/home/contact/Contact";
import Featured from "../components/home/featured/Featured";
import Footer from "../components/home/footer/Footer";
import Process from "../components/home/process/Process";
import Promo from "../components/home/promo/Promo";
import Review from "../components/home/review/Review";
import Services from "../components/home/services/Services";
import Team from "../components/home/team/Team";


const Home = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <Services/>
      <Clients/>
      <Featured/>
      <Process/>
      <Article/>
      <Team/>
      <Promo/>
      <Review/>
      <Contact/>
      <Adv/>
      <Footer/>
    </div>
  );
};

export default Home;
