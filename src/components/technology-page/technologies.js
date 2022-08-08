import NavigationBar from "../navigation-bar/navigation-bar";
import Styles from "./styles.module.css";
import { data } from "../../assets/data";
import { useEffect, useState } from "react";

const Technologies = () => {
  return (
    <section className={Styles.techs_wrap}>
      <NavigationBar></NavigationBar>
      <p className={Styles.heading}>
        <span>03</span>
        <span>Space launch 101</span>
      </p>
      <Techs></Techs>
    </section>
  );
};

const Techs = () => {
  const technologies = data.technology;
  const [showingIndex, setShowingIndex] = useState(0);
  const [winSize, setWinSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWinSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={Styles.techs_container}>
      {/* image container */}
      <div className={Styles.img_container}>
        <img
          src={`${
            winSize < 996
              ? technologies[showingIndex].images.landscape
              : technologies[showingIndex].images.portrait
          }`}
          className="img-fluid"
        ></img>
      </div>

      {/* tech number buttons & tech info */}
      <div className={Styles.tech_info}>
        {/*  */}
        <div className={Styles.tech_select}>
          {technologies.map((tech, index) => {
            return (
              <button
                key={index}
                className={`${Styles.tech_navigation} ${
                  index === showingIndex ? Styles.tech_navigation_active : ""
                }`}
                onClick={() => setShowingIndex(index)}
              >{`${index + 1}`}</button>
            );
          })}
        </div>
        {/*  */}
        <div className={Styles.info}>
          <h6>The Terminalogy</h6>
          <h1>{technologies[showingIndex].name}</h1>
          <p>{technologies[showingIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
