import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import NavigationBar from "../navigation-bar/navigation-bar";

const HomePage = () => {
  return (
    <section className={`text-center text-white ${styles.home_container}`}>
      <NavigationBar></NavigationBar>
      <div className={styles.main_container}>
        <div className={styles.info_container}>
          <h3 className="lead text-uppercase">so you want to travel to</h3>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.button_container }>
          <Link to="/destinations">
            <button >Explore</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
