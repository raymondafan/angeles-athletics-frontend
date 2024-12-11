import linkedinLink from "../../assets/linkedin.svg";
import instagramLink from "../../assets/instagram.svg";
import { Link } from "react-router-dom";
const Footer = ({ onCloseMenu }) => {
  return (
    <footer className="bg-wheat m-0 p-0 overflow-hidden shrink-0 py-[2%] px-[5%]">
      <div className="flex flex-col justify-center">
        <ul className="flex flex-col md:flex-row lg:flex-row  md:justify-between lg:justify-between pb-[30px]">
          <div className="flex flex-col gap-[10px]">
            <li className="text-footerTitle text-purple">Angeles Athletics</li>

            <li className="text-footerParagraph">
              3307 Fourth Ave San Diego, CA 92103
            </li>
            <div className="flex flex-row gap-[20px] ">
              <li>
                <Link
                  to="/"
                  onClick={onCloseMenu}
                  className="cursor-pointer text-footerParagraph hover:text-purple transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={onCloseMenu}
                  className="cursor-pointer text-footerParagraph hover:text-purple transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={onCloseMenu}
                  className="cursor-pointer text-footerParagraph hover:text-purple transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={onCloseMenu}
                  className="cursor-pointer text-footerParagraph hover:text-purple transition-colors"
                >
                  Contact
                </Link>
              </li>
            </div>
          </div>
          <div className="flex flex-row gap-[10px] md:gap-[20px] lg:gap-[30px] pt-[10px] lg:pt-[0px] md:pt-[0px]">
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-angeles-40a3a7330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLink}
                  alt="LinkedIn Logo"
                  className="lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[20px] w-[30px] opacity-100 hover:opacity-50 transition-opacity"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gabriel-angeles-40a3a7330/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramLink}
                  alt="Instagram Logo"
                  className="lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[20px] w-[30px] opacity-100 hover:opacity-50 transition-opacity"
                />
              </a>
            </li>
          </div>
        </ul>
        <p className="text-silver text-footerCopyright">
          &copy; {new Date().getFullYear()} Angeles Athletics LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
