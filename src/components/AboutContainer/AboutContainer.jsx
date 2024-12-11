import AboutGoals from "../AboutGoals/AboutGoals";
import AboutPage from "../AboutPage/AboutPage";
const AboutContainer = ({}) => {
  return (
    <div className="flex flex-col bg-wheat ">
      <AboutPage />
      <AboutGoals />
    </div>
  );
};

export default AboutContainer;
