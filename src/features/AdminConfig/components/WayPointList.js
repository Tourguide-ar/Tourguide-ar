import styles from "../AdminConfig.module.css";
import { useState } from "react";
import WayPointListItem from "./WayPointListItem";
import WayPointListItemEdit from "./WayPointListItemEdit";

function WayPointList({ pointList, editItemCallback, deleteWaypoint }) {
  const [currentEditItem, setCurrentEditItem] = useState(-1);

  return (
    <ol className={styles["point-list"]}>
      {pointList?.map((item, index) => {
        return index === currentEditItem || true ? (
          <WayPointListItemEdit
            id={item.id}
            name={item.name}
            latitude={item.latitude}
            longditude={item.longditude}
            editItemCallback={editItemCallback}
            deleteWaypoint={deleteWaypoint}
          />
        ) : (
          <WayPointListItem
            id={item.id}
            name={item.name}
            latitude={item.latitude}
            longditude={item.longditude}
            setItemEditActive={setCurrentEditItem(item.id)}
            deleteWaypoint={deleteWaypoint}
          />
        );
      })}
    </ol>
  );
}
export default WayPointList;
