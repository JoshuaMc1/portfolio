import PropTypes from "prop-types";
import useScroll from "../hooks/useScroll";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ getTranslation, lang, handleChangeLang }) => {
  const isScrolled = useScroll();
  const { hash } = useLocation();

  return (
    <>
      <div
        className={`navbar sticky top-0 z-50 ${isScrolled && "bg-base-300 shadow-md transition-colors duration-150 ease-in "}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a className={hash === "#about" ? "active" : ""} href="#about">
                  {getTranslation("about")}
                </a>
              </li>
              <li>
                <a
                  className={hash === "#projects" ? "active" : ""}
                  href="#projects"
                >
                  {getTranslation("projects")}
                </a>
              </li>
              <li>
                <a
                  className={hash === "#skills" ? "active" : ""}
                  href="#skills"
                >
                  {getTranslation("skills")}
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            {getTranslation("portfolio")}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className={hash === "#about" ? "active" : ""} href="#about">
                {getTranslation("about")}
              </a>
            </li>
            <li>
              <a
                className={hash === "#projects" ? "active" : ""}
                href="#projects"
              >
                {getTranslation("projects")}
              </a>
            </li>
            <li>
              <a className={hash === "#skills" ? "active" : ""} href="#skills">
                {getTranslation("skills")}
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <select
            className="select select-ghost"
            name="lang"
            id="lang"
            onChange={(e) => handleChangeLang(e.target.value)}
            defaultValue={lang}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  getTranslation: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  handleChangeLang: PropTypes.func.isRequired,
};

export default Navbar;
