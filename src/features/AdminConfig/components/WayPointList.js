import styles from "../AdminConfig.module.css";
import { useState} from "react";
import WayPointListItem from "./WayPointListItem";
import WayPointListItemEdit from "./WayPointListItemEdit";
function WayPointList({pointList}) {
    const [currentEditItem, setCurrentEditItem] = useState(false);
    return (
        <ol className={styles["point-list"]}
        >
        {pointList.PointList?.map((item,index) => {
            return (
                index===currentEditItem ? ( <WayPointListItemEdit
                    id={item.id}
                    name={item.name}
                    latitude={item.latitude}
                    longditude={item.longditude}
                /> 
                    ) : (
                    <WayPointListItem
                    id={item.id}
                    name={item.name}
                    latitude={item.latitude}
                    longditude={item.longditude}
                /> 
                 )  
            );
        })}
        </ol>
    );
}
        export default WayPointList;