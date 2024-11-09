import NavBar from "../NavBar/Navbar";

const Header = ({ showMenu, onCloseMenu, onToggleMenu }) => {
  return (
    <header>
      <NavBar
        showMenu={showMenu}
        onCloseMenu={onCloseMenu}
        onToggleMenu={onToggleMenu}
      />
    </header>
  );
};
export default Header;
//Welcome to Angeles Athletics! Experience the benefits of customized stretching and cupping services designed to enhance your flexibility, relieve tension, and promote overall wellness. Let us help you achieve your health goals!
