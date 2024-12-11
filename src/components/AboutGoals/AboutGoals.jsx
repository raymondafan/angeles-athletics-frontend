import headshot from "../../assets/headshot.jpg";
import { useNavigate } from "react-router-dom";
const AboutGoals = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col bg-gray-200  lg:p-[5%] md:p-[5%] p-[10%]">
      <div className="flex lg:flex-row md:flex-row flex-col items-center">
        <img
          className="rounded-full lg:h-[360px] lg:w-[360px] md:h-[300px] md:w-[300px] h-[200px] w-[200px] object-cover"
          src={headshot}
          alt="headshot"
        />
        <div className="flex flex-col p-[5%]">
          <h1 className="text-purple text-titleMobile md:text-titleTablet lg:text-title  font-bold pb-[2%]">
            Gabe's Goals
          </h1>
          <p className="lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile pb-[2%]">
            My primary goal is to provide a comprehensive and personalized
            approach to stretching and flexibility training. I believe that this
            can help individuals achieve their health and wellness goals by
            addressing their unique needs and preferences.
          </p>
          <p className="lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
            I am committed to working closely with clients to create a plan that
            aligns with their goals and preferences. Click the button below to
            book a session with me!
          </p>
        </div>
      </div>{" "}
      <button
        onClick={() => navigate("/booking")}
        className="cursor-pointer lg:text-learnMoreButton md:text-learnMoreButtonTablet text-learnMoreButtonMobile bg-purple text-white lg:px-8 lg:py-6 md:px md:py-5 px-6 py-4 rounded-lg hover:bg-lightGrey transition-colors mt-[5%] lg:mr-[500px] md:mr-[250px] mr-[5%] ml-[5%] lg:ml-[500px] md:ml-[250px]"
      >
        Book Now
      </button>
    </section>
  );
};

export default AboutGoals;
