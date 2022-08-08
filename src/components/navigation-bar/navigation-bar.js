import styles from "./styles.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = () => {
  const [isShowSidePannel, setIsShowSidePannel] = useState(false);

  const toggleSidePannel = () => {
    setIsShowSidePannel(!isShowSidePannel);
  };

  return (
    <nav>
      <section className={styles.nav_container}>
        {/* logo and hamburger button */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button onClick={toggleSidePannel}>
            <img src={hamburger} alt="" />
          </button>
        </div>
        {/* horizontal line */}
        <div className={styles.line}></div>
        {/* navigation links */}
        <div className={styles.links_container}>
          <div>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: "solid 3px #fff" }
                  : { border: "none" }
              }
            >
              <b>00</b>Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/destinations"
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: "solid 3px #fff" }
                  : { border: "none" }
              }
            >
              <b>01</b>Destination
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/crew"
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: "solid 3px #fff" }
                  : { border: "none" }
              }
            >
              <b>02</b>Crew
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/technology"
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: "solid 3px #fff" }
                  : { border: "none" }
              }
            >
              <b>03</b>Technology
            </NavLink>
          </div>
        </div>
        {/* side pannel for mobile devices */}
        <SidePannel
          toggleSidePannel={toggleSidePannel}
          isShowSidePannel={isShowSidePannel}
        ></SidePannel>
      </section>
    </nav>
  );
};

const SidePannel = ({ isShowSidePannel, toggleSidePannel }) => {
  return (
    <div
      className={
        `${styles.links_container_side}` +
        " " +
        (isShowSidePannel ? styles.show_sidePannel : "")
      }
    >
      <button onClick={toggleSidePannel}>
        <img src={closeBtn} alt="" />
      </button>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { borderLeft: "solid 3px #fff" } : { border: "none" }
        }
      >
        <b>00</b>Home
      </NavLink>
      <NavLink
        to="/destinations"
        style={({ isActive }) =>
          isActive ? { borderLeft: "solid 3px #fff" } : { border: "none" }
        }
      >
        <b>01</b>Destination
      </NavLink>
      <NavLink
        to="/crew"
        style={({ isActive }) =>
          isActive ? { borderLeft: "solid 3px #fff" } : { border: "none" }
        }
      >
        <b>02</b>Crew
      </NavLink>
      <NavLink
        to="/technology"
        style={({ isActive }) =>
          isActive ? { borderLeft: "solid 3px #fff" } : { border: "none" }
        }
      >
        <b>03</b>Technology
      </NavLink>
    </div>
  );
};
export default NavigationBar;
