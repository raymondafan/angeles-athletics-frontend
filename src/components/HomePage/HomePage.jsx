import { useNavigate } from "react-router-dom";
const HomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="flex justify-center text-sectionHeader ">
        Welcome to Angeles Athletics!
      </h1>
      <p>
        Experience the benefits of customized stretching and cupping services
        designed to enhance your flexibility, relieve tension, and promote
        overall wellness. Let us help you achieve your health goals!
      </p>
      <button onClick={() => navigate("/services")}>Learn More</button>
    </section>
  );
};
export default HomePage;
