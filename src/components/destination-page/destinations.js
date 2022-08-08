import styles from "./styles.module.css";
import NavigationBar from "../navigation-bar/navigation-bar";
import { data } from "../../assets/data.js";
import { useState } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState(data.destinations);
  const [showingIndex, setShowingIndex] = useState(0);

  const changeDestination = (index) => {
    setShowingIndex(index);
  };

  return (
    <>
      <section className={styles.destinations_container}>
        <NavigationBar></NavigationBar>
        <div className={styles.heading}>
          <p className="text-center text-light mb-5">
            <span>01</span>
            <span>pick your destination</span>
          </p>
        </div>
        <div className={styles.info_container}>
          {/* tabs container */}
          <div className={styles.tabs_container}>
            {destinations.map((destination, index) => {
              return (
                <div key={index} className={styles.tab_wrap}>
                  <button
                    onClick={() => changeDestination(index)}
                    className={index === showingIndex ? styles.active_tab : ""}
                    style={{ color: index === showingIndex ? "#fff" : "" }}
                  >
                    {destination.name}
                    <div
                      className={styles.tab_after}
                      style={{
                        backgroundColor: index === showingIndex ? "#fff" : "",
                        width: index === showingIndex ? "100%" : "",
                      }}
                    ></div>
                  </button>
                </div>
              );
            })}
          </div>

          <Destination showingIndex={showingIndex}></Destination>
        </div>
      </section>
    </>
  );
};

const Destination = ({ showingIndex }) => {
  const { name, images, description, distance, travel } =
    data.destinations[showingIndex];

  return (
    <>
      <div className={styles.destination_container}>
        <div className={styles.destination_img}>
          <img src={images.png} alt="moon" className="img-fluid"></img>
        </div>

        <div className={styles.info_wrap}>
          <h1>{name}</h1>
          <p>{description}</p>
          <div className={styles.horizontal_line}></div>
          <div className={styles.travel_info}>
            {/* distance */}
            <div className="mx-5">
              <p>avg. distance</p>
              <p>{distance}</p>
            </div>
            {/* travel time */}
            <div className="mx-5">
              <p>est. travel time</p>
              <p>{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
