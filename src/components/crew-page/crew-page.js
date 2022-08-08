import Styles from "./styles.module.css";
import NavigationBar from "../navigation-bar/navigation-bar";
import { data } from "../../assets/data";
import { useState } from "react";

const CrewPage = () => {
  return (
    <section className={Styles.crewpage_wrap}>
      <NavigationBar></NavigationBar>
      <p className={Styles.heading}>
        <span>02</span>
        <span>Meet your crew</span>
      </p>
      <Crew></Crew>
    </section>
  );
};

const Crew = () => {
  const crewData = data.crew;
  const [showingIndex, setShowingIndex] = useState(0);

  return (
    <div className={Styles.crew_container}>
      {/* crew member image */}
      <div className={Styles.img_container}>
        <img
          className="img-fluid"
          src={crewData[showingIndex].images.png}
        ></img>
      </div>

      {/* crew navigation and member information container */}
      <div className={Styles.info_container}>
        {/*  */}
        {/* crew navigation buttons */}
        <div className={Styles.nav_select}>
          {crewData.map((crewMember, index) => {
            return (
              <div
                key={index}
                className={`${Styles.crew_button} ${
                  index === showingIndex ? Styles.crew_button_active : ""
                }`}
                onClick={() => setShowingIndex(index)}
              ></div>
            );
          })}
        </div>

        {/* crew member info */}
        <div className={Styles.info}>
          <h6>{crewData[showingIndex].role}</h6>
          <h1>{crewData[showingIndex].name}</h1>
          <p>{crewData[showingIndex].bio}</p>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
