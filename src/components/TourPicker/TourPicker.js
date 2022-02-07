import styles from "./TourPicker.module.css";
import { useRef } from "react";

function TourPicker({ tourList }) {
    const formRef = useRef();
    return (
        <form className={styles[""]} ref={formRef}>
            <select>
                {tourList.map((tour, index) => {
                    return <option value={tour.index}>{tour.name}</option>;
                })}
            </select>

            <input type="submit" value="Open"></input>
        </form>
    );
}

export default TourPicker;
