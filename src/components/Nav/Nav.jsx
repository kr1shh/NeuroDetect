import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav>
        <div className="nav_container">
          {pathname !== "/" && (
            <div className="_back">
              <Link to="/" style={{color: "white"}}>
                <IoIosArrowBack style={{ fontSize: "30px" }} />
              </Link>
            </div>
          )}

          <div className="_logo">
            <Link to="/">
              <span>Neuro Detect</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
