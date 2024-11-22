import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="App min-h-screen flex flex-col">
      <Header
        showMenu={showMenu}
        onCloseMenu={closeMenu}
        onToggleMenu={toggleMenu}
      />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
