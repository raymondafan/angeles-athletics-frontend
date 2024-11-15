import { useNavigate } from "react-router-dom";

const HomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <section className="bg-[url('./assets/hmpgbackground.jpg')] bg-cover object-custom-center bg-center bg-no-repeat text-white h-[40vh] md:h-[60vh] lg:h-[77vh]">
      <div className="flex flex-col items-start h-full max-w-[45%] mr-[50%] ml-[5%] pt-[12%] md:pt-[8%] lg:pt-[10%] ">
        <h1 className="text-sectionHeaderMobileTitle md:text-sectionHeaderTabletTitle lg:text-sectionHeaderTitle whitespace-nowrap pb-[5px] md:pb-[10px] lg:pb-[15px] ">
          Welcome to Angeles Athletics!
        </h1>
        <p className="pb-[5px] md:pb-[10px] lg:pb-[15px] lg:text-sectionParagraph md:text-sectionParagraphTablet text-sectionParagraphMobile">
          Experience the benefits of customized stretching and cupping services
          designed to enhance your flexibility, relieve tension, and promote
          overall wellness. Let us help you achieve your health goals!
        </p>
        <button onClick={() => navigate("/services")}>Learn More</button>
      </div>
    </section>
  );
};
export default HomePage;
