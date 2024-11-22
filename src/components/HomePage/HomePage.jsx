import { useNavigate } from "react-router-dom";

const HomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('./assets/hmpgbackground.jpg')] bg-cover object-custom-center bg-center bg-no-repeat text-white h-[45vh] md:h-[60vh] lg:h-[80vh] ">
      <div className="flex flex-col items-start h-full max-w-[45%] mr-[50%] ml-[5%] pt-[10%] md:pt-[12%%] lg:pt-[8%] ">
        <h1 className="text-sectionHeaderMobileTitle md:text-sectionHeaderTabletTitle lg:text-sectionHeaderTitle whitespace-nowrap pb-[5px] md:pb-[10px] lg:pb-[15px] ">
          Welcome to Angeles Athletics!
        </h1>
        <p className="pb-[15px] lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
          Experience the benefits of customized stretching and cupping services
          designed to enhance your flexibility, relieve tension, and promote
          overall wellness. For more information on our services, click below!
        </p>
        <button
          className="cursor-pointer lg:text-learnMoreButton md:text-learnMoreButtonTablet text-learnMoreButtonMobile bg-purple text-white lg:px-6 lg:py-4 md:px md:py-3 px-4 py-2 rounded-lg hover:bg-lightGrey transition-colors"
          onClick={() => navigate("/services")}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};
export default HomePage;
