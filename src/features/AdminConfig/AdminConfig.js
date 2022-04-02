import styles from "./AdminConfig.module.css";
import WayPointList from "./components/WayPointList";
import TourPicker from "../../components/TourPicker";
import { useReducer, useEffect } from "react";

/* This will be stored somewhere proper, eventually. for now, use this to build the site */

const tourList = [
  {
    name: "Headington Campus",
    id: 123,
    waypoints: [
      {
        id: 1,
        name: "JHB Ramp",
        latitude: 51.755291,
        longditude: -1.225515,
      },
      {
        id: 2,
        name: "JHB Reception",
        latitude: 51.755,
        longditude: -1.22525,
      },
    ],
  },
  {
    name: "Wheatley Campus",
    id: 321,
    waypoints: [
      {
        id: 1,
        name: "PG101",
        latitude: 51.7494,
        longditude: -1.127831,
      },
      {
        id: 2,
        name: "Dora Cohen",
        latitude: 51.74894,
        longditude: -1.1268,
      },
    ],
  },
];

const tourReducer = (state, action) => {
  switch (action.type) {
    case "appendWaypoint": {
      return {
        ...state,
        waypoints: [...state.waypoints, action.payload],
      };
    }
    case "deleteWaypoint": {
      const index = state.waypoints.findIndex(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        waypoints: [
          ...state.waypoints.slice(0, index),
          ...state.waypoints.slice(index + 1),
        ],
      };
    }
    case "setWaypoints": {
      return {
        ...state,
        waypoints: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
function AdminConfig() {
  const [currentTour, dispatchTour] = useReducer(
    tourReducer,
    JSON.parse(localStorage.getItem("currentTour")) || tourList[0]
  );

  console.log(JSON.parse(localStorage.getItem("currentTour")));

  const addWayPoint = () => {
    const ids = currentTour.waypoints.map((waypoint) => {
      return waypoint.id;
    });
    const newId = Math.max(...ids) + 1;
    //find the highest id
    //set the default name
    // set the deafult lat and long...

    const newWayPoint = {
      id: newId,
      name: "The dog",
      latitude: 55.946885,
      longditude: -3.191262,
    };
    //setItem(newWayPoint);
    dispatchTour({
      type: "appendWaypoint",
      payload: newWayPoint,
    });
  };

  const deleteWaypoint = (waypoint) => {
    dispatchTour({
      type: "deleteWaypoint",
      payload: waypoint,
    });
  };

  const setItem = (item) => {
    const newList = [...currentTour.waypoints];
    const index = currentTour.waypoints.findIndex(
      (listItem) => listItem.id === item.id
    );
    newList[index] = {
      ...newList[index],
      ...item,
    };
    dispatchTour({ type: "setWaypoints", payload: newList });
  };

  useEffect(() => {
    console.log("currentT", currentTour);
    localStorage.setItem("currentTour", JSON.stringify(currentTour));
    // localStorage.clear();
  }, [currentTour]);

  return (
    <div className={styles[""]}>
      <TourPicker tourList={tourList} />
      <div>
        {" "}
        <WayPointList
          pointList={currentTour.waypoints}
          editItemCallback={setItem}
          deleteWaypoint={deleteWaypoint}
        />
        <button onClick={addWayPoint}>Add waypoint</button>
      </div>
    </div>
  );
}

export default AdminConfig;
