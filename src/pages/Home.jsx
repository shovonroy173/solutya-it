import About from "../components/home/about/About";
import Article from "../components/home/article/Article";
import Banner from "../components/home/banner/Banner";
import Clients from "../components/home/clients/Clients";
import Featured from "../components/home/featured/Featured";
import Process from "../components/home/process/Process";
import Services from "../components/home/services/Services";
// import Team from "../components/home/team/Team";


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
      {/* <Team/> */}
    </div>
  );
};

export default Home;
