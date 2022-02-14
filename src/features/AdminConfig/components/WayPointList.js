import styles from "../AdminConfig.module.css";
import { useState } from "react";
import WayPointListItem from "./WayPointListItem";
import WayPointListItemEdit from "./WayPointListItemEdit";
function WayPointList({ pointList }) {
  const [currentEditItem] = useState(-1);
  return (
    <ol className={styles["point-list"]}>
      {pointList?.map((item, index) => {
        return index === currentEditItem || true ? (
          <WayPointListItemEdit
            id={item.id}
            name={item.name}
            latitude={item.latitude}
            longditude={item.longditude}
            editItemCallback={pointList.editItemCallback}
          />
        ) : (
          <WayPointListItem
            id={item.id}
            name={item.name}
            latitude={item.latitude}
            longditude={item.longditude}
          />
        );
      })}
    </ol>
  );
}
export default WayPointList;
