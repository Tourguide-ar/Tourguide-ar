import styles from "./TourPicker.module.css";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TourPicker({ tourList }) {
  const formRef = useRef();
  const [currentTour, setCurrentTour] = useState({});

  useEffect(() => {
    localStorage.setItem("currentTour", currentTour);
  }, [currentTour]);

  return (
    <form className={styles[""]} ref={formRef}>
      <select
        defaultValue=""
        onChange={(e) => {
          setCurrentTour(tourList[e.target.selectedIndex]);
        }}
      >
        {tourList.map((tour, index) => {
          return (
            <option key={index} value={tour.index}>
              {tour.name}
            </option>
          );
        })}
        {/* mything?.length   --- the ? means "if mything doesn't exist, don't worry about it" */}
        <option value="" disabled hidden>
          Choose a tour
        </option>
      </select>
      <div>
        {currentTour.waypoints?.length}
        {currentTour.waypoints ? " in this tour" : "Please select a tour"}
      </div>

      <button className="button" type="submit" value="Open">
        Open
      </button>
      <Link to="/stage">
        <button className="button" type="button" value="Load Tour">
          Load Tour
        </button>
      </Link>
    </form>
  );
}

export default TourPicker;
