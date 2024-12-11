import { useNavigate } from "react-router-dom";
import runningManIcon from "../../assets/runningman.svg";
import heartRateIcon from "../../assets/activity.svg";
const AboutHomeIntro = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-wheat flex flex-col lg:p-[5%] md:p-[5%] p-[10%] items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center  text-purple text-sectionHeaderMobileTitle md:text-sectionHeaderTabletTitle lg:text-sectionHeaderTitle pb-[5px] md:pb-[10px] lg:pb-[15px] ">
          Meet the Mind Behind Angeles Athletics
        </h1>
        <p className="text-center lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
          Angeles Athletics was founded with a deep passion for <br /> helping
          individuals achieve their health and wellness goals.
        </p>
        <ul className="flex  flex-col items-center">
          <div className="flex lg:flex-row flex-col gap-[50px] p-8">
            <li className="flex flex-col items-center lg:max-w-[500px] md:max-w-[400px] max-w-[300px] text-center">
              <img
                className="lg:h-[150px] lg:w-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px] pb-[5px] md:pb-[10px] lg:pb-[15px]"
                src={runningManIcon}
                alt="running man"
              />
              <p className="text-center lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
                With a focus on personalized care, we aim to bridge the gap
                between recovery, flexibility, and overall vitality.
              </p>
            </li>
            <li className="flex flex-col items-center lg:max-w-[500px] md:max-w-[400px] max-w-[300px]  text-center ">
              <img
                className="lg:h-[150px] lg:w-[150px] md:h-[100px] md:w-[100px] h-[75px] w-[75px] pb-[5px] md:pb-[10px] lg:pb-[15px]"
                src={heartRateIcon}
                alt="heart rate"
              />
              <p className="text-center lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
                Our philosophy is simple: when you move better, you feel better.
                Curious to learn more about our story and approach? Click below
                to dive deeper.
              </p>
            </li>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="cursor-pointer lg:text-learnMoreButton md:text-learnMoreButtonTablet text-learnMoreButtonMobile bg-purple text-white lg:px-6 lg:py-4 md:px md:py-3 px-4 py-2 rounded-lg hover:bg-lightGrey transition-colors"
          >
            About Us
          </button>
        </ul>
      </div>
    </section>
  );
};
export default AboutHomeIntro;
