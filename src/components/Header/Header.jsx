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
