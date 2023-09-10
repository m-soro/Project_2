import { Route, Routes, Link, HashRouter } from "react-router-dom";
import Account from "../pages/Account";
import Favorites from "../pages/Favorites";
import About from "../pages/About";

export default function Nav() {
  return (
    <HashRouter>
      <nav className="Nav container">
        <ul>
          <li>
            <a href="">
              <img
                src="https://github.com/m-soro/Project_2/blob/main/src/assets/images/openPeaks-fotor03.png?raw=true"
                alt=""
                className="Logo"
              />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <Link to="/about">About</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
