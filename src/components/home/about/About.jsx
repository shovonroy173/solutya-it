import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const About = () => {
  return (
    <div className="py-20 px-6 md:px-20 flex flex-wrap justify-center items-center gap-12">
      <AboutLeft/>
      <AboutRight/>
    </div>
  );
};

export default About;
